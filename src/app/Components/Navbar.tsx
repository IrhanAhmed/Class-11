import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-black text-white py-6 px-6">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <h1 className="text-4xl font-bold">
          Irhan Khan
        </h1>

        {/* Navbar Details */}
        <div className="space-x-6">
          <span className="text-lg">Home</span>
          <span className="text-lg">About</span>
          <span className="text-lg">Services</span>
          <span className="text-lg">Contact</span>
        </div>
      </div>

      </div>
    
  );
};

export default Navbar;
