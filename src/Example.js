import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('init');

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <input onChange={(event) => setText(event.target.value)} />
        </div>
    );
}

export default Example;