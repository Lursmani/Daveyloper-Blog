import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import s from "./BlogOutline.module.css";
import Image from "next/image";
import Button from "./button";

type Props = {
  data: any;
};

const BlogMain: NextPage<Props> = (props) => {
  const { data } = props;

  return (
    <div className={s.container}>
      <div className={s.imageDiv}>
        <Image
          alt="sample image"
          src={props.data.image}
          layout="responsive"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </div>
      <div className={s.titleDiv}>
        <h2 className={s.title}>Title</h2>
      </div>
      <div className={s.descriptionDiv}>
        <p className={s.description}>Description TExt</p>
      </div>
      <div className={s.buttonDiv}>
        <Button text="READ MORE" link={`/blogPost/${data.id}`} />
      </div>
    </div>
  );
};

export default BlogMain;
