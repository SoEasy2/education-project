import React from 'react';

const Component: React.FC = () => {
    return (
        <div>
            About page
        </div>
    );
};
const AboutPage = React.memo(Component)

export default AboutPage;