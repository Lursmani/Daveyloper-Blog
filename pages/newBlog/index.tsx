import { useEffect, useRef, useState } from "react";
import { NextPage } from "next";
import { Formik } from "formik";
import s from "./NewBlog.module.css";

const NewBlog: NextPage = () => {
  const formRef: any = useRef();
  //////////////// STATE ///////////////////////
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  type FormValues = {
    title: string;
    content: string;
  };

  const initialValues: FormValues = {
    title: "",
    content: "",
  };

  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <p>sdasdasd</p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        innerRef={formRef}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <form onSubmit={handleSubmit} className={s.form}>
            <div className={s.formContainer}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={(e) => {
                  handleChange(e);
                  setTitle(e.target.value);
                }}
                value={values.title}
                className={s.titleInput}
              />
              <textarea
                wrap="soft"
                name="content"
                placeholder="Content"
                onChange={(e) => {
                  handleChange(e);
                  setContent(e.target.value);
                }}
                value={values.content}
                className={s.contentInput}
              />
              <button className={s.submitButton}>SUBMIT</button>
            </div>
          </form>
        )}
      </Formik>
      <div className={s.preview}>
        <h1>{title}</h1>
        
      </div>
    </div>
  );
};

export default NewBlog;
