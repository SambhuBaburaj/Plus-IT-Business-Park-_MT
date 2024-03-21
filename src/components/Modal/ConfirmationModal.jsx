import React from 'react';
import { motion } from 'framer-motion';

const ConfirmationPopup = ({ isOpen, onClose, DeactivateAccound }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-lg font-bold mb-4">Confirm Action</h2>
            <p className="mb-4">Are you sure you want to proceed?</p>
            <div className="flex justify-end">
              <button
                onClick={()=>onClose(false)}
                className="mr-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={DeactivateAccound}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ConfirmationPopup;
