import Link from 'next/link';

const Footer = ({ page }) => (
  <footer>
    <p>
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
      Powered by:{' '}
      <a
        href='https://www.adhoc-cultura.com/'
        target='_blank'
        rel='noopener noreferrer'>
        Adhoc Cultura
      </a>{' '}
      |{' '}
      <a
        href='http://www.oxygen.cat/'
        target='_blank'
        rel='noopener noreferrer'>
        Oxygen
      </a>{' '}
      |{' '}
      <a href='http://dauapps.com/' target='_blank' rel='noopener noreferrer'>
        DAU Apps
      </a>
    </p>
    <style jsx>{`
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      footer img {
        margin-right: 0.5rem;
        max-width: 30px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    `}</style>
  </footer>
);

export default Footer;
