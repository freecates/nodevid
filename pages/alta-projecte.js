import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import AppForm from '../components/AppForm';
import Layout from '../components/Layout';

const Equip = ({ data }) => {
  const { title } = data;
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <h1 className='title'>{title}</h1>
        <AppForm />
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
      data: dataRes.find((x) => x.id == 7),
    },
  };
};

export default Equip;
