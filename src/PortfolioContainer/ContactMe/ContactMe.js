/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useRef } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../PortfolioContainer/footer/Footer";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);
  const form = useRef();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  // const submitForm = async (e) => {
  //   e.preventDefault();
  //   try {
  //     let data = {
  //       name,
  //       email,
  //       message,
  //     };
  //     setBool(true);
  //     console.log(data);
  //     const res = await axios.post(`/contact`, data);
  //     if (name.length === 0 || email.length === 0 || message.length === 0) {
  //       setBanner(res.data.msg);
  //       toast.error(res.data.msg);
  //       setBool(false);
  //     } else if (res.status === 200) {
  //       setBanner(res.data.msg);
  //       toast.success(res.data.msg);
  //       setBool(false);

  //       setName("");
  //       setEmail("");
  //       setMessage("");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
    const submitForm = (e) => {
      e.preventDefault();
      let data = {
        name,
        email,
        message,
      };
      emailjs
        .sendForm(
          "service_0wmgnbl",
          "template_u07hvsd",
          form.current,
          "Z0CbWT44L2zlf5Ag-"
        )
        .then(
          (result) => {
            console.log(result.text);
            // Clear all input field values
            form.current.reset();
            // Success toast message
            toast.success("Email send Successfully");
          },
          (error) => {
            console.log(error.text);
            toast.error(error.text);
          }
        );
    };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical
              loop={Infinity}
              steps={[
                "Get In Touch 📨 🖥 For:-",
                2000,
                "Collaborations 🧑🏿‍🔧🖇",
                1000,
                "Employment Opportunities 👔",
                1000,
                "Or Just Say Hi 👋🏾👋🏾 ",
                1000,
              ]}
            />
          </h2>{" "}
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm} ref={form}>
            <a
              href="mailto:ndichumuriithi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <h4>ndichumuriithi@gmail.com</h4>
            </a>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="from_name"
              placeholder="Name"
              required
              // value={name}
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="user_email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              placeholder="Email "
              required
              // onChange={handleEmail}
              // value={email}
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              // onChange={handleMessage}
              // value={message}
              name="message"
              placeholder="Message"
            />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
