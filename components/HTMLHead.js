import Head from 'next/head';

const HTMLHead = ({ page, title, description }) => (
  <Head>
    {page == 'home' ? (
      <title>Benvingut a {title}</title>
    ) : (
      <title>{title} | Nodevid </title>
    )}
    {!description ? null : (
      <meta name='description' content={description}></meta>
    )}
    <link rel='icon' href='/favicon.ico' />
  </Head>
);

export default HTMLHead;
