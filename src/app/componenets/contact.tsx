import React from "react";
import { Heebo } from "next/font/google";
import Link from "next/link";

const heebo = Heebo({ subsets: ["latin"] });

const Contact = () => {
  return (
    <section id="contact" data-aos="zoom-in" className="w-full md:w-[483px] mx-auto my-16">
      <div className="bg-white p-6 md:p-8 shadow-lg rounded-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className={`${heebo.className} text-2xl md:text-3xl font-semibold`}>Contact Me</h2>
          <Link href="/" className={`${heebo.className} text-myPink text-sm md:text-base`}>
            Home
          </Link>
        </div>
        
        <form data-aos="zoom-in"
          target="_blank"
          action="https://formspree.io/f/movqeqwj"
          method="POST"
          className="space-y-6"
        >
          <div data-aos="zoom-in" >
            <label htmlFor="name" className="block text-black text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-myPink"
              required
            />
          </div>
          
          <div data-aos="zoom-in">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-myPink"
              required
            />
          </div>

          <div data-aos="zoom-in">
            <label htmlFor="subject" className="block text-black text-sm font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-myPink"
              required
            />
          </div>

          <div data-aos="zoom-in">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-myPink h-32"
              required
            />
          </div>

          <button data-aos="zoom-in"
            type="submit"
            className="w-full py-3 bg-myPink text-white font-semibold rounded-md shadow-lg hover:bg-myPink/80 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
