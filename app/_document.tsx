// app/_document.tsx or pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Your Google Fonts link here */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap" 
          rel="stylesheet" 
        />
        {/* Any other font links */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}