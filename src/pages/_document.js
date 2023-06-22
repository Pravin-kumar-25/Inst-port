import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@mui/styles'

function MyDocument(props) {
  // const montFont = Montserrat({ weight:"100",style:"normal" })
  const { styles } = props
  return (
    <Html lang="en">
      <Head>
        {styles}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {
  // Step 1: Create an instance of ServerStyleSheets
  const sheets = new ServerStyleSheets();

  // Step 2: Render the page and collect the styles
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  // Step 3: Return the collected styles as a prop
  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};

export default MyDocument
