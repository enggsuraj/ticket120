import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* GOOGLE ABALYTICS */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-E6TP4PGCQ3"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-E6TP4PGCQ3');`,
            }}
          />

          {/* SCHEMA */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Developer tool",
                name: "Ticket 120",
                alternateName: "ticket120",
                url: "https://ticket120.toolcarton.com/",
                logo: "https://ticket120.toolcarton.com//logo.png",
              }),
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
