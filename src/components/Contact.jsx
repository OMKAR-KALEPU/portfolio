import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const EMAIL = {
      TEMPLATE_ID: "template_pfo7mhi",
      SERVICE_ID: "service_3y8flns",
      PUBLIC_KEY: "iD6vq-NvNpwTXqRH_",
    };

    emailjs
      .send(
        EMAIL.SERVICE_ID,
        EMAIL.TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Omkar Kalepu",
          reply_to: form.email,
          to_email: "omkar.kalepu2002@gmail.com",
          message: form.message,
        },
        EMAIL.PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          emailSuccess();
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);
          setLoading(false);
          emailFailed();
        }
      );
  };

  const emailSuccess = () => {
    toast.success("Thank you. I'll get back to you ASAP!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const emailFailed = () => {
    toast.error("Something went wrong!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.73] bg-black-100 p-8 rounded-2xl"
        >
          <p className={`${styles.sectionSubText}`}>Get in touch</p>
          <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-5"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

            <label className="flex flex-col">
              <span className="text-white font-medium">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

            <label className="flex flex-col">
              <span className="text-white font-medium">Your Message</span>
            </label>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />

            <button
              tpe="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
              {loading ? "Sending.." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
