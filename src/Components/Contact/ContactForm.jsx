import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../Contact/Contact.css'

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,     
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,   
        form.current,
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Mail sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce, 
          });
        },
        (error) => {
          console.log(error.text);
          toast.error(error.text, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce, 
          });
        }
      );
  };

  return (
    <div className="ContactForm max-md:w-[70%] w-[40%] h-[90%] bg-slate-700">
      <form onSubmit={submitHandler} ref={form} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            value={name}
            name="name"
            className="bg-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="">
          <label
            htmlFor="email-address-icon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your Email
          </label>
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              value={email}
              id="email-address-icon"
              className="bg-gray-800 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@xyz.com"
            />
          </div>
        </div>
        <div className="">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Your message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            required
            value={message}
            id="message"
            name="message"
            rows="4"
            className="resize-none max-h-28 min-h-10 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-cyan-800 focus:ring-cyan-500 focus:border-cyan-500 dark:bg-gray-800 dark:border-cyan-800 dark:placeholder-gray-400 dark:text-white"
            placeholder="Leave your message..."></textarea>
        </div>
        <button
          type="submit"
          value="send"
          className="mt-6 ContactForm4 hover:text-cyan-200 hover:border-cyan-200 font-semibold focus:border text-[#1F2937] focus:scale-[.9] transition-all  focus:outline-none focus:ring-cyan-200 border-[2px] border-[#1F2937] text-sm w-full max-md:w-auto sm:w-auto px-5 py-2.5 text-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
