import React, { useState } from 'react';
import Navbar from '../Navbar1/Navbar';
import MessageSent from './MessageSent';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    subject: '',
    message: ''
  });

  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Form data:', formData); // Check form data
      const response = await fetch('http://localhost:4000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log('Response:', response); // Check response
      if (response.ok) {
        console.log('Message sent successfully!');
        setIsMessageSent(true); // Update state to show message sent component
        // Clear form fields
        setFormData({
          email: '',
          subject: '',
          message: ''
        });
        // Hide message sent component after a delay
        setTimeout(() => {
          setIsMessageSent(false);
        }, 5000);
      } else {
        console.error('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error); // Check for any errors
    }
  };

  const toggleDrawer = () => {
    const drawer = document.getElementById('drawer-contact');
    drawer.classList.toggle('-translate-x-full');
  };

  const handleMessageClose = () => {
    setIsMessageSent(false);
  };

  return (
    <>
      <Navbar />
      <div className="relative h-screen flex justify-center items-center">
        {/* Background image */}
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('assets/images/contact.avif')`, backgroundSize: '35%', backgroundRepeat: 'no-repeat' }}></div>

        {/* Button to toggle drawer */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 z-10" type="button" onClick={toggleDrawer}>
            CONTACT US
          </button>
        </div>

        {/* Drawer component */}
        <div id="drawer-contact" className="fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white w-80 dark:bg-gray-800" tabIndex="-1" aria-labelledby="drawer-contact-label">
          {/* Message sent successfully component */}
          <MessageSent isVisible={isMessageSent} onClose={handleMessageClose} />
          <h5 id="drawer-label" className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
            <svg className="w-4 h-4 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
            </svg>
            Contact us
          </h5>
          <button type="button" onClick={toggleDrawer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required onChange={handleChange} value={formData.email} />
            </div>
            <div className="mb-6 w-full">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Subject</label>
              <input type="text" id="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Let us know how we can help you" required onChange={handleChange} value={formData.subject} />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required onChange={handleChange} value={formData.message}></textarea>
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block">Send message</button>
          </form>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">contact@curecompass.com</a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">983-456-XXXX</a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Contact;
