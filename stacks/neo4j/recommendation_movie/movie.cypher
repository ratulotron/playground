// Personalized Product Recommendations with Neo4j
// :play https://guides.neo4j.com/sandbox/recommendations/index.html

match (m:Movie)<-[:RATED]-(u:User) 
where m.title contains "Matrix"
with m.title as movie, count(*) as reviews
return movie, reviews
order by reviews desc
limit 5;


// "Products similar to the product you’re looking at now"
MATCH p=(m:Movie {title: "Net, The"})-[:ACTED_IN|IN_GENRE|DIRECTED*2]-()
RETURN p LIMIT 25

// "Users who bought this thing, also bought that other thing."
MATCH (m:Movie {title: "Crimson Tide"})<-[:RATED]-(u:User)-[:RATED]->(rec:Movie)
RETURN rec.title AS recommendation, COUNT(*) AS usersWhoAlsoWatched
ORDER BY usersWhoAlsoWatched DESC LIMIT 25

// Find movies most similar to Inception based on shared genres
MATCH (m:Movie)-[:IN_GENRE]->(g:Genre)<-[:IN_GENRE]-(rec:Movie)
WHERE m.title = "Inception"
WITH rec, COLLECT(g.name) as genres, COUNT(*) AS commonGenres
RETURN rec.title, genres, commonGenres
ORDER BY commonGenres DESC LIMIT 10;

// If we know what movies a user has watched, we can use this information to recommend similar movies:
// Recommend movies similar to those the user has already watched
// Content recommendation by overlapping genres
MATCH (u:User {name: "Angelica Rodriguez"})-[r:RATED]->(m:Movie),
    (m)-[:IN_GENRE]->(g:Genre)<-[:IN_GENRE]-(rec:Movie)
WHERE NOT EXISTS( (u)-[:RATED]->(rec) )
WITH rec, [g.name, COUNT(*)] as scores
RETURN rec.title AS recommendation, rec.year AS year,
COLLECT(scores) AS scoreComponents,
REDUCE (s=0, x in COLLECT(scores) | s+x[1]) AS score
ORDER BY score DESC LIMIT 10