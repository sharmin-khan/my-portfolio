import React, { useState } from "react";

const Contact = () => {
 
    
  const [submitted, setSubmitted] = useState(false);
  

  return (
    <div className="pt-20">
      <section
      id="contact"
      className="max-w-3xl mx-auto p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md my-20"
    >
        
      <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">
        Get In Touch
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
        I would love to hear from you! If you have any questions or would like
        to get in touch, please fill out the form below or send me an email
        directly. I’ll respond as soon as possible.
      </p>

      {submitted && (
        <div className="mb-4 p-3 text-center bg-green-100 text-green-800 rounded">
          Thank you for contacting me! I will get back to you soon.
        </div>
      )}

      <form
        action="https://getform.io/f/bpjzmwwb"
        method="POST"
        className="max-w-lg mx-auto p-6 bg-white dark:bg-transparent rounded shadow space-y-4"
        onSubmit={() => setSubmitted(true)}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 dark:text-gray-200 mb-1 font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-200 mb-1 font-semibold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 dark:text-gray-200 mb-1 font-semibold"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Write your message here..."
            rows="4"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition"
        >
          Send Message
        </button>
      </form>
    </section>
    </div>
  );
};

export default Contact;
