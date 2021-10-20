import Document, {Head, Html, Main, NextScript} from 'next/document';
import React from "react";

class CustomDocument extends Document {
	render() {
		return (
			<Html lang='ko'>
				<Head>
					<link rel='icon' href='/img/favicon/favicon.ico'/>
				</Head>
				<body>
				<Main/>
				<div id='modal'/>
				<div id='alert'/>
				<div id='toast'/>
				<NextScript/>
				</body>
			</Html>
		);
	}
}

export default CustomDocument;
