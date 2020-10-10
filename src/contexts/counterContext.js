import React, { useState } from 'react';

export const counterContext = React.createContext();


function CounterProvider(props) {

    const [time, setTime] = useState(0);
    const [profiles, setProfiles] = useState([{name: 'default', data: [{repeat: 3, time: 5}]}]);

    let keys = {time, setTime, profiles};

    return (
        <counterContext.Provider value={keys}>
            {props.children}
        </counterContext.Provider>
    )
}

export default CounterProvider;