(defn tip [meal-cost tip-percent]
    (* meal-cost (double (/ tip-percent 100))))

(defn tax [meal-cost tax-percent]
    (* meal-cost (double (/ tax-percent 100))))

(defn cost [meal-cost tip-percent tax-percent]
    (Math/round
        (+ meal-cost
           (tip meal-cost tip-percent)
           (tax meal-cost tax-percent))))

(let [
    meal-cost (Double/parseDouble (read-line))
    tip-percent (Double/parseDouble (read-line))
    tax-percent (Double/parseDouble (read-line))
    cost (cost meal-cost tip-percent tax-percent)
    ]
    (println (str "The total meal cost is " cost " dollars.")))
