import React, { useContext } from 'react';
import Card from './UI/Card';

import { FaEdit, FaTimes } from 'react-icons/fa';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackItem = ({ feedback }) => {
    const { onDelete, editFeedback } = useContext(FeedbackContext);

    const deleteHandler = () => {
        onDelete(feedback.id);
    };
    const editHandler = () => {
        editFeedback(feedback);
    };
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
            <button className="edit" onClick={editHandler}>
                <FaEdit color="black" />
            </button>
            <button className="close" onClick={deleteHandler}>
                <FaTimes color="purple" />
            </button>
            <div className="text-display">{feedback.text}</div>
        </Card>
    );
};

export default FeedbackItem;
