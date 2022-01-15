import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
    // Use Context for Global State
    const { feedbacks } = useContext(FeedbackContext);

    // Calculating Feedback Average
    const averge = (arr) => {
        if (feedbacks.length === 0) return 0;
        return (arr.reduce((a, b) => a + b.rating, 0) / arr.length).toFixed(1);
    };

    // Default Return
    return (
        <div className="feedback-stats">
            <h4>{feedbacks.length} Feedbacks</h4>
            <h4>Average Rating {averge(feedbacks)}</h4>
        </div>
    );
};

export default FeedbackStats;
