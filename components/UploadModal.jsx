// components/UploadModal.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UploadModal({ isOpen, onClose }) {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!file) {
      alert('Please select a file first.');
      return;
    }

    setIsUploading(true);
    setProgress(0);

    // Simulated upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            alert('✨ Your memory has been uploaded successfully!');
            onClose();
          }, 800);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-black p-[2px] rounded-3xl shadow-[0_0_25px_rgba(99,102,241,0.4)] w-[90%] max-w-lg"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
          >
            <div className="bg-gray-950 rounded-3xl p-8 text-center text-gray-100 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_70%)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />

              <h2 className="text-2xl font-bold mb-6 text-indigo-400">
                Upload Your Memory
              </h2>

              <label
                htmlFor="file-upload"
                className={`cursor-pointer block border-2 border-dashed ${
                  file ? 'border-indigo-500 bg-indigo-500/10' : 'border-gray-600'
                } p-10 rounded-2xl hover:border-indigo-400 transition relative`}
              >
                {file ? (
                  <span className="text-indigo-300 font-medium">
                    {file.name}
                  </span>
                ) : (
                  <span className="text-gray-400">
                    Click to upload or drag & drop your memory
                  </span>
                )}
                <input
                  id="file-upload"
                  type="file"
                  accept="image/*,video/*"
                  onChange={handleUpload}
                  className="hidden"
                />
              </label>

              {isUploading && (
                <div className="mt-8 w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-3 bg-indigo-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: 'easeInOut', duration: 0.3 }}
                  />
                  <p className="text-sm text-gray-400 mt-2">
                    Uploading... {progress}%
                  </p>
                </div>
              )}

              <div className="flex justify-between mt-10">
                <button
                  onClick={onClose}
                  disabled={isUploading}
                  className="px-5 py-2.5 bg-gray-800 rounded-xl hover:bg-gray-700 transition text-gray-300 disabled:opacity-40"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={isUploading}
                  className="px-5 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl hover:opacity-90 transition text-white font-semibold disabled:opacity-40"
                >
                  {isUploading ? 'Uploading...' : 'Upload'}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
