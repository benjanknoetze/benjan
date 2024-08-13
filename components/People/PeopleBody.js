//People page body

import { Row, Col, Card, Button } from 'react-bootstrap'

const PeopleBody = () => (
	<div className="bodyContainer pl-2 pr-2">
		<Row className="pl-2 pr-2">
			<Col xs={12} md={8} lg={12}>
				<Card className="card p-5 mb-5 firstRow">
					<h5 className="cardHeading">Working with people</h5>
					<p className="cardText mt-1 mb-2">
						Benjan's first steps toward a career started at the University of
						Pretoria, where he completed a Master's degree in Theology in 2011.<br></br>
				        There he specialised in narrative therapy or counselling. 
						During his chapter in the church, he worked with various groups of people
						from all walks of life and different belief systems. <br></br>One of the main skills
						he learnt here was how to get people who might be poles apart on the same
						page and enthusiastic towards a specific goal.</p>
					<p className="cardText mt-1 mb-2">
						 </p>
					<p className="cardText mt-1 mb-2">
						He is, first and foremost, a people person and sees the skills gained during this chapter as indispensable.
                </p>
				</Card>
			</Col>
			<Col xs={12} md={4} lg={12}>
				<Card className="card p-5 mb-5">
					<h5 className="cardHeading">Blog</h5>
					<p className="cardText mt-1 mb-2">
						While he was a minister, Benjan sporadically blogged about
				philosophy. <br></br>
				Some of his thoughts can be viewed here:
                </p>
					<Button href="https://rubiconrubric.wordpress.com" className="cardButton mt-3">
						Rubicon Rubric
					</Button>
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		.cardbutton {
			width: 100% !important;
		}
		@media (min-width: 800px) {
			.cardButton {
			  width: 15% !important;
			}
			}
			
			`}</style>
	</div>
)

export default PeopleBody
