import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";
import { fadeIn } from "../../variants";
// NOTE: `dotenv` must not be imported in client-side code. Use
// NEXT_PUBLIC_* env vars or an API route to expose secrets safely.

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_API_KEY);
    formData.append("subject", `[Portfolio Contact] ${formData.get("subject") || "No subject"}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const result = await response.json();

      if (result.success) {
        setStatusMessage(`Success! Your message was sent and will reach ${process.env.NEXT_PUBLIC_EMAIL} soon.`);
        event.target.reset();
      } else {
        setStatusMessage(result.message || "Error sending message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("Unable to send your message right now. Please try again later.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" exit="hidden" className="h2 text-center mb-12">
            Let\'s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form variants={fadeIn("up", 0.4)} initial="hidden" animate="show" exit="hidden" className="flex-1 flex flex-col gap-6 w-full mx-auto" onSubmit={handleSubmit}>
            <div className="flex gap-x-6 w-full">
              <input type="text" name="name" placeholder="Name" className="input" required />
              <input type="email" name="email" placeholder="E-mail" className="input" required />
            </div>
            <input type="text" name="subject" placeholder="Subject" className="input" required />
            <textarea name="message" placeholder="Message..." className="textarea" required />
            <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group" disabled={isLoading}>
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">{isLoading ? "Sending..." : "Let\'s talk"}</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" aria-hidden />
            </button>
            {statusMessage ? <div className="mt-3 text-sm text-white/80">{statusMessage}</div> : null}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
