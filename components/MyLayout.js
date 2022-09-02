//Global settings and layout

/*You can use this built-in component to append elements to the <head> element of the page. More info here: https://github.com/zeit/next.js/#populating-head 
Notice that we add the link for the stylesheet for using React-Bootstrap components to the <Head>. */
import Head from 'next/head'
import Header from './Header' //Header component
import { GA_TRACKING_ID } from '../lib/gtag' //Google analytics

{/* Global layout */ }
const Layout = props => (
	<div>
		<Head>
		<meta name="description"           
			content="Benjan Knoetze's bio website with links to his CV, portfolio (Behance)
			and GitHub profile with a contact page where people can get in touch."/>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			{/* Bootstrap */}
			<link
				rel="stylesheet"
				href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
				integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
				crossOrigin="anonymous"
			/>
			{/* Google Fonts */}
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap"
			/>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<script
				async
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
			/>
			<script
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
		</Head>
		<div>
			<Header /> {/* Navigation */}
			{props.children}
		</div>
	</div>
);

export default Layout;