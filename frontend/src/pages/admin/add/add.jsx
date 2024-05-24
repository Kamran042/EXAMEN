import React from "react";
import { Helmet } from "react-helmet";
import "./Add.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "sweetalert2/src/sweetalert2.scss";
import Swal from "sweetalert2";

const Add = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      desc: "",
      img: "",
      price: "",
      count: "",
      totalPrice: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Required"),
      desc: Yup.string().required("Required"),
      img: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      axios.post("http://localhost:8080/api/examen", {
        title: values.title,
        desc: values.desc,
        img: values.img,
        price: values.price,
        count: 1,
        totalPrice: values.price,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <form className="add__form" onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">Title: </label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
        />
        {formik.touched.title && formik.errors.title ? (
          <div>{formik.errors.title}</div>
        ) : null}

        <label htmlFor="desc">Description: </label>
        <input
          id="desc"
          name="desc"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.desc}
        />
        {formik.touched.desc && formik.errors.desc ? (
          <div>{formik.errors.desc}</div>
        ) : null}

        <label htmlFor="img">Img (URL): </label>
        <input
          id="img"
          name="img"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.img}
        />
        {formik.touched.img && formik.errors.img ? (
          <div>{formik.errors.img}</div>
        ) : null}

        <label htmlFor="price">Price: </label>
        <input
          id="price"
          name="price"
          type="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.price}
        />
        {formik.touched.price && formik.errors.price ? (
          <div>{formik.errors.price}</div>
        ) : null}

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Add;
