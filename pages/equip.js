import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';

const Equip = ({ data }) => {
  const { title, formIcon, content } = data;
  return (
    <>
      <HTMLHead title={title} />

      <Layout>
        <h1 className='title'>{title}</h1>

        <Grid data={content} />

        <p className='description'>
          <Link href='/alta-projecte'>
            <a title='Alta Projecte'>
              <img loading='lazy' src={`/${formIcon.url}`} alt={formIcon.alt} />
              <br />
              <code>Som-hi!</code>
            </a>
          </Link>
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
