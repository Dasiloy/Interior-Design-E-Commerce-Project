import Head from "next/head";

function PageHead({ title, content }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default PageHead;
