import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CgSpinner } from "react-icons/cg";

import { Toaster, toast } from "react-hot-toast";

const BookForm = ({ final }) => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      model: "",
      disclaimer: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").notRequired(),
      phone: Yup.string()
        .matches(/^[6-9][0-9]{6,9}$/, "Invalid phone number")
        .required("Phone is required"),
      model: Yup.string().required("Model is required"),
      disclaimer: Yup.boolean().oneOf([true], "Must accept disclaimer"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Simulate form submission delay
        await new Promise((resolve) => setTimeout(resolve, 400));

        // Your actual form submission logic goes here
        // For demonstration purposes, let's display a success message using toast
        toast.success("Form submitted successfully");

        // Reset form values after successful submission
        resetForm({
          name: "",
          email: "",
          phone: "",
          model: "",
          disclaimer: false,
        });
      } catch (error) {
        // Handle form submission errors here
        console.error("Form submission error:", error);
        toast.error("Form submission failed");
      } finally {
        // Always set submitting state to false after form submission
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="">
      <p className="mb-5 text-xl font-semibold tracking-wide ">
        Vehicle Enquiry
      </p>
      <form onSubmit={formik.handleSubmit}>
        <div className="mt-3">
          <label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="mobile">
            Mobile <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="mobile"
            maxLength={10}
            className="border w-full rounded p-1.5 outline-none"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500">{formik.errors.phone}</div>
          ) : null}
        </div>

        <div className="mt-3">
          <label htmlFor="model">
            Model <span className="text-red-600">*</span>
          </label>
          {final ? (
            <select
              name="model" // Add the name attribute to match the field name in Formik
              onChange={formik.handleChange} // Call handleChange to update Formik state
              onBlur={formik.handleBlur} // Optionally handle onBlur event
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            >
              <option value="">Select Model</option>
              {final.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <select
              name="model" // Add the name attribute to match the field name in Formik
              onChange={formik.handleChange} // Call handleChange to update Formik state
              onBlur={formik.handleBlur} // Optionally handle onBlur event
              className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none sm:text-sm"
            >
              <option value="">Select Model</option>
              {/* <optgroup label="Tata"> */}
                <option value="Other">Other</option>
                {/* <option value="Altroz">Altroz</option>
                <option value="Tigor">Tigor</option>
                <option value="Punch">Punch</option>
                <option value="Nexon">Nexon</option>
                <option value="Harrier">Harrier</option>
                <option value="Safari">Safari</option> */}
              {/* </optgroup> */}
            </select>
          )}

          {formik.touched.model && formik.errors.model ? (
            <div className="text-red-500">{formik.errors.model}</div>
          ) : null}
        </div>

        <p className="mt-5 text-xs text-gray-700">
          <span className="text-sm font-bold text-black">Disclaimer</span>: I
          agree that by clicking the ‘Submit’ button below, I am explicitly
          soliciting a call/Message from Orange Groups or its Representatives on
          my ‘Mobile’.
        </p>

        <div className="flex items-start mt-5">
          <input
            id="disclaimer"
            type="checkbox"
            checked={formik.values.disclaimer} // Use checked instead of value
            onChange={formik.handleChange} // Handle onChange to update formik state
            required
            {...formik.getFieldProps("disclaimer")}
          />
          <div className="ml-2 text-sm ">
            <label htmlFor="disclaimer" className="font-medium text-gray-700">
              Please agree with the following Disclaimer
            </label>
          </div>
          {formik.touched.disclaimer && formik.errors.disclaimer ? (
            <div className="text-red-500">{formik.errors.disclaimer}</div>
          ) : null}
        </div>

        <button
          className={`${
            formik.isValid ? "bg-secondary hover:bg-primary" : "bg-gray-300"
          } text-white px-5 py-1.5 flex mx-auto mt-5 rounded`}
          type="submit"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {formik.isSubmitting ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="w-5 h-5 mr-2 text-white animate-spin" />
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default BookForm;
