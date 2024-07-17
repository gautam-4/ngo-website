import React, { useState } from 'react';
import MapContainer from '../components/map/mapContainer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
        
      <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">Contact Us</h2>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                required 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm"
                required 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
                rows="4" 
                required 
              />
            </div>
            <div className="flex justify-end">
              
              <button 
                type="submit" 
                className="inline-block bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white font-medium py-3 px-6 rounded-md shadow-sm transition duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">NGO Contact Details</h3>
            <p className="text-gray-700 mb-2">NGO Name Private Limited</p>
            <p className="text-gray-700 mb-2">City, State</p>
            <p className="text-gray-700 mb-2">100001</p>
            <p className="text-gray-700 mb-2">Email: example@expample.com</p>
            <p className="text-gray-700 mb-2">Phone: +91-1234567890</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
            <MapContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
