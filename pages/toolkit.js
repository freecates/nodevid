import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Toolkit = () => (
  <div className='container'>
    <Head>
      <title>Toolkit</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <header>
      <Nav />
    </header>

    <main>
      <h1 className='title'>Toolkit</h1>

      <div className='grid'>
        <a className='card'>
          <header>
            <img src='/guia-toolkit.svg' alt='Gui participació' />
            <h3>Guia Node - PDF &rarr;</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
        </a>
        <div className='card'>
          <header>
            <img
              src='/material-participacio-toolkit.svg'
              alt='Gui eines de treball'
            />
            <h3>Material particiapció &rarr;</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
          <ul>
            <li>Enquesta veïns</li>
            <li>Votació veïns</li>
          </ul>
        </div>
        <div className='card'>
          <header>
            <img
              src='/eines-de-treball-toolkit.svg'
              alt='Gui eines de treball'
            />
            <h3>Eines de treball &rarr;</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
          <ul>
            <li>Organització (fitxa)</li>
            <li>Difusió (fitxa)</li>
          </ul>
        </div>
        <div className='card'>
          <header>
            <h3>Fitxa per compatir &rarr;</h3>
          </header>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
        </div>
      </div>
    </main>
    <Footer />

    <style jsx>{`
      .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 85rem;
        margin: 0 auto;
      }

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }

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

      .card header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      .card header img {
        max-width: 60px;
        padding: 0.5rem;
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
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
      }

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
        }
      }
      @media (min-width: 1024px) {
        .card header img {
          max-width: 75px;
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Toolkit;
