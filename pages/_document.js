import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { extractCritical } from "@emotion/server";

if (typeof window === "undefined")
  React.useLayoutEffect = React.useEffect;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(
      ctx
    );
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(" ")}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <link
            rel="preconnect"
            href="https://fonts.googleapis.com"
          />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&amp;family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500&amp;display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal-root"></div>
        </body>
      </Html>
    );
  }
}
