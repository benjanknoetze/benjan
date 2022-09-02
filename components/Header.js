//Navigation

import Link from 'next/link'
import { Navbar, Dropdown } from 'react-bootstrap'

const navStyle = {
	fontFamily: "'Source Sans Pro', sans-serif",
	fontWeight: 800
}

const linkStyle = {
	color: "#dddbe6",
	textDecoration: "none",
	fontSize: 19,
	paddingTop: 10,
	paddingBottom: 10,
	paddingRight: 10,
}

const Header = () => (
	<Navbar style={navStyle}>
			<Link href="/">
				<a style={linkStyle}>Benjan</a>
			</Link>
			<Navbar.Collapse className="ml-4">
				<Dropdown style={navStyle}>
					<Dropdown.Toggle>
						Skills
					</Dropdown.Toggle>
					<Dropdown.Menu>
					<Dropdown.Item href="/development"><a>Development</a></Dropdown.Item>
					<Dropdown.Item href="/design"><a>Design</a></Dropdown.Item>
					<Dropdown.Item href="/people"><a>People</a></Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Navbar.Collapse>
			<Link href="/contact">
				<a style={linkStyle}>Contact</a>
			</Link>
			<Link href="/BenjanKnoetze_CV.pdf">
				<a className="download">CV</a>
			</Link>
			<style global jsx>{`
			.download {
				color: var( --clr-blue);
				font-size: 120%;
				font-weight: 900;
			}
			.download:hover {
				text-decoration: none;
				color: var( --clr-lightblue);
			}
			/* Nav dropdown menu */
			.dropdown-menu {
				color: #fff;
				background-color: #d3d3d3c9;
			}
			.dropdown-item:hover {
				background-color: var( --clr-lightblue);
				color: white;
			}
			`}</style>
	</Navbar>
)

export default Header