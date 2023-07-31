import React from 'react'
import "./App.css";
import LinkShortener from './components/LinkShortener';
const App = () => {
  return (
    <div className="flex justify-center  h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center mt-20 text-blue-500">Link Shortener</h1>
        <LinkShortener />
      </div>
    </div>
  );
}

export default App

