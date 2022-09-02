//Import the Link API to support client-side navigation
import HomeHero from '../components/Home/HomeHero'
import HomeBody from '../components/Home/HomeBody'
import Layout from '../components/MyLayout'

//Homepage
export default () => (
	<Layout>
    <HomeHero/>
    <HomeBody/>
  </Layout>
)