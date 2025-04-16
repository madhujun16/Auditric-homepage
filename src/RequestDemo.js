import React, { useState } from "react";
import axios from "axios";

const RequestDemo = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async () => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxs4Iq2rFQEBCswCh-Og86pVDd0Y-xG0r7lOL2xHIrlZ7FIlMF1rlRZItG4jgESHGI9/exec";

    try {
      await axios.post(scriptURL, formData);
      alert("✅ Demo request submitted!");
      setFormData({ name: "", email: "", message: "" });
      setOpen(false);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("❌ Failed to submit. Please try again.");
    }
  };

  return (
    <>
      <button
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        onClick={() => setOpen(true)}
      >
        Request a Demo
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Request a Demo</h2>
            <input
              className="w-full p-2 mb-3 border rounded"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              className="w-full p-2 mb-3 border rounded"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <textarea
              className="w-full p-2 mb-3 border rounded"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RequestDemo;
