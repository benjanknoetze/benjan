//Import the Link API to support client-side navigation
import Layout from '../components/MyLayout'
import DevelopmentHero from '../components/Development/DevelopmentHero'
import DevelopmentBody from '../components/Development/DevelopmentBody'

//Development page
export default () => (
  <Layout>
    <DevelopmentHero/>
    <DevelopmentBody/>
  </Layout>
)