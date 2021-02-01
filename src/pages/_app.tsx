import App from 'next/app'
import '../styles/main.css';

export default class MainApp extends App { 
render(): JSX.Element {
	const { Component, pageProps } = this.props

	return (
			<Component {...pageProps} />
	)
}
}
