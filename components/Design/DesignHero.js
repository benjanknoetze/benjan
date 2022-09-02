//Design page Hero

/*Since Next.js is used to create server-rendered pages, adding a link using a normal <a> tag would cause a link that would be navigated to via the server. 
This is obviously not always necessary. 
To support client-side navigation (this takes place in the browser, without making a request to the server) we use Next.js’ Link API.*/
import { Row, Col } from 'react-bootstrap'

const DesignHero = () => (
	<div className="pl-3 pr-3 header">
		<Row className="mb-5 mt-5">
			<Col>
			<h2 className="heading">
              Benjan
			</h2>
			<h1 className="bigHeading">
			  Knoetze
			</h1>
			<span className='headingSub'>
				Design
			</span>
			</Col>
		</Row>
		<Row>
		</Row>
		<style jsx>{`
		  
			`}</style>
	</div>
)

export default DesignHero
