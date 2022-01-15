import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/UI/Card';

const About = () => {
    return (
        <Card>
            <h1>About Section</h1>
            <p>
                <Link to={'/'}>Back to Home</Link>
            </p>
        </Card>
    );
};

export default About;
