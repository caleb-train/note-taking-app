import Document, { Html, Head, Main, NextScript } from "next/document";
import style from "@styles/css";

class MyDocument extends Document {
  /* static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
 */
  render() {
    return (
      <Html>
        <Head />
        <body style={style.bg()}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
