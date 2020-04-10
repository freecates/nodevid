import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

const Nodes = ({ data }) => {
  const { title, description, examples } = data;
  return (
    <div className='container'>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <Nav />
      </header>

      <main>
        <h1 className='title'>{title}</h1>

        <p className='description'>{description}</p>

        <div className='grid'>
          {examples.map((c, id) => (
            <div href='/' className='card' key={c.id} id={id}>
              <img
                src={c.picture}
                alt={`Imatge representativa de ${c.projectName}`}
              />
              <h3>{c.teamName} &rarr;</h3>
              <dl>
                <dt>Nom del projecte:</dt>
                <dd>{c.projectName}</dd>
                <dt>Contacte:</dt>
                <dd>
                  <a
                    href={`mailto:${c.contact}`}
                    title={`Contacta amb ${c.projectName}`}>
                    {c.contact}
                  </a>
                </dd>
                <dt>Tipus:</dt>
                <dd>{c.type}</dd>
                <dt>Descripció del projecte:</dt>
                <dd>{c.projectDescription}</dd>
                <dt>Perfil públic:</dt>
                {c.publicProfile.map((p, id) => (
                  <dd key={p.type} id={id}>
                    {p.type} :{' '}
                    <a href={p.url} title={`${p.type} de ${c.projectName}`}>
                      {p.url}
                    </a>
                  </dd>
                ))}
              </dl>
            </div>
          ))}
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

        .title {
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

        .card img {
          max-width: 100%;
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
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
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

export default Nodes;
