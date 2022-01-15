import React, { useContext, useState, useEffect } from 'react';
import Card from './UI/Card';
import Button from './UI/Button';
import FeedbackRating from './FeedbackRating';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
    // Context State
    const { onAddFeedback, feedbackEdit, updateFeedbackItem } =
        useContext(FeedbackContext);
    // States
    const [inputText, setinputText] = useState('');
    const [rating, setRating] = useState(10);
    const [isDisabled, setIsDisabled] = useState(true);
    const [errorMsg, setErrMsg] = useState('');

    // Using useEffect to show edit items in form:
    useEffect(() => {
        if (feedbackEdit.edit === true) {
            setinputText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating.toString());
            setIsDisabled(false);
        }
    }, [feedbackEdit]);

    // Validating and changing state
    const inputTextHandler = (e) => {
        if (inputText === '') {
            setIsDisabled(true);
            setErrMsg(null);
        } else if (inputText !== 0 && inputText.trim().length <= 10) {
            setErrMsg(`Input Should be minimum 10 Characters`);
            setIsDisabled(true);
        } else {
            setErrMsg('');
            setIsDisabled(false);
        }
        setinputText(e.target.value);
    };
    // Adding Feedback to global State
    const addFeedbackHandler = (e) => {
        e.preventDefault();
        if (feedbackEdit.edit) {
            updateFeedbackItem(feedbackEdit.item.id, {
                text: inputText,
                rating: rating,
            });
        } else {
            onAddFeedback({
                text: inputText,
                id: uuidv4(),
                rating: rating,
            });
        }
        setinputText('');
    };
    return (
        <Card>
            <form onSubmit={addFeedbackHandler}>
                <h2>Please rate us:</h2>
                <FeedbackRating select={setRating} />
                <div className="input-group">
                    <input
                        type="text"
                        value={inputText}
                        placeholder="Give your Valuable Feedback!"
                        onChange={inputTextHandler}
                        autoFocus={true}
                    />
                    <Button
                        type="submit"
                        mode="primary"
                        isDisabled={isDisabled}>
                        Send
                    </Button>
                </div>
                {errorMsg && <div className="message">{errorMsg}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
