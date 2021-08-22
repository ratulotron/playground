import Layout from '../components/MyLayout.js'

const Content = (props) => (
  <div>
    <h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>
  </div>
)


// The URL prop is exposed to only the main component of a page
// But if you need, you can pass it via url attribute.
export default (props) => (
  <Layout>
    {/*Every page gets a prop called URL
    which has some details related to current URL
    In this case we are taking the query object, i.e. query string*/}
    {/*<h1>{props.url.query.title}</h1>
    <p>This is the blog post content.</p>*/}
    <Content url={props.url} />

  </Layout>
)
