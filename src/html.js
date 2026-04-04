import React from "react";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta content="ideyuta <ide.yuta@gmail.com>" name="author" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="user-scalable=no width=device-width, initial-scale=1.0 maximum-scale=1.0"
          name="viewport"
        />
        {props.headComponents}
        <link
          href="https://cdn.jsdelivr.net/npm/yakuhanjp@3.3.1/dist/css/yakuhanjp.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}
