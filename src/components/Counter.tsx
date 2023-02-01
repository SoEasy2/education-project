import React, { useState } from 'react';
import styles from './Counter.module.scss';
const Component: React.FC = () => {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <button className={styles.counter} onClick={() => setCount(prev => prev + 1)}>
                { count }
            </button>
        </div>
    );
};
const Counter = React.memo(Component)

export { Counter };