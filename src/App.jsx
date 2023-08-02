import React from 'react'
import "./App.css";
// import LinkShortener from './components/LinkShortener';
import PasswordGenerator from './components/PasswordGenerator';
const App = () => {
  return (
    <div className="flex justify-center  h-screen bg-[#132e4d]">
      <div className="w-11/12 md:w-2/4">
        {/* <h1 className="text-3xl font-bold mb-4 text-center mt-20 text-blue-500">Create strong paswords with password generator</h1> */}
        {/* <LinkShortener /> */}
        <PasswordGenerator />
      </div>
    </div>
  );
}

export default App

