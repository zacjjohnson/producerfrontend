import { useState } from "react";
import axios from "axios";
// import "./contact.styles.css";

const API_URI = "https://producerdashboardserver.vercel.app";

const defaultFormFields = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, message } = formFields;
  const [successMessage, setSuccessMessage] = useState(undefined);

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const requestBody = { name, email, message };

    axios
      .post(`${API_URI}/contact`, requestBody)
      .then((response) => {
        console.log(response);
        setSuccessMessage(response.data);
        resetFormFields();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="flex flex-col">
        <div>
          <h1 className="text-4xl pb-12">Want to work? Let's talk!</h1>
          {/* <img src={'https://i.imgur.com/pnrJDv0.jpg'} alt='contact'></img> */}
        </div>

        {/* <div className="flex flex-col border border-black w-52">
          <form className="form" onSubmit={handleContactSubmit}>
            <h2>Contact me here</h2>

            <input
              type="text"
              className="input-form"
              name="name"
              placeholder="Name"
              value={name}
              onChange={handleChange}
            />

            <input
              type="text"
              className="input-form"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />

            <textarea
              type="text"
              className="input-form-message"
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChange}
            />

            <button type="submit">Submit</button>

            {successMessage && (
              <h3 className="success-message">{successMessage}</h3>
            )}
          </form>
        </div> */}
      </div>

      <div className="flex flex-col justify-center align-center">
        <div className="flex flex-col mx-auto rounded-lg align-middle">
          <form
            novalidate=""
            className="flex flex-col align-center w-full p-10 rounded-lg shadow hover:shadow-lg bg-slate-100"
            onSubmit={handleContactSubmit}
          >
            <div className="flex flex-col">
              <label for="name" className="text-xl font-bold">
                Full name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder=""
                className="p-3 rounded border border-black box-border"
                value={name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label for="email" className="text-xl font-bold">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="p-3 rounded border border-black box-border"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col p-2">
              <label for="message" className="text-xl font-bold p-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="p-3 rounded border border-black w-full box-border"
                value={message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-xl font-bold tracking-wide uppercase rounded"
            >
              Send Message
            </button>
            {successMessage && (
              <h3 className="success-message">{successMessage}</h3>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
