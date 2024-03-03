import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
// import { db } from "../firebase";
// import { toast } from "react-toastify";

const BookForm = () => {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoader(true);
    //     const dataCollectionRef = collection(db, "enquiries");
    //     if (name !== "" && phone !== "" && model !== "") {
    //       try {
    //         await addDoc(dataCollectionRef, {
    //           name: name,
    //           email: email,
    //           phone: phone,
    //           model: model,
    //           timestamp: dateTime,
    //         });
    //         toast.success("Form submitted successfully");
    //         setLoader(false);
    //         setName("");
    //         setEmail("");
    //         setPhone("");
    //         setModel("");
    //         navigate("/thank-you");
    //       } catch (error) {
    //         toast.error("Something went wrong!");
    //       }
    //     } else {
    //       toast.error("Please fill all the fields");
    //     }
    //     setLoader(false);
  };

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      //   toast.error("Enter valid phone number", {
      //     theme: "colored",
      //   });
    }
  }

  return (
    <>
      <p className="font-semibold text-xl tracking-wide mb-5">
        Vehicle Enquiry
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="name">
            Name <span className="text-red-600">*</span>
          </label>
          <input
            id="name"
            type="text"
            className="border w-full rounded p-1.5 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="border w-full rounded p-1.5 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="mobile">
            Mobile <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="mobile"
            className="border w-full rounded p-1.5 outline-none"
            value={phone}
            minLength="10"
            maxLength="10"
            onChange={(e) =>
              setPhone(
                e.target.value.replace(/[^1-9]/g, "") &&
                  e.target.value.replace(/ /g, "")
              )
            }
          />
          {!pattern.test(phone) && phone.length === 10 ? (
            <small className="text-red-500">phone number is invalid</small>
          ) : (
            ""
          )}
        </div>

        <div className="mt-3">
          <label htmlFor="">
            Model <span className="text-red-600">*</span>
          </label>
          <select
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
          >
            <option>Select Model</option>
            <optgroup label="Tata">
              <option value="Tiago">Tiago</option>
              <option value="Altroz">Altroz</option>
              <option value="Tigor">Tigor</option>
              <option value="Punch">Punch</option>
              <option value="Nexon">Nexon</option>
              <option value="Harrier">Harrier</option>
              <option value="Safari">Safari</option>
            </optgroup>
          </select>
        </div>

        <p className="text-gray-700 mt-5 text-xs">
          <span className="text-black font-bold text-sm">Disclaimer</span>: I
          agree that by clicking the ‘Submit’ button below, I am explicitly
          soliciting a call/Message from Orange Groups or its Representatives on
          my ‘Mobile’.
        </p>

        <div className="flex items-start mt-5">
          <input
            id="disclaimer"
            type="checkbox"
            required
            className="h-4 w-4 rounded"
          />
          <div className="ml-2 text-sm ">
            <label htmlFor="disclaimer" className="font-medium text-gray-700">
              Please agree with following Disclaimer
            </label>
          </div>
        </div>

        <button
          className={`${
            pattern.test(phone) && phone.length === 10
              ? "cursor-auto"
              : "cursor-not-allowed"
          } bg-red-500 hover:bg-red-400 text-white px-5 py-1.5 flex mx-auto mt-5 rounded`}
          type="submit"
          disabled={pattern.test(phone) && phone.length === 10 ? false : true}
        >
          {loader ? (
            <div className="flex items-center justify-center">
              <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
              Loading...
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </>
  );
};

export default BookForm;
