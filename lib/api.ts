import { readdirSync, readFileSync } from "fs";

import { remark } from "remark";
import remarkHtml from "remark-html";
import matter from "gray-matter";

export interface Post {
  link: string;
  text: string;
  resume: string;
  author: string;
}

export interface PostFile {
  fileName: string;
  fileContent: matter.GrayMatterFile<Buffer>;
}

const postsDirectory = `${process.cwd()}/posts`;

export const allMarkdownFileNames = readdirSync(postsDirectory);

const readPostFile: (fileName: string) => PostFile = (fileName: string) => ({
  fileContent: matter(readFileSync(`posts/${fileName}`)),
  fileName,
});

const linkFromFileName: (fileName: string) => string = (fileName: string) =>
  fileName.replace(".md", "");

export const allPostLinks = allMarkdownFileNames.map(linkFromFileName);

const createPostFromPostFile: (postFile: PostFile) => Promise<Post> = async (
  postFile: PostFile
) => {
  const html = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(postFile.fileContent.content);
  return {
    link: linkFromFileName(postFile.fileName),
    author: postFile.fileContent.data["author"] || "ANONYMOUS",
    resume: postFile.fileContent.data["resume"],
    text: html.value.toString(),
  };
};

export const readMarkdownPosts: () => Promise<Post[]> = async () => {
  const allMarkdownFiles = allMarkdownFileNames.map(readPostFile);
  const blogPosts: Post[] = await Promise.all(
    allMarkdownFiles.map(createPostFromPostFile)
  );
  return blogPosts;
};

export const readMarkdownPostFromName: (name: string) => Promise<Post> = async (
  name: string
) => {
  const markDownFile = allMarkdownFileNames.find(
    (fileName) => fileName === name
  );
  if (markDownFile) {
    const postFile = readPostFile(markDownFile);
    return createPostFromPostFile(postFile);
  } else {
    throw new Error(`Post not found: ${name}`);
  }
};
