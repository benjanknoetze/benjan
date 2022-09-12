//Home page body

import { Row, Col, Card, Button, Image } from 'react-bootstrap'

const HomeBody = () => (
	<div className="homeBody pl-2 pr-2">
		<Row className="mt-3 pl-2 pr-2">
		<Col md={8} className="mt-5 mb-5 one">
				<Card>
					<Col md={4} className="cardCol">
					<Image src="\tools.svg" width={"50%"}>
					</Image>
					</Col>
					<Col md={8} className="cardCol pt-5">
					<h5 className="cardHeading">Development</h5>
					<p className="cardText mt-1 mb-2 pr-5">
						Good tech and a good technician go a long way.<br></br>
						You need that something extra. <br></br>
						Creative input and a personal touch will set it
						apart.
                	</p>
					<Button className="cardButton">
					<a className="cardLink" href="development">Tell me more</a>
					</Button>
					</Col>
				</Card>
			</Col>
		</Row>
		<Row className="pl-2 pr-2">
			<Col md={8} className="mt-5 mb-5 two">
				<Card className="card">
				<Col md={4} className="cardCol">
					<Image src="\des.svg" width={"49%"}>
					</Image>
					</Col>
					<Col md={8} className="cardCol pt-5">
							<h5 className="cardHeading">Design</h5>
					<p className="cardText mt-1 mb-2 pr-5">
						Your technologies are cutting-edge and your team is great.<br></br>
						But do you have a brainstormer for new projects?<br></br>
						And fresh thinking about old problems?
               		</p>
					<Button className="cardButton"> 
					<a className="cardLink" href="/design">Tell me more</a>
					</Button>
					</Col>
				</Card>
			</Col>
		</Row>
		<Row className="pl-2 pr-2">
		<Col md={8} className="mt-5 mb-5 three">
				<Card className="card">
				<Col md={4} className="cardCol">
					<Image src="\heart.svg" width={"47%"}>
					</Image>
					</Col>
					<Col md={8} className="cardCol pt-5">
					<h5 className="cardHeading">People</h5>
					<p className="cardText mt-1 mb-2 pr-5">
						Do you have someone who will speak the same language as your team?<br></br>
						Software is essential. Relationships are crucial.
                	</p>
					<Button className="cardButton">
					<a className="cardLink" href="/people">Tell me more</a>
					</Button>

					</Col>
					
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		    .one {
				z-index: 9;
				transform: translateY(-25%);
			}
            .two {
				transform: translate(25%, -30%);
				z-index: 1;
			}
			.three {
				transform: translate(8%, -45%);
				z-index: 0;
			}
		    .card {
				display: block;
				padding: 2rem;
				border: none;
				height: 125%;
			}
			.two .card {
				padding-top: 5.5rem !important; 
			}
			.three .card {
				padding-top: 7rem;
			}
			.cardCol {
				float: left;
			}
			.cardCol img {
				display: flex;
				margin: auto;
			}
			.cardButton:hover a {
				transition: 0.3s;
				text-shadow: 0 0 6px #c8f2ff !important;
			}
			.cardButton {
				margin-top: 2.5em;
			}
			@media (max-width: 768px) {
				.two .card {
					padding-top: 13rem !important; 
				}
				.three .card {
					padding-top: 20rem;
				}
			}
			`}</style>
	</div>
)

export default HomeBody
