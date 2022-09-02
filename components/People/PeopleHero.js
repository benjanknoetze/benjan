//People page Hero

import { Row, Col } from 'react-bootstrap'

const PeopleHero = () => (
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
			  People
			</span>
			</Col>
		</Row>
		<Row>
		</Row>
		<style jsx>{`
		     .header {
				display: flex;
				justify-content: center;
				align-items: center;
			 }
			.heading {
				color: #dddbe6;
				margin-bottom: -0.5rem;
			}
			.bigHeading {
				color: #dddbe6;
			}
			.headingSub {
				color: var( --clr-blue);
				font-family: 'Source Sans Pro', sans-serif;
				font-weight: 900;
				font-size: 1.35rem;
			}
			.heading, .bigHeading, .headingSub {
				padding-left: 20rem;
			}
			.contact:hover {
				color: white;
				transform: scale(1.03);
			}
			`}</style>
		
	</div>
)

export default PeopleHero
