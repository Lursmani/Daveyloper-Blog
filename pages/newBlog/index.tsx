import { useEffect, useState } from "react";
import { NextPage } from "next";
import { useFormik } from "formik";
import s from "./NewBlog.module.css";

const NewBlog: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={s.container}>
      <form onSubmit={formik.handleSubmit}>
        <input type="text" name="title" onChange={formik.handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};


export default NewBlog;