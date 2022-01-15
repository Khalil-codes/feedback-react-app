import React, { createContext, useState } from 'react';

const FeedbackContext = createContext();

const DUMMY_FEEDBACKS = [
    { id: 'f01', text: 'FeedBack One Context', rating: 9 },
    { id: 'f02', text: 'FeedBack Two Context', rating: 2 },
    { id: 'f03', text: 'FeedBack Three Context', rating: 6 },
    { id: 'f04', text: 'FeedBack Four Context', rating: 5 },
];

export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState(DUMMY_FEEDBACKS);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    });

    const onDeleteHandler = (id) => {
        setFeedbacks((prev) => prev.filter((item) => item.id !== id));
    };

    const onAddFeedback = (feedback) => {
        setFeedbacks((prev) => [feedback, ...prev]);
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        });
    };
    const updateFeedbackItem = (id, updatedItem) => {
        setFeedbacks((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, ...updatedItem } : item
            )
        );
        setFeedbackEdit({
            item: {},
            edit: false,
        });
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks: feedbacks,
                onDelete: onDeleteHandler,
                onAddFeedback: onAddFeedback,
                editFeedback: editFeedback,
                feedbackEdit: feedbackEdit,
                updateFeedbackItem: updateFeedbackItem,
            }}>
            {children}
        </FeedbackContext.Provider>
    );
};

export default FeedbackContext;
