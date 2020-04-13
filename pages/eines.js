import fetch from 'isomorphic-unfetch';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Toolkit = ({ data }) => {
  const { title, description, guia, content } = data;
  return (
    <>
      <HTMLHead title={title} description={description} />

      <Layout>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>

        <p className='description'>
          <a href={guia.url} title={guia.name} target='_blank'>
            <img
              loading='lazy'
              src='/guia-toolkit.svg'
              alt='Gui participació'
            />
            <br />
            <small>{guia.name}</small>
          </a>
        </p>
        <Grid data={content} />
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(`https://nodeviddata.now.sh/pages.json`);
  const dataRes = await res.json();
  return {
    props: {
      data: dataRes.find((x) => x.id == 3),
    },
  };
};

export default Toolkit;
