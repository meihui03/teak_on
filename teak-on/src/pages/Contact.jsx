import { useRef, useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_udjfj3d",   
        "template_twt5zcf", 
        form.current,
        "38OsT52PizAQAGjHZ"    
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Email sent successfully!");
          setSuccess(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
          setError(true);
        }
      );
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Fill out the form below or reach out to us directly.
      </p>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" name="user_name" required className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" name="user_email" required className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea name="message" required className="w-full border border-gray-300 rounded p-2" rows="5" />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Send Message
        </button>

        {success && <p className="text-green-600 mt-2">Your message has been sent ✅</p>}
        {error && <p className="text-red-600 mt-2">Failed to send message ❌</p>}
      </form>
    </div>
  );
}

export default Contact;
