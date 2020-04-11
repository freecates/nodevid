import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const Post = ({ post }) => {
  const { title, blockquote, content } = post;
  return (
    <>
      <Head>
        <title>
          {title} - {blockquote}
        </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <h1 className='title'>{title}</h1>
        <h2>
          <blockquote>{blockquote}</blockquote>
        </h2>
        {content.map((c, id) => (
          <div
            key={c.id}
            id={id}
            dangerouslySetInnerHTML={{ __html: c.blockContent }}
          />
        ))}
        <Link href={`/bloc`}>
          <a>
            <h3>&larr; Tornar</h3>
          </a>
        </Link>
      </Layout>
      <style jsx global>{`
        .container {
          max-width: 50rem;
        }
      `}</style>
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch('https://nodeviddata.now.sh/posts.json');
  const posts = await res.json();

  const paths = posts.map((post) => `/posts/${post.id}`);

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://nodeviddata.now.sh/posts.json`);
  const dataRes = await res.json();

  return { props: { post: dataRes.find((x) => x.id == params.id) } };
}

export default Post;
