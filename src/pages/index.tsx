import { Post, readMarkdownPosts } from "lib/api";
import { HomePosts, HomeText } from "lib/components/Home";
import { GetStaticProps } from "next";
import Link from "next/link";

type HomeProps = {
  posts: Post[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <main>
      <HomeText />
      <hr />
      <HomePosts posts={posts} />
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await readMarkdownPosts();
  return {
    props: {
      posts: blogPosts,
    },
  };
};
