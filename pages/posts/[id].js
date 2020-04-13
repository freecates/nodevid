import fetch from 'isomorphic-unfetch';
import BlocPost from '../../components/BlocPost';
import Layout from '../../components/Layout';

const Post = ({ post }) => {
  const { title, blockquote, content, author, datePublished, id } = post;
  return (
    <>
      <Layout>
        <BlocPost
          title={title}
          blockquote={blockquote}
          author={author}
          datePublished={datePublished}
          content={content}
          id={id}
        />
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
