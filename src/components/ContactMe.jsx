import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { MdMessage } from "react-icons/md";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser"
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";


export const ContactMe = () => {
  const form = useRef();
  const hiddenSubmitButton = useRef();

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        hiddenSubmitButton.current.click(); // Trigger form submission
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eq38bat",
        "template_nm1pw5o",
        form.current,
        "aJ0FPhPyZ68Zgsg-P"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Your mail has been sent successfully. Thanks ❤",
              showConfirmButton: false,
              timer: 1500,
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Zoom>
      <div className="my-container md:mt-32 mt-20 bg-slate-100 border-2 p-6 transition-transform transform ">
        <div data-aos="zoom-out-down" className="text-center mb-3 ">
          <h2 className="">
            <>"Get in touch"</>
          </h2>
          <h2 className="text-4xl font-bold green">Contact Me</h2>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex items-center mb-4">
            <AiOutlineUser className="text-black mr-2" />
            <input
              type="text"
              name="user_name"
              className="
               text-black p-2 border-b w-full rounded-md border-white focus:outline-none focus:border-gray-900"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <AiOutlineMail className="text-black mr-2" />
            <input
              type="email"
              name="user_email"
              className="
               text-black p-2 border-b w-full rounded-md border-white focus:outline-none focus:border-gray-900"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <MdMessage className="text-black mr-2" />
            <textarea
              className=" text-black p-2 border-b rounded-md  w-full border-white focus:outline-none focus:border-gray-900"
              placeholder="Message"
              name="message"
              rows="7"
              required
            />
          </div>
          <button
            className="flex mx-auto bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-transform transform hover:scale-105"
            type="submit"
            ref={hiddenSubmitButton} // Hidden submit button
          >
            Send
          </button>
        </form>
      </div>
    </Zoom>
  );
};

export default ContactMe;