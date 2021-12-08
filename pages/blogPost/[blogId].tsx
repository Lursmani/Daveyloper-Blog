import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import s from "./BlogPost.module.css";
import Image from "next/image";
const mockData = {
  title: "Blog 1",
  description: "Blog 1 short description",
  id: "1",
  image: "https://www.jimdo.com/static/7f58e83e14a16db25da8e56995f710b8/3e79b/hero.jpg",
};

const BlogPost: NextPage = () => {
  const router = useRouter();
  const blogId = router.query.blogId;

  console.log(blogId);
  return (
    <div className={s.container}>
      <div className={s.titleContainer}>
        <h1 className={s.title}>{mockData.title}</h1>
      </div>
      <div className={s.imageContainer}>
        
        <div className={s.imageDiv}>
          <Image
            alt="placeholder"
            src={mockData.image}
            width="100%"
            height="40vh"
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
      <div className={s.contentContainer}>
        <p className={s.content}>{mockData.description }</p>
      </div>
    </div>
  );
};

export default BlogPost;
