import Document, { Html, Head, Main, NextScript } from 'next/document'
import Navigation from '../components/Navbar'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Navigation />
					<Main />
					<NextScript />
				</body>
			</Html>
		)
    }
}

export default MyDocument