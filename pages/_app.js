import App from 'next/app';

class MyApp extends App {
  static async getStaticProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getStaticProps) {
      pageProps = await Component.getStaticProps(ctx);
    }
    // this exposes the query to the user
    pageProps.pathname = ctx.pathname;
    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
