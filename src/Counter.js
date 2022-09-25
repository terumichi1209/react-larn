import React, { useState, useEffect } from 'react';

const userList = [
    { id: 1, name: 'Phoebe' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Ross' },
];

// apiで保存してる想定のモック
const countMock = [];

const execGetCountApiMock = userID => {
    return countMock[userID] ?? 0;
}

const execSetCountApiMock = (userID, count) => {
    countMock[userID] = count;
}

function Counter() {
    const [userID, setUserId] = useState(1);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
        setCount(execGetCountApiMock(userID));
    }, [userID]);

    const saveCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        execSetCountApiMock(userID, newCount);
    }
    
    return (
        <div>
            <div>
                <select
                    value={userID}
                    onChange={e => setUserId(Number(e.target.value))}
                >
                {userList.map(user => (
                    <option key={user.id} value={user.id}>
                        {user.name}
                    </option>
                ))}
                </select>
                <span>{` clicked ${count} times`}</span>
            </div>
            <div>
                <button onClick={() => saveCount()}>
                    Click me
                </button>
            </div>
        </div>
    );
}

export default Counter;