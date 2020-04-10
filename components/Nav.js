import Link from 'next/link';

const Nav = ({ page }) => {
  return (
    <nav>
      <Link href='/'>
        <a title='Anar a la home'>
          <img
            src={`${
              page == `home` ? `/logo-nodevid-white.svg` : `/logo-nodevid.svg`
            }`}
            alt='Logo Nodevid'
          />
        </a>
      </Link>
      <Link href='/equip'>
        <a>Crea un equip</a>
      </Link>
      <Link href='/espai'>
        <a>Espai - Node</a>
      </Link>
      <Link href='/toolkit'>
        <a>Toolkit</a>
      </Link>
      <Link href='/nodes'>
        <a>Descobreix nodes</a>
      </Link>
      <Link href='/bloc'>
        <a>Bloc</a>
      </Link>
      <style jsx>{`
        nav {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        nav img {
          margin-left: 0.5rem;
          max-width: 60px;
        }

        nav a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
          padding-right: 1rem;
        }

        a:last-child {
          padding-right: none;
        }
      `}</style>
    </nav>
  );
};

export default Nav;
