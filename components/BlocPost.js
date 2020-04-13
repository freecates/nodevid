import Head from 'next/head';
import Link from 'next/link';
import { FormattedDate, IntlProvider } from 'react-intl';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';

const BlocPost = ({
  title,
  blockquote,
  author,
  datePublished,
  content,
  id,
}) => (
  <>
    <Head>
      <title>{title} - Nodevid Bloc</title>
      <meta name='description' content={blockquote} />

      <meta property='fb:app_id' content='1064356173625695' />
      <meta property='og:url' content={`https://nodevid.now.sh/posts/${id}`} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={blockquote} />
      <meta
        property='og:image'
        content={`https://nodevid.now.sh/icons/og-image-nodevid-web.png`}
      />
      <meta property='og:image:width' content={1024} />
      <meta property='og:image:height' content={1024} />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='mexico_baila' />
      <meta name='twitter:creator' content='mexico_baila' />
      <meta name='twitter:title' content={title} />
      <meta
        name='twitter:image:src'
        content={`https://nodevid.now.sh/icons/og-image-nodevid-web.png`}
      />

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: `
{
  "@context": "http://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "${`https://nodevid.now.sh` + id}"
  },
  "author": {
    "@type": "Person",
    "name": "Ramon Gil"
  },
  "publisher": {
   "@type": "Organization",
   "name": "Adhoc Cultura | Oxygen | DAUApps",
   "logo": {
     "@type": "ImageObject",
     "url": "https://nodevid.now.sh/icons/og-image-nodevid-web.png"
   }
  }, 
  "description": "${blockquote}",
  "image": "https://nodevid.now.sh/icons/og-image-nodevid-web.png",
  "datePublished": "${datePublished}",
  "headline": "${title}"
}`,
        }}
      />
    </Head>
    <IntlProvider locale={'ca'} timeZone='Europe/Madrid'>
      <p>
        <small>
          <strong>Per:</strong> {author}. <strong>Publicada el:</strong>{' '}
          <FormattedDate value={datePublished} />
        </small>
      </p>
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

      <div className='social-share-icons'>
        <div className='Post__some-network'>
          <FacebookShareButton
            url={`https://nodevid.now.sh/posts/${id}`}
            className='Post__some-network__share-button'>
            <FacebookIcon size={25} round />
          </FacebookShareButton>
        </div>

        <div className='Post__some-network'>
          <TwitterShareButton
            url={`https://nodevid.now.sh/posts/${id}`}
            title={title}
            hashtags={['coronavirus']}
            via='AdhocCultura'
            className='Post__some-network__share-button'>
            <TwitterIcon size={25} round />
          </TwitterShareButton>
        </div>

        <div className='Post__some-network'>
          <LinkedinShareButton
            url={`https://nodevid.now.sh/posts/${id}`}
            title={title}
            className='Post__some-network__share-button'>
            <LinkedinIcon size={25} round />
          </LinkedinShareButton>
        </div>

        <div className='Post__some-network'>
          <EmailShareButton
            url={`https://nodevid.now.sh/posts/${id}`}
            subject={title}
            body={`Fes-li un cop d'ull a ${title} https://nodevid.now.sh/posts/${id}`}
            className='Post__some-network__share-button'>
            <EmailIcon size={25} round />
          </EmailShareButton>
        </div>
      </div>
      <Link href={`/bloc`}>
        <a>
          <h3>&larr; Tornar</h3>
        </a>
      </Link>
      <style jsx>{`
        .Post__some-network {
          vertical-align: top;
          display: inline-block;
          margin-right: 20px;
          text-align: center;
        }
        .social-share-icons {
          margin-bottom: 1.5rem;
        }
      `}</style>
    </IntlProvider>
  </>
);

export default BlocPost;
