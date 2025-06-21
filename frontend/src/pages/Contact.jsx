import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="text-gray-700 font-sans">
      {/* Page Title */}
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      {/* Intro Section */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12 px-6 md:px-20">
        <img className="w-full md:max-w-[450px] rounded-xl shadow-lg" src={assets.contact_img} alt="Contact Feral" />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-lg leading-relaxed">
          <p>
            Have questions, feedback, or just want to say hello? We're here to help. Whether it's about a product, an order,
            or just a friendly message, our team is ready to connect with you.
          </p>
          <p>
            At <span className="font-semibold text-gray-800">Feral</span>, communication is at the heart of what we do.
            Reach out and expect a response within 24 hours — because you matter to us.
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-pink-50 py-12 px-6 md:px-20">
        <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Send Us a Message</h3>
        <form className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your Name" className="px-4 py-3 border border-gray-300 rounded-md" required />
          <input type="email" placeholder="Your Email" className="px-4 py-3 border border-gray-300 rounded-md" required />
          <input type="text" placeholder="Subject" className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md" />
          <textarea placeholder="Your Message" rows="5" className="md:col-span-2 px-4 py-3 border border-gray-300 rounded-md resize-none" required></textarea>
          <button type="submit" className="md:col-span-2 bg-pink-400 hover:bg-pink-600 text-white px-6 py-3 rounded-md transition duration-300">
            Send Message
          </button>
        </form>
      </div>

      {/* Support Info */}
      <div className="py-14 px-6 md:px-20 text-center bg-white">
        <h3 className="text-2xl font-semibold mb-8 text-gray-800">Need Immediate Help?</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
          <div className="border p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Customer Support</h4>
            <p className="text-gray-600 text-sm">support@feral.com</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Call Us</h4>
            <p className="text-gray-600 text-sm">+91 98765 43210</p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold text-xl text-gray-800 mb-2">Office Hours</h4>
            <p className="text-gray-600 text-sm">Mon - Fri: 9AM to 6PM IST</p>
          </div>
        </div>
      </div>

      {/* Office Address */}
      <div className="bg-pink-50 py-14 px-6 md:px-20">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">Our Office</h3>
        <p className="text-center max-w-2xl mx-auto text-gray-700 leading-relaxed">
          Feral HQ, 2nd Floor, Tech Park Avenue, Phase 4, Hinjewadi, Pune, Maharashtra - 411057, India.
          <br />
          Come visit us or drop a letter — we love old-school too!
        </p>
      </div>

      {/* Careers at Feral */}
      <div className="py-16 px-6 md:px-20 text-center bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Careers at Feral</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          We’re always on the lookout for passionate, driven people to join our team. If you want to work on exciting
          challenges and create real impact — Feral might be your next home.
        </p>
        <button className="bg-pink-400 hover:bg-pink-600 text-white px-6 py-3 rounded-full transition duration-300">
          Explore Jobs
        </button>
      </div>

      {/* Subscribe CTA */}
      <div className="bg-pink-50 text-gray-800 py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">Stay in the Loop</h3>
        <p className="mb-6 text-gray-800 max-w-xl mx-auto">
          Subscribe for updates, early access to launches, and a <span className="text-pink-400 font-semibold">10% welcome discount</span>!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-[300px] px-4 py-2 rounded-full text-gray-800"
            required
          />
          <button
            type="submit"
            className="bg-pink-400 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
