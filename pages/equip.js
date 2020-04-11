import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Grid from '../components/Grid';
import Layout from '../components/Layout';

const Equip = ({ data }) => {
  const { title, formIcon, content } = data;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <h1 className='title'>{title}</h1>

        <Grid data={content} />

        <p className='description'>
          <img loading='lazy' src={`/${formIcon.url}`} alt={formIcon.alt} />
          <br />
          <code>TODO : formulari equip</code>
        </p>
      </Layout>
      <style jsx global>{`
        .card {
          flex-basis: 100%;
        }
      `}</style>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://nodeviddata.now.sh/pages.json`);
  const dataRes = await res.json();
  return {
    props: {
      data: dataRes.find((x) => x.id == 5),
    },
  };
};

export default Equip;
