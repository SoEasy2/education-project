import React from 'react';

const Component: React.FC = () => {
    return (
        <div>
            Main page
        </div>
    );
};
const MainPage = React.memo(Component)

export default MainPage;