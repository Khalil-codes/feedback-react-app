// Main Imports
import React from 'react';

// Component Import
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
    return (
        <FeedbackProvider>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </FeedbackProvider>
    );
};

export default App;
