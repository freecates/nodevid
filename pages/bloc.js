import Head from 'next/head';
import Layout from '../components/Layout';

const Bloc = () => (
  <>
    <Head>
      <title>Bloc</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Layout>
      <h1 className='title'>Bloc</h1>

      <div className='grid'>
        <div className='card'>
          <h3>Tot anirà bé ;-) &rarr;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
        </div>
      </div>
    </Layout>
    <style jsx>{`
      .grid {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;

        max-width: 960px;
        margin-top: 3rem;
      }

      .card {
        margin: 1rem;
        flex-basis: 45%;
        padding: 1.5rem;
        text-align: left;
        color: inherit;
        text-decoration: none;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        transition: color 0.15s ease, border-color 0.15s ease;
      }

      .card:hover,
      .card:focus,
      .card:active {
        color: #0070f3;
        border-color: #0070f3;
      }

      .card h3 {
        margin: 0 0 1rem 0;
        font-size: 1.25rem;
      }

      .card p {
        font-size: 1.25rem;
        line-height: 1.5;
      }

      .card p:last-child {
        margin: 0;
      }

      .card img {
        max-width: 50px;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
    `}</style>
  </>
);

export default Bloc;
