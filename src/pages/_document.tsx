import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from "@nextui-org/react";
import { getCssText } from "@/stitches/stitches.config";

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        {/* reference: https://stitches.dev/blog/using-nextjs-with-stitches */}
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
        {CssBaseline.flush()}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
