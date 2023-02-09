import React from "react";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";
import Head from "next/head";

const AllPostsPage = (props) => {
  return (
    <>
      <Head>
        <title>All Post</title>
        <meta name="description" content="A list of all posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </>
  );
};

export default AllPostsPage;

export function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
}
