import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="noindex" />
        {/* remove this once live! */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
