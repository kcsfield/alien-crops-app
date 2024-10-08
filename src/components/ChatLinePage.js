import React, { useState } from 'react';

const FOREST_GREEN = '#228B22';
const DEEP_ORANGE = '#FF8C00';

const ChatLinePage = () => {
  const [message, setMessage] = useState('');
  const [fileUpload, setFileUpload] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the message and file to your backend
    console.log('Message:', message);
    console.log('File:', fileUpload);
    setMessage('');
    setFileUpload(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center" style={{ color: FOREST_GREEN }}>
        Expert Chat Line
      </h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2" style={{ color: DEEP_ORANGE }}>
            Chat with Experts
          </h3>
          <p>
            Connect with our alien farming experts via chat or video call. Get real-time advice on your extraterrestrial crops!
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2" style={{ color: DEEP_ORANGE }}>
            Send Samples for Analysis
          </h3>
          <p>
            Upload photos of your crops, soil samples, or pest specimens for expert analysis and tailored solutions.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message or question here..."
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
            rows="4"
          ></textarea>
          <div className="flex items-center justify-between">
            <input
              type="file"
              onChange={(e) => setFileUpload(e.target.files[0])}
              className="text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded text-white"
              style={{ backgroundColor: DEEP_ORANGE }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatLinePage;
