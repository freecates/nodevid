import Head from 'next/head';
import ImportMDFileWithHooks from '../components/ImportMDFileWithHooks';
import Layout from '../components/Layout';

const Bases = () => {
  return (
    <>
      <Head>
        <title>Legal</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <h1 className='title'>Legal</h1>
        <section>
          <ImportMDFileWithHooks file={'politica-de-privacitat-i-cookies.md'} />
        </section>
        <hr />
        <section>
          <ImportMDFileWithHooks file={'avis-legal.md'} />
        </section>
      </Layout>

      <style jsx global>{`
        hr {
          width: 75%;
        }
      `}</style>
    </>
  );
};

export default Bases;
