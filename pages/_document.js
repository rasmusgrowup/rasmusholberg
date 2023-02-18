import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link type="image/x-icon" rel="icon" href="/favicon.ico?v=2" />
                    <link rel="stylesheet" href="https://use.typekit.net/pgi5uro.css" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,opsz@1,8..60&display=swap" rel="stylesheet" />
                    <link rel="preload" href="/dabea.jpg" as="image" />
                    <link rel="preload" href="/dogme.jpg" as="image" />
                    <link rel="preload" href="/organic_alt.jpg" as="image" />
                    <link rel="preload" href="/tinekhome.jpg" as="image" />
                    <link rel="preload" href="/twelveinch.jpg" as="image" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
