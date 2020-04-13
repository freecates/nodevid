import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Grid from '../components/Grid';
import Layout from '../components/Layout';

const Bloc = ({ data }) => {
  return (
    <>
      <Head>
        <title>Bloc | Nodevid</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <h1 className='title'>Bloc</h1>

        <Grid data={data} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://nodeviddata.now.sh/posts.json`);
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

export default Bloc;
