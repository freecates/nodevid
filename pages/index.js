import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Grid from '../components/Grid';
import Layout from '../components/Layout';
import ResponsiveYoutube from '../components/ResponsiveYoutube';

const Home = ({ data }) => {
  const { title, content } = data;
  return (
    <>
      <Head>
        <title>Benvingut a {title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout page={'home'}>
        <ResponsiveYoutube
          video={'https://www.youtube.com/embed/vvc7yNQTVxk?controls=0'}
        />
        <h1 className='title'>Benvingut a {title}!</h1>

        <p className='description'>
          Fes un{' '}
          <Link href='/equip'>
            <a>
              <code>equip</code>
            </a>
          </Link>{' '}
          i creeu un
          <Link href='/espai'>
            <a>
              <code>projecte</code>
            </a>
          </Link>{' '}
          per transformar els teus espais comunitaris en llocs plens de vida.
        </p>

        <Grid data={content} />
      </Layout>

      <style jsx global>{`
        html,
        body {
          color: #ffffff;
          background: #000000;
        }
        .header-nav > nav {
          background: #000000;
        }

        .header-nav::before {
          box-shadow: none;
        }
        .header-nav::after {
          background: none;
        }
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
      data: dataRes.find((x) => x.id == 1),
    },
  };
};

export default Home;
