import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Home = () => (
  <div className='container'>
    <Head>
      <title>Benvingut a NodeVid!</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <header>
      <Nav />
    </header>

    <main>
      <h1 className='title'>
        Benvingut a <a href='/'>NodeVid!</a>
      </h1>

      <p className='description'>
        Comença per crear un{' '}
        <Link href='/espai'>
          <a>
            <code>espai</code>
          </a>
        </Link>{' '}
        o afegir-t'hi a{' '}
        <Link href='/nodes'>
          <a>
            <code>un d'ells</code>
          </a>
        </Link>
      </p>

      <div className='grid'>
        <a href='/' className='card'>
          <h3>Què és Nodes &rarr;</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            faucibus arcu in rhoncus condimentum. Ut tempus, sapien sed rhoncus
            commodo, magna ex eleifend nisl, id fringilla turpis justo in lorem.
          </p>
        </a>

        <a href='/' className='card'>
          <h3>Qui pot participar &rarr;</h3>
          <p>
            In dui odio, consequat ac arcu nec, ullamcorper fermentum lectus.
            Integer dictum elit augue, vitae consectetur libero ultricies id.
            Sed maximus placerat lorem vel finibus. Donec auctor lectus quis
            orci sagittis lacinia.
          </p>
        </a>

        <a
          href='https://github.com/zeit/next.js/tree/master/examples'
          className='card'>
          <h3>Com fer un node &rarr;</h3>
          <p>
            Fer un equip >{' '}
            <img src='/busqueu-afinitats.svg' alt='Busqueu afinitats' /> Busqueu
            afinitats > <img src='/escolliu-node.svg' alt='Busqueu afinitats' />{' '}
            Escolliu Node > <img src='/construiu.svg' alt='Busqueu afinitats' />{' '}
            Construiu > Gaudiu > Guanyeu
          </p>
        </a>
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

        max-width: 800px;
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

      .card:last-child {
        flex-basis: 100%;
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

export default Home;
