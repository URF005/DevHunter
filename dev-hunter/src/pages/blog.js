import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import { Inter } from "next/font/google";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
const fs = require("node:fs");
import InfiniteScroll from "react-infinite-scroll-component";
// Step 1: Collect all the files from bolgdata directory.
// Step 2: Iterate through them and display them.

const Blog = (props) => {
  console.log(props);
  const [Blog, setBlog] = useState(props.allblog);
  const [count, setcount] = useState(2);
  // useEffect(() => {
  //   fetch("http://localhost:3000/api/blogs")
  //     .then((a) => {
  //       return a.json();
  //     })
  //     .then((parsed) => {
  //       setBlog(parsed);
  //     });
  // }, []);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setcount(count + 2);
    let data = await d.json();
    setBlog(data);
  };

  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <InfiniteScroll
          dataLength={Blog.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount != Blog.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className={styles.custom}>
            <div className="blogs">
              <h2 className={styles.popularBlogs}>Latest Blogs</h2>
              <div className={styles.title}>
                {Blog &&
                  Blog.map((blogitem) => {
                    return (
                      <div key={blogitem.slug} className={styles.title}>
                        <Link href={`/blogpost/${blogitem.slug}`}>
                          <h3>{blogitem.title}</h3>
                        </Link>
                        <p className={`${styles.content} ${inter.className}`}>
                          {blogitem.content.substr(0, 100)}...
                        </p>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </InfiniteScroll>
      </main>
    </>
  );
};
export async function getStaticProps() {
  // Fetch data from external API
  let data = await fs.promises.readdir("blogdata");
  let allcount = data.length;
  let myFile;
  let allblog = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    myFile = await fs.promises.readFile("blogdata/" + item, "utf8");
    allblog.push(JSON.parse(myFile));
  }
  // Pass data to the page via props
  return { props: { allblog, allcount } };
}

export default Blog;
