// components/UploadModal.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UploadModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      alert(`Uploading: ${file.name}`);
      onClose();
    } else {
      alert('Please select a file first.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md text-center relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Upload Your Memory</h2>
            <label
              htmlFor="file-upload"
              className="cursor-pointer block border-2 border-dashed border-gray-300 p-8 rounded-xl hover:border-indigo-500 transition"
            >
              {file ? (
                <span className="text-gray-700 font-medium">{file.name}</span>
              ) : (
                <span className="text-gray-500">Click to upload or drag & drop</span>
              )}
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                onChange={handleUpload}
                className="hidden"
              />
            </label>

            <div className="flex justify-between mt-8">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                Upload
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
