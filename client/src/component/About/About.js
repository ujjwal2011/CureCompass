import React from 'react';
import Navbar from '../Navbar1/Navbar';

const About = () => {
  return (
    <>
    <Navbar/>
      <div className="container mx-auto py-10  justify-center">
      <h1 className="text-3xl font-bold mb-6 text-center m-20 text-seagreen-500"><span>About  </span><span className="text-blue-800">CureCompass</span></h1>

      <p className="text-lg text-gray-700 mb-6">
        CureCompass is designed to help individuals make informed decisions about their health
        by providing personalized recommendations for medication based on their symptoms, medical history, and other relevant factors.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        The motivation behind the development of this app stems from the increasing need for accessible and reliable healthcare
        information in today's fast-paced world. Many individuals face challenges when it comes to understanding their health conditions
        and finding the right medications to manage them effectively. Our app aims to bridge this gap by leveraging technology
        to deliver tailored recommendations that prioritize user safety and well-being.
      </p>
      <p className="text-lg text-gray-700 mb-6">
        One of the novel aspects of our app is its use of user reviews to these medicines to analyze vast amounts of medical data
        and generate personalized medication suggestions. This innovative approach allows us to provide recommendations that are
        not only accurate but also adaptable to each user's health profile.
      </p>
      {/* <h2 className="text-2xl font-semibold mb-4 text-center">Meet Our Developers</h2>
      <div className="flex items-center space-x-4">
       
        <div>
          <img src="developer1.jpg" alt="Developer 1" className="w-20 h-20 rounded-full" />
          <p className="text-lg font-semibold">Ujjwal Jain</p>
          <p className="text-sm text-gray-600">Developer</p>
        </div>
        
        <div>
          <img src="developer2.jpg" alt="Developer 2" className="w-20 h-20 rounded-full" />
          <p className="text-lg font-semibold">Jane Smith</p>
          <p className="text-sm text-gray-600">UI/UX Designer</p>
        </div>
        
      </div> */}
    </div>
    </>
  
  );
};

export default About;
