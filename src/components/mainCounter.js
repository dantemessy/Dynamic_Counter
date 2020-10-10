import React, { useContext, useState } from 'react';
import { counterContext } from "../contexts/counterContext.js";


function MainCounter() {

    let counterData = useContext(counterContext);
    const [screen, setScreen] = useState(counterData.profiles.map((profile, idx) => {
        return <li key={idx} onClick={e => handleClick(profile.data)}> {profile.name}</li>
    }));


    let handleClick = (data) => {
        setScreen(currentProfile(data));
    }

    let currentProfile = (profile) => profile.map((counter, idx) => {
        return <li key={idx}> {counter.time} X {counter.repeat} </li>
    })


    return (
        <div>
            {screen}
        </div>
    );
}

export default MainCounter;
