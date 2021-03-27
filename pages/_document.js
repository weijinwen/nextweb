import Document, {Html, Head, Main, NextScript} from 'next/document'

class MyDocument extends Document {

    constructor(props) {
        super(props);
    }

    static async getInitialProps(ctx) {
        let {req: {locale}} = ctx
        const initialProps = await Document.getInitialProps(ctx)
        return {
            ...initialProps,
            locale
        }
    }

    render() {
        return (
            <Html lang={this.props.locale}>
                <Head/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
