import SectionHead from "../Header/SectionHead";
import ContactInfo from "../Contact/ContactInfo";
import ContactForm from "../Contact/ContactForm";
import '../Contact/Contact.css'
import { Bounce, ToastContainer } from "react-toastify";

const Contact = () => {
  return (
  <div className="h-auto relative pt-20 w-full pb-10">
    <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    <SectionHead head="GET IN TOUCH"/>
    <div className="ContactContent h-[80%] w-[100%] md:pt-10">
      <div className=" w-auto flex justify-center items-center max-md:flex-col overflow-x-clip">
        <ContactInfo />
        <div className="bar z-99 w-[4px] h-[200px] bg-cyan-500 max-md:hidden"></div>
        <ContactForm/>
      </div>
    </div>
  </div>
  );
};

export default Contact;
