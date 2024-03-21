import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
// import { toast } from "react-toastify";
// import axios from "axios";

// import { CgSpinner } from "react-icons/cg";
import { Formik, Form, Field, ErrorMessage } from "formik";

// Inside your component
import { object, string } from "yup";
// import { useNavigate } from "react-router-dom";

const phoneRegExp = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const proposelSchema = object().shape({
  name: string(),
  email: string()
    .email("Invalid email address")
    .matches(emailRegex, "Invalid email"),
  phone: string()
    .matches(phoneRegExp, "Invalid phone number")
    .min(10, "Required 10 digit phone number")
    .required("Number is required*"),
  model: string(),
});

function ModelEnquiry({ open, setOpen, title, model }) {
  const [loading, setLoading] = useState(false);

//   let history = useNavigate();

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed left-0 right-0 z-40 overflow-y-auto -top-16 md:top-4"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-20" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="p-6 bg-white sm:p-6 md:p-8">
                <Dialog.Title
                  as="h3"
                  className="mb-6 text-xl leading-6 text-center lg:text-2xl text-secondary"
                >
                  Book Your {model} Now
                </Dialog.Title>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    phone: "",
                    model: model,
                  }}
                  validationSchema={proposelSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    setLoading(true);
                    setSubmitting(true);
                    // First API call - Zoho Web Form - name="WebToLeads54158000007156717"
                    console.log(values);
                    alert("Form submitted successfully");
                    setLoading(false);
                    setOpen(false);
                  }}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="space-y-2">
                        <div className="relative flex flex-col justify-end ">
                          <div className="flex justify-between">
                            <label
                              htmlFor="name"
                              className="px-2 text-sm leading-7 text-secondary"
                            >
                              Name*
                            </label>
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="bg-secondary text-white text-sm px-1 py-0.5 w-min whitespace-nowrap "
                            />
                          </div>
                          <Field
                            type="text"
                            id="name"
                            name="name"
                            autoComplete="off"
                            required
                            maxLength={35}
                            // placeholder="Enter you name here"
                            className="w-full h-10 px-2 font-sans border rounded-lg outline-none focus:border-secondary focus:placeholder-transparent"
                          />
                        </div>

                        <div className="relative flex flex-col justify-end ">
                          <div className="flex justify-between">
                            <label
                              htmlFor="phone"
                              className="px-2 text-sm leading-7 text-secondary"
                            >
                              Phone No.*
                            </label>
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="bg-secondary text-white text-sm px-1 py-0.5 w-min whitespace-nowrap mb-1 rounded"
                            />
                          </div>

                          <Field
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            autoComplete="off"
                            maxLength={10}
                            // placeholder="Enter your mobile number here"
                            className="w-full h-10 px-2 font-sans border rounded-lg outline-none focus:border-secondary focus:placeholder-transparent"
                          />
                        </div>
                        <div className="relative flex flex-col justify-end ">
                          <div className="flex justify-between">
                            <label
                              htmlFor="email"
                              className="px-2 text-sm leading-7 text-secondary"
                            >
                              Email*
                            </label>
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="bg-secondary text-white text-sm px-1 py-0.5 w-min whitespace-nowrap mb-1 rounded"
                            />
                          </div>

                          <Field
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            // placeholder="Enter your email here"
                            className="w-full h-10 px-2 font-sans border rounded-lg outline-none focus:border-secondary focus:placeholder-transparent"
                          />
                        </div>
                        {/* <input
                          type="text"
                          value={model}
                          disabled
                          className="w-full select-none text-lg h-10 font-sans border-b border-black outline-none placeholder:text-lg   px-0.5   text-gray-600 bg-white"
                        /> */}
                        {/* <div className="flex w-full gap-3 ">
                        <button
                              type="button"
                              className={`border-b border-black px-6 py-2.5  hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg w-full `}
                              onClick={() => setOpen(false)}
                            >
                              Cancel
                            </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`border-b border-black px-6 py-2.5  hover:bg-black hover:text-white duration-200 mt-4 lg:hover:rounded text-lg w-full `}
                        >
                          {loading ? (
                            <div className="flex items-center justify-center">
                              <CgSpinner className="w-5 h-5 mr-2 animate-spin" />
                              Submitting
                            </div>
                          ) : (
                            "Submit"
                          )}
                        </button>
                        </div> */}
                        <div className="flex gap-4 pt-3 ">
                          {/* {!loading && (
                            <button
                              type="button"
                              className={` px-6 py-2  border hover:border-secondary duration-200  w-1/2 rounded-lg
                               hover:scale-95  text-secondary`}
                              onClick={() => setOpen(false)}
                            >
                              Back
                            </button>
                          )} */}
                          {!loading && (
                            <button
                              type="button"
                              className={` px-6 py-2  border hover:border-secondary duration-200  w-1/2 rounded-lg
                               hover:scale-95  text-secondary  text-base`}
                              onClick={() => setOpen(false)}
                            >
                              Back
                            </button>
                          )}
                          <button
                            type="submit"
                            className={` px-6 py-2  border hover:border-secondary duration-200   rounded-lg
                               hover:scale-95  bg-secondary text-white w-1/2 text-base`}
                          >
                            {loading ? "Submitting" : "Submit"}
                          </button>
                        </div>
                      </div>
                      <div className="container mt-4 text-xs text-gray-600 ">
                        <span className="font-semibold">*Disclaimer:</span> By
                        clicking 'Submit', You have agreed to our Terms &
                        Conditions.
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default ModelEnquiry;
