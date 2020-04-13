import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Nodes = ({ data }) => {
  const { title, description, examples } = data;
  return (
    <>
      <HTMLHead title={title} description={description} />

      <Layout>
        <h1 className='title'>{title}</h1>

        <p className='description'>{description}</p>

        <Grid data={examples} />
      </Layout>

      <style jsx global>{`
        .card img {
          max-width: 100%;
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
      data: dataRes.find((x) => x.id == 4),
    },
  };
};

export default Nodes;
