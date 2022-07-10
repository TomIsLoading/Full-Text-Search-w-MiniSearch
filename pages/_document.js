import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme="light">
      <Head />
      <body className="bg-base-200 min-h-[100vh]">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
