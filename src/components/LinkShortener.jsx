import React, { useState } from "react";

const LinkShortener = () => {
  const [originalLink, setOriginalLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");

  const handleShorten = () => {
    // Implement your link shortening logic here (e.g., using an API).
    // Update the shortenedLink state with the result.

   
  };

  return (
    <div className="p-4 shadow-lg">
      <h1 className="text-center text-gray-900 text-xl">
        Paste the URL to be shortened
      </h1>
      <div className="pt-3 flex items-center">
        <input
          type="text"
          className="w-full border p-4"
          placeholder="Enter your link here"
          value={originalLink}
          onChange={(e) => setOriginalLink(e.target.value)}
        />
        <button
          className=" px-4 py-4 bg-blue-500 text-white"
          onClick={handleShorten}
        >
          Shorten
        </button>
        {shortenedLink && (
          <div className="mt-4">
            <p>
              Shortened Link:
              <a
                className="text-blue-500 hover:underline"
                href={shortenedLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {shortenedLink}
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkShortener;
