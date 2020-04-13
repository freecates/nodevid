import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Guanya = ({ data }) => {
  const { title, content } = data;
  return (
    <>
      <HTMLHead title={title} />

      <Layout>
        <h1 className='title'>{title}</h1>

        <Grid data={content} />
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
      data: dataRes.find((x) => x.id == 6),
    },
  };
};

export default Guanya;
