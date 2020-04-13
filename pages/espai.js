import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Espai = ({ data }) => {
  const { title, description, moreDescription, content } = data;
  return (
    <>
      <HTMLHead title={title} description={description} />

      <Layout>
        <h1 className='title'>{title}</h1>

        <p className='description'>{description}</p>

        <p className='description'>
          <small>{moreDescription}</small>
        </p>
        <Grid data={content} />

        <style jsx global>{`
          .description {
            text-align: left;
          }
          .card header {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
          }

          .card header img {
            max-width: 60px;
            padding: 0.5rem;
          }
          .card p {
            margin: 0;
          }
          @media (min-width: 1024px) {
            .card header img {
              max-width: 75px;
            }
          }
        `}</style>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://nodeviddata.now.sh/pages.json`);
  const dataRes = await res.json();
  return {
    props: {
      data: dataRes.find((x) => x.id == 2),
    },
  };
};

export default Espai;
