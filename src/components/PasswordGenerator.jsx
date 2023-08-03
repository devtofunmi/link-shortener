import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [copied, setCopied] = useState(false);

  const generatePassword = () => {

    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[{]}\\|;:'\",<.>/?";


    let characterSet = lowercaseLetters + uppercaseLetters;
    if (includeNumbers) characterSet += numbers;
    if (includeSymbols) characterSet += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
  };

   const highlightNumbers = (text) => {
     return text.split("").map((char, index) => (
       <span
         key={index}
         style={{ color: /\d/.test(char) ? "blue" : "inherit" }}
       >
         {char}
       </span>
     ));
   };


   const copyToClipboard = () => {
     navigator.clipboard.writeText(password).then(
       () => setCopied(true),
       (error) => console.error("Failed to copy password: " + error)
     );
     setTimeout(() => setCopied(false), 1000);
   };


  return (
    <div className=" text-white pt-10 flex flex-col justify-center">
      <h2 className="md:text-2xl  text-xl font-bold  text-center">
        Need a password? Try Password Generator.
      </h2>
      <p className="text-md text-center">
        Generate secure, random passwords to stay safe online.
      </p>
      <div className="mb-4 mt-10 font-bold">
        <label htmlFor="passwordLength" className="mr-2">
          Password Length: {length}
        </label>
        <input
          type="range"
          id="passwordLength"
          min="4"
          max="20"
          step="1"
          className="w-full"
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="mb-4 font-semibold">
        <input
          type="checkbox"
          id="includeNumbers"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
        />
        <label htmlFor="includeNumbers" className="ml-2">
          Include Numbers
        </label>
      </div>
      <div className="mb-4 font-semibold">
        <input
          type="checkbox"
          id="includeSymbols"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
        />
        <label htmlFor="includeSymbols" className="ml-2">
          Include Symbols
        </label>
      </div>
      <button
        className="bg-blue-500 text-white font-bold px-4 py-2 rounded"
        onClick={generatePassword}
      >
        Generate Password
      </button>
      <div className="mt-4">
        <strong>Generated Password:</strong>
        <div className="border text-lg p-5 mt-2 bg-white text-black rounded-md">
          {highlightNumbers(password)}
        </div>
        {copied && (
          <p className="text-[#0e263b] bg-[#aafccb] mt-2 text-center w-[250px] rounded-md font-bold">Password copied to clipboard!</p>
        )}
        <button
          className="mt-2 bg-blue-500 font-bold text-white px-4 py-2 rounded"
          onClick={copyToClipboard}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
};

export default PasswordGenerator;
