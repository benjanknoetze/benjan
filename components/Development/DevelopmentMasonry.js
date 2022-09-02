//Development page masonry image grid

import { Row, Col, Image, Button } from 'react-bootstrap'

const DevelopmentMasonry = () => (
	<div className="pl-3 pr-5">
		<Row>
			<Col lg={12} className="p-0 m-0">
			<h6 className="subHeading">Some of the websites that Benjan has been sole developer on:</h6>
			<h5 className="subHeading mt-4 pt-2 mb-0">Natura</h5>
			<a href='https://natura.reddev.co.za/' target='_blank'>
			<Image src="natura.jpg" className="showCase mt-4" alt="natura">
			</Image>
			</a>
			<h5 className="subHeading mt-4 pt-2 mb-0">Linctagon</h5>
			<a href='https://www.linctagon.co.za/' target='_blank'>
			<Image src="linctagon.jpg" className="showCase mt-4" alt="natura">
			</Image>
			</a>
			<h5 className="subHeading mt-4 pt-2 mb-0">rePear</h5>
			<a href='https://www.repear.ae/' target='_blank'>
			<Image src="repear.jpg" className="showCase mt-4" alt="natura">
			</Image>
			</a>
			</Col>
			<Col lg={12} className="p-0 mt-4">
			<h6 className="subHeading mt-4">Other projects</h6>
			<p className="cardText mt-4 mb-3">
						More of his projects can be seen on his GitHub page:
						 </p>
					<Button href="https://github.com/benjanknoetze" className="cardButton mb-4">
						GitHub
					</Button>
			</Col>
		</Row>
		<style global jsx>{`
			.subHeading {
				color: #fff;
				font-weight: 800;
				font-family: 'Source Sans Pro', sans-serif;
			}
			.showCase {
				max-width: 1440px;
				width: 87%;
			}
			.masonryText {
				color: #0d0411;
			}
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

export default DevelopmentMasonry
