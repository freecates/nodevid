import Footer from './Footer';
import Nav from './Nav';

const Layout = (props) => (
  <>
    <header className='header-nav'>
      <Nav page={props.page} />
    </header>
    <div className='container'>
      <main>{props.children}</main>
    </div>
    <Footer page={props.page} />

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
      .header-nav {
        height: 116px; /* 100 + 16 */
        position: sticky;
        top: -16px;
        z-index: 1;
        width: 100%;
      }

      .header-nav::before,
      .header-nav::after {
        content: '';
        display: block;
        height: 16px;
        position: sticky;
      }

      .header-nav::before {
        top: 84px; /* 100 - 16 */
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
      }

      .header-nav::after {
        background: linear-gradient(white, rgba(255, 255, 255, 0.3));
        top: 0;
        z-index: 2;
      }

      .header-nav > nav {
        background: #ffffff;
        height: 100px;
        position: sticky;
        top: 0px;
        margin-top: -16px;
        z-index: 3;
      }
      .container {
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
        color: #000000;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
          DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
      }
      .dont-break-out {
        overflow-wrap: break-word;
        word-wrap: break-word;
        word-break: break-all;
      }
      @media (max-width: 600px) {
        main {
          padding: 0;
        }
        .header-nav {
          height: 186px; /* 170 + 16 */
        }

        .header-nav::before {
          top: 154px; /* 170 - 16 */
        }

        .header-nav > nav {
          height: 170px;
        }
        .title {
          font-size: 3rem;
        }
      }
    `}</style>
  </>
);

export default Layout;
