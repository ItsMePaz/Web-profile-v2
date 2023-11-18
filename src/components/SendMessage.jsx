import React, { useEffect, useState } from "react";
import titlestroke from "../../public/titlestroke1.png";
import emailjs from "@emailjs/browser";

const SendMessage = () => {
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [senderSubject, setSenderSubject] = useState("");
  const [senderMessage, setSenderMessage] = useState("");
  const [showNameMaxChar, setShowNameMaxChar] = useState(false);
  const [buttonMessage, setButtonMessage] = useState("Send message");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const NAME_MAX_LENGTH = 30;

  useEffect(() => {
    if (senderName.length >= NAME_MAX_LENGTH) {
      setShowNameMaxChar(true);
    } else {
      setShowNameMaxChar(false);
    }
  }, [senderName]);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonMessage("Sending...");
    setShowLoader(true);
    const serviceId = "service_jjh7y69";
    const templateId = "template_pljd8jh";
    const publicKey = "e2BEDxBbv8WpLIEkP";

    const templayeParams = {
      from_name: senderEmail,
      from_email: senderEmail,
      to_name: "Michael",
      message: senderMessage,
    };
    setTimeout(() => {
      emailjs
        .send(serviceId, templateId, templayeParams, publicKey)
        .then((response) => {})
        .catch((error) => {
          console.error("Error sending email:", error);
        })
        .finally(() => {
          setButtonMessage("Done!");
          setButtonDisabled(true);
          setShowLoader(false);
        });
    }, 2500);
  };

  return (
    <section>
      <div className="relative flex flex-col justify-center mt-4 items-center">
        <h2 className="absolute z-20 text-white text-[25px]">CONTACT</h2>
        <img className="w-[170px] z-10 " src={titlestroke.src} alt="" />
      </div>
      <br />
      <form
        action=""
        className="flex flex-col items-center w-200 "
        onSubmit={sendEmail}
      >
        {" "}
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">Name</span>
          <input
            type="text"
            className="border border-neutral-950 w-[280px] peer font-sans px-1"
            required
            placeholder="Your name here!"
            name="user_name"
            maxLength={NAME_MAX_LENGTH}
            value={senderName}
            onChange={(e) => {
              setSenderName(e.target.value);
            }}
          />
          <p
            className=" invisible text-pink-600 text-sm"
            style={{ visibility: showNameMaxChar ? "visible" : "hidden" }}
          >
            Maximum of {NAME_MAX_LENGTH} characters only
          </p>
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            className="border w-[280px] border-neutral-950 peer ... font-sans px-1"
            required
            placeholder="Your email here!"
            name="user_email"
            value={senderEmail}
            onChange={(e) => {
              setSenderEmail(e.target.value);
            }}
          ></input>
          <p className="invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label className="block ">
          <span className="block text-sm font-medium text-slate-700 ">
            Message
          </span>
          <textarea
            type="text"
            className="border w-[280px] pb-[200px] border-neutral-950 px-1 peer ... font-sans text-left align-text-top mb-4"
            style={{ resize: "none" }}
            placeholder="Place your message here!"
            required
            name="message"
            value={senderMessage}
            onChange={(e) => {
              setSenderMessage(e.target.value);
            }}
          ></textarea>
        </label>
        <button
          className="flex select-none items-center gap-3 rounded-lg bg-gradient-to-tr from-black to-black py-3 px-6 text-center align-middle  text-xs  uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:shadow-black-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
          disabled={buttonDisabled}
        >
          {buttonMessage}
        </button>
      </form>
    </section>
  );
};

export default SendMessage;
