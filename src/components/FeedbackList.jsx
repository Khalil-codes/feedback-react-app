// Main Input
import React, { useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Component Imports
import FeedbackItem from './FeedbackItem';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
    // Use Context for Global State
    const { feedbacks } = useContext(FeedbackContext);

    // Checking if Length of Feedback is Zero
    if (!feedbacks || feedbacks.length === 0)
        return (
            <h4 style={{ textAlign: 'center', marginTop: '20px' }}>
                No feedbacks
            </h4>
        );

    // Default Return
    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedbacks.map((feedback) => (
                    <motion.div
                        key={feedback.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default FeedbackList;
