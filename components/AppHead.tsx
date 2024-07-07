import Head from "next/head";

export interface Meta {
  description?: string;
  author?: string;
  siteName?: string;
  coverImage?: string;
  coverImageAlt?: string;
  ogImage?: string;
  ogImageAlt?: string;
  type?: string;
}

type Props = {
  title: string;
  meta?: Meta;
  url?: string;
};

const AppHead: React.FC<Props> = ({
  title,
  url = `${process.env.NEXT_PUBLIC_URL}/blog`,
  meta,
}) => {
  let author = "Andrew Clarker";
  let description =
    "Articles about programming, coding, technologies, software engineering, my personal projects and my experiences.";
  let siteName = "Andrew Clarker's Blog";
  let type = "article";
  let coverImage: string | undefined;
  let coverImageAlt: string | undefined;
  let ogImage: string | undefined;
  let ogImageAlt: string | undefined;

  if (meta) {
    author = meta.author ? meta.author : author;
    description = meta.description ? meta.description : description;
    siteName = meta.siteName ? meta.siteName : siteName;
    type = meta.type ? meta.type : type;
    coverImage = meta.coverImage && meta.coverImage;
    coverImageAlt = meta.coverImageAlt && meta.coverImageAlt;
    ogImage = meta.ogImage && meta.ogImage;
    ogImageAlt = meta.ogImageAlt && meta.ogImageAlt;
  }
  return (
    <Head>
      <title>{title}</title>
      <meta name="author" content={author} />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content={type} />
    </Head>
  );
};

export default AppHead;
