//Import the Link API to support client-side navigation
import Layout from '../components/MyLayout'
import DesignHero from '../components/Design/DesignHero'
import DesignBody from '../components/Design/DesignBody'

//Design page
export default () => (
  <Layout>
    <DesignHero/>
    <DesignBody/>
  </Layout>
)