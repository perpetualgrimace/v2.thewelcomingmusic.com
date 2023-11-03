import Head from "next/head";

export default function Meta(props) {
  const { children, description, pageTitle } = props;
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>The Welcoming{pageTitle && ` | ${pageTitle}`}</title>
      {description && <meta name="description" content={description} />}

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#0F0819" />

      {children}
    </Head>
  );
}
