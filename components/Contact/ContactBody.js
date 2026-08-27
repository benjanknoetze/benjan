//Contact page body

import { Row, Col, Card} from 'react-bootstrap'
import MyForm from './ContactForm' //Contact form component

const ContactBody = () => (
	<div className="bodyContainer ps-2 pe-2 firstRow">
		<Row className="ps-2 pe-2">
			<Col xs={12} md={8} lg={12}>
				<Card className="card p-2 mb-5">
					<MyForm />
				</Card>
			</Col>
		</Row>
		<style global jsx>{`
		@media (max-width: 768px) {
			.firstRow {
				margin-top: -6rem !important;
			}
		}
			`}</style>
			
	</div>
)

export default ContactBody