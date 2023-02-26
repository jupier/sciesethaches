import { allPostLinks, Post, readMarkdownPostFromName } from "lib/api";

type PostProps = {
  post: Post;
};

export default function _Post({ post }: PostProps) {
  return (
    <>
      <main>
        <div>
          <h2>From: {post.author}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.text }}></div>{" "}
        </div>
      </main>
    </>
  );
}

type PostParams = {
  params: {
    name: String;
  };
};

export const getStaticProps = async ({ params }: PostParams) => {
  const post = await readMarkdownPostFromName(`${params.name}.md`);
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  return {
    paths: allPostLinks.map((link) => ({
      params: { name: link },
    })),
    fallback: false,
  };
};
