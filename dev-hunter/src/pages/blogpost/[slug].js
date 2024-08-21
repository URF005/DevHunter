import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const fs = require("node:fs");
import { useEffect, useState } from "react";
//Step 1: Find the file corresponding to the slug.
//Step 2: Papoulate them inside the page.
const Slug = (props) => {
  //const router = useRouter();
  const [Blog, setBlog] = useState(props.Blogdetail);
  // useEffect(() => {
  //   if (!router.isReady) return;
  //   const { slug } = router.query;
  //   fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, [router.isReady]);

  return (
    <>
      <div className={`${styles.container} ${inter.className}`}>
        <h1 className={styles.heading}>{Blog && Blog.title}</h1>
        <p className={`${styles.paragraph} ${inter.className}`}>
          {Blog && Blog.content}
        </p>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "how-to-learn-flask",
        },
        params: {
          slug: "how-to-learn-javascript",
        },
        params: {
          slug: "how-to-learn-nextjs",
        },
      }, // See the "paths" section below
    ],
    fallback: true, // false or "blocking"
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  let Blogdetail = await fs.promises.readFile(
    `blogdata/${slug}.json`,
    "utf-8"
  );
  return { props: { Blogdetail:JSON.parse(Blogdetail) } };
}
export default Slug;

//When you don't know the exact segment names ahead of time and want to create routes from dynamic data, you can use Dynamic Segments that are filled in at request time or prerendered at build time.
