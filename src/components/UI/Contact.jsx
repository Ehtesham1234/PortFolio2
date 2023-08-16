import React from "react";

// import { Button, Label, TextInput, Textarea } from "flowbite-react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-headingColor dark:text-headingColorDark font-[700] text-[2.5rem] mb-8">
          Get in touch
        </h2>
        <div className="md:flex justify-between items-center gap-3">
          <div className="w-full md:w-1/2 h-[300px] sm:h-[450px] rounded-lg">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116921.23495665117!2d86.99427560000001!3d23.68351709999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71f0ea1022529%3A0xf888f7e7fd11cefe!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1689788633760!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full h-full "
            ></iframe>
          </div>

          <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 dark:bg-gray-500 px-4 lg:px-8 py-8 rounded-lg">
            <form
              className="w-full"
              action="https://formspree.io/f/moqovonr"
              method="POST"
            >
              <div className="mb-5">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your name"
                  autoComplete="off"
                  required
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  autoComplete="off"
                  required
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <input
                  type="text"
                  name="Subject"
                  placeholder="Subject"
                  autoComplete="off"
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <div className="mb-5">
                <textarea
                  type="text"
                  name="message"
                  // cols={30}
                  rows={3}
                  placeholder="Enter your message"
                  autoComplete="off"
                  required
                  className="w-full p-3 focus:outline-none rounded-[5px]"
                />
              </div>

              <button
                type="submit"
                className="w-full p-3 focus:outline-none rounded-[5px] bg-primaryColor dark:bg-primaryColorDark text-white
              hover:bg-headingColor dark:hover:bg-headingColorDark text-center ease-linear duration-150"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

//Few addition
//Add new projects
