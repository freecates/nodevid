import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Grid from '../components/Grid';
import HTMLHead from '../components/HTMLHead';
import Layout from '../components/Layout';
import ResponsiveYoutube from '../components/ResponsiveYoutube';

const Home = ({ data }) => {
  const { title, description, content } = data;
  return (
    <>
      <HTMLHead title={title} description={description} page={'home'} />
      <Head>
        <link rel='preconnect' href='https://i.ytimg.com' crossOrigin='true' />
        <link
          rel='preconnect'
          href='https://yt3.ggpht.com'
          crossOrigin='true'
        />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          rel='preconnect'
          href='https://static.doubleclick.net'
          crossOrigin='true'
        />
        <link
          rel='preconnect'
          href='https://googleads.g.doubleclick.net'
          crossOrigin='true'
        />
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
