import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import BlogOutline from "../components/BlogOutline";

const Home: NextPage = () => {
  const mockData = [
    {
      title: "Blog 1",
      description: "Blog 1 short description",
      id: "1",
      image:
        "https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg",
    },
    {
      title: "Blog 2",
      description: "Blog 2 short description",
      id: "2",
      image:
        "https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg",
    },
    {
      title: "Blog 3",
      description: "Blog 3 short description",
      id: "3",
      image:
        "https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Daveyloper Blog</title>
        <meta
          name="description"
          content="A personal blog of Davit Lursmanashvili"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.innerContainer}>
        <div className={styles.blogContainer}>
          {mockData.map((blog) => (
            <BlogOutline key={blog.id} data={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
