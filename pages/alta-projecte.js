import fetch from 'isomorphic-unfetch';
import AppForm from '../components/AppForm';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Equip = ({ data }) => {
  const { title } = data;
  return (
    <>
      <HTMLHead title={title} />

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
