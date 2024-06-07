import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function ThankYou() {
  useEffect(() => {
    toast.success("Form submitted successfully");
  }, []);
  return (
    <>
      <main className="grid min-h-full px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-semibold text-secondary">&#10003;</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-secondary sm:text-5xl">
            Thank You
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Your enquiry has been submitted successfully. We will get back to
            you soon.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
}

export default ThankYou;
