import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md my-20"
    >
      {/* Title & Description */}
      <h2 className="text-3xl font-bold text-green-500 mb-4 text-center">
        Get In Touch
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        I would love to hear from you! If you have any questions or would like
        to get in touch, please fill out the form below or send me an email
        directly. I’ll respond as soon as possible.
      </p>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Contact Info */}
        <div className="flex-1 space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Contact Me
          </h2>
          {/* Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I’m always excited to connect and discuss new web projects or
            improvements. I enjoy creating responsive, user-friendly interfaces
            with clean, modern code.
          </p>
          {/* Email */}
          <div className="flex items-center gap-3 lg:gap-4 p-4 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm cursor-pointer">
            <div className="p-2 lg:p-4 border-2 border-green-500 rounded-full">
              <FaEnvelope className="text-green-500 text-2xl lg:text-4xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Email
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                sharminkhancse@gmail.com
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 lg:gap-4 p-4 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm cursor-pointer">
            <div className="p-2 lg:p-4 border-2 border-green-500 rounded-full">
              <FaPhone className="text-green-500 text-2xl lg:text-4xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Phone
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                +880 1883685442
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 lg:gap-4 p-4 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-700 shadow-sm cursor-pointer">
            <div className="p-2 lg:p-4 border-2 border-green-500 rounded-full">
              <FaMapMarkerAlt className="text-green-500 text-2xl lg:text-4xl" />
            </div>
            <div>
              <p className="font-semibold text-gray-800 dark:text-gray-200">
                Location
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}

        <div className="flex-1">
          {/* Form Title */}
          <h3 className="text-2xl font-semibold text-green-500 mb-4">
            Send a Message
          </h3>
          {submitted && (
            <div className="mb-4 p-3 text-center bg-green-100 text-green-800 rounded">
              Thank you for contacting me! I will get back to you soon.
            </div>
          )}

          <form
            action="https://getform.io/f/bpjzmwwb"
            method="POST"
            className="p-6 bg-white dark:bg-gray-700 rounded shadow space-y-4"
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white"
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-600 dark:text-white"
              />
            </div>

            <button
              type="submit"
               className="w-full bg-green-500 text-white py-2 rounded font-semibold hover:bg-green-600 transition flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaPaperPlane className="text-white" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
