//Development page body

import { Row, Col, Card } from 'react-bootstrap'
import DesignMasonry from './DevelopmentMasonry' //Design masonry image component

const DevelopmentBody = () => (
	<div className="pl-2 pr-2">
		<Row className="pl-2 pr-2 firstRow">
			<Col lg={12}>
				<Card className="card p-5 mb-5">
					<h5 className="cardHeading">Working with development</h5>
					<p className="cardText mt-1 mb-2">
					Benjan was introduced to web design and development during his graphic design studies in 2017-2018. 
					He remembers being fascinated by it. <br></br>
					</p>
					<p className="cardText mt-1 mb-2">
					While Benjan was working as a junior graphic (web) designer 
					for <a href='https://www.chamberlains.co.za/' target='_blank'>Chamberlain's</a> in 2019, his goal was to design 
					pages for their new e-commerce site. <br></br>He soon realised that Magento's Page Builder wasn't going to cut it 
					- he needed code (particularly CSS) to bring the static layout that 
					the team agreed upon to fruition. <br></br>
					This project piqued his curiosity, where he started to learn intermediate web code.
				    </p>
					<p className="cardText mt-1 mb-2">
					Benjan enrolled for a Certificate in Full Stack Web Development at 
					HyperionDev nearing the end of that year, where he had an immersive
					learning experience with the MERN (Mongo, Express.js, React.js Node.js) stack.
					</p>
					<p className="cardText mt-1 mb-2">
					Since early 2020, Benjan has been working as a junior web developer at <a href='https://redseptember.co.za/' target='_blank'>Red September</a>, a full-service digital agency.
					</p>
				</Card>
			</Col>
			<Col lg={12}>
				<Card className="card p-5 mb-5">
					<h5 className="cardHeading">Projects</h5>
					<DesignMasonry/>
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		    .cardText a {
				color: var(--clr-blue);
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

export default DevelopmentBody
