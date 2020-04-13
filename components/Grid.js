import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

const Grid = ({ data }) => {
  return (
    <div className='grid'>
      {data.map((c, id) => (
        <div href='/' className='card' key={c.id} id={id}>
          {!c.picture ? null : (
            <img
              loading='lazy'
              src={c.picture}
              alt={`Imatge representativa de ${c.projectName}`}
            />
          )}
          {c.teamName ? (
            <>
              <h3>{c.teamName} &rarr;</h3>
              <dl>
                <dt>
                  <strong>Nom del projecte:</strong>
                </dt>
                <dd>{c.projectName}</dd>
                <dt>
                  <strong>Contacte:</strong>
                </dt>
                <dd>
                  <a
                    href={`mailto:${c.contact}`}
                    title={`Contacta amb ${c.projectName}`}>
                    {c.contact}
                  </a>
                </dd>
                <dt>
                  <strong>Tipus:</strong>
                </dt>
                <dd>{c.type}</dd>
                <dt>
                  <strong>Descripció del projecte:</strong>
                </dt>
                <dd>{c.projectDescription}</dd>
                {!c.publicProfile ? null : (
                  <>
                    <dt>
                      <strong>Perfil públic:</strong>
                    </dt>
                    <dd>
                      {c.publicProfile.map((p, id) => (
                        <a
                          href={p.url}
                          title={`${p.type} de ${c.projectName}`}
                          className='dont-break-out'>
                          <SocialIcon
                            url={p.url}
                            bgColor='#ffffff'
                            fgColor='#000000'
                            style={{ height: 32, width: 32 }}
                            key={p.type}
                            id={id}
                          />
                        </a>
                      ))}
                    </dd>
                  </>
                )}
              </dl>
            </>
          ) : (
            <>
              <header>
                {!c.icon ? null : (
                  <img loading='lazy' src={c.icon.url} alt={c.icon.alt} />
                )}
                <h3>{c.title} &rarr;</h3>
              </header>
              {!c.leadText ? null : <p>{c.leadText}</p>}
              {!c.text ? null : (
                <p>
                  <small>{c.text}</small>
                </p>
              )}
              {!c.blockquote ? null : (
                <Link href={'/posts/' + c.id}>
                  <a>
                    <blockquote>{c.blockquote}</blockquote>
                  </a>
                </Link>
              )}
              {!c.docs ? null : (
                <dl>
                  <dt>
                    <strong>Docs:</strong>
                  </dt>
                  {c.docs.map((d, id) => (
                    <dd key={d.name} id={id}>
                      <a
                        href={d.url}
                        title={`${d.name} - Descarrega`}
                        className='dont-break-out'
                        target={
                          d.url.includes('drive.google.com')
                            ? '_blank'
                            : '_self'
                        }>
                        {d.name}
                      </a>
                    </dd>
                  ))}
                </dl>
              )}
            </>
          )}
        </div>
      ))}
      <style jsx global>{`
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
    </div>
  );
};

export default Grid;
