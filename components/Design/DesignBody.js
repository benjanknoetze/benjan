//Design page body

import { Row, Col, Card, Button } from 'react-bootstrap'
import DesignMasonry from './DesignMasonry' //Design masonry image component

const DesignBody = () => (
	<div className="bodyContainer pl-2 pr-2">
		<Row className="pl-2 pr-2 firstRow">
			<Col lg={12}>
				<Card className="card p-5 mb-5">
					<h5 className="cardHeading">Working with design</h5>
					<p className="cardText mt-1 mb-2">
						During the course of 2016, Benjan enrolled for a few design courses.
				    </p>
					<p className="cardText mt-1 mb-2">
						Starting in 2017, he enrolled for a National Certificate in Design at CTU Potchefstroom
					    which he completed at the end of 2018. </p>
					<p className="cardText mt-1 mb-2">
						Benjan has worked in laser cutting/engraving, web design and book cover design.</p>
				</Card>
			</Col>
			<Col lg={12}>
				<Card className="card p-5 mb-5">
					<h5 className="cardHeading">Showcase</h5>
					<DesignMasonry/>
					<p className="cardText mt-5 mb-3">
						More of his work can be seen on his Behance profile:
						 </p>
					<Button href="https://behance.net/bisforben" className="cardButton mb-4">
						Behance
					</Button>
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		@media (min-width: 800px) {
		.cardButton {
          width: 15%;
		}
		}
		@media (max-width: 768px) {
			.firstRow {
				margin-top: -6rem !important;
				padding-top: 0 !important;
			}
		}
			`}</style>
	</div>
)

export default DesignBody
