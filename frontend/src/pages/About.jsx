import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="text-gray-700 font-sans">
      {/* Page Title */}
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row items-center gap-12 px-6 md:px-20">
        <img className="w-full md:max-w-[450px] rounded-xl shadow-lg" src={assets.about_img} alt="About Feral" />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-lg leading-relaxed">
          <p>
            Welcome to <span className="font-semibold text-gray-800">Feral</span> — where passion meets purpose.
            We’re more than just a brand — we’re a community built around innovation, trust, and quality.
          </p>
          <p>
            At Feral, we aim to create meaningful experiences that solve real-world problems. Whether you're a
            customer, collaborator, or supporter, you're at the center of everything we do. Our journey started
            with a bold idea — to build something that lasts through values of creativity, authenticity, and care.
          </p>
        </div>
      </div>

      {/* Mission and Vision */}
      <div className="bg-pink-50 py-12 px-6 md:px-20 flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            To empower individuals through thoughtfully crafted products and purposeful innovation — while staying
            grounded in transparency, sustainability, and user-centric design.
          </p>
        </div>
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To become a globally recognized name that sets the standard for trust, excellence, and creativity —
            inspiring a future where business and responsibility walk hand in hand.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 px-6 md:px-20 text-center bg-white">
        <h3 className="text-2xl font-semibold mb-10 text-gray-800">Our Core Values</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Customer First', desc: 'We listen, adapt, and prioritize your needs in every decision we make.' },
            { title: 'Innovation', desc: 'We challenge norms to build smarter, faster, and more efficient solutions.' },
            { title: 'Sustainability', desc: 'We care deeply about our planet and strive to reduce our impact every step of the way.' },
            { title: 'Integrity', desc: 'We do what’s right — always. Transparency is our default.' },
          ].map((item, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 bg-white"
            >
              <h4 className="font-semibold text-xl text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team/Philosophy */}
      <div className="bg-pink-50 py-16 px-6 md:px-20">
        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-800">More Than Just a Brand</h3>
        <p className="max-w-4xl mx-auto text-center text-gray-600 leading-relaxed">
          At Feral, we believe business should go beyond transactions — it should build bridges. We’re a passionate
          team of designers, developers, and dreamers driven by one mission: to make life simpler, better, and more
          meaningful. Everything we create is rooted in empathy, crafted with precision, and tested with care.
        </p>
      </div>

      {/* Subscribe Section */}
      <div className="bg-pink-100 mt-10 text-gray-800 py-16 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-semibold mb-4">Join the Feral Family</h3>
        <p className="mb-6 text-gray-800 max-w-xl mx-auto">
          Subscribe to our newsletter and be the first to know about exclusive offers, product drops, and updates. New subscribers get <span className="text-pink-400 font-semibold">10% OFF</span> on their first order!
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

export default About;
