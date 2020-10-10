import React, { useContext, useState } from 'react';
import { counterContext } from "../contexts/counterContext.js";


function MainCounter() {

    let counterData = useContext(counterContext);
    console.log("MainCounter -> counterData", counterData)
    const [screen, setScreen] = useState(counterData.profiles.map((profile, idx) => {
        return <li key={idx} onClick={e => handleClick(profile)}> {profile.name}</li>
    }));

    let interval, isPaused;

    let handleClick = (profile) => {
        setScreen(currentProfile(profile));
    }

    let currentProfile = (profile) =>
        (counterData.setCurrentProfile(profile),
            profile.data.map((counter, idx) => {
                return <li key={idx}> {counter.time} X {counter.repeat} </li>
            }))

    let countDown = time => new Promise((rs, rj) =>
        interval = setInterval(() => {
            if (isPaused) {
                return rj('Paused');
            }
            counterData.setTime(time);
            if (time <= 0) {
                clearInterval(interval);
                rs();
            }
            console.log(time);
            time--;
        }, 1000));


    let run = async(countDownData) => {

            await countDown(countDownData.time);
            countDownData.repeat--
            if (countDownData.repeat !== 0) run(countDownData);
            return;
    }

    let main = async () => {

        counterData.currentProfile.data.forEach(element => {
            run(element)
        })

    }

    return (
        <div>
            <div>{counterData.time}</div>
            {screen}
            <button onClick={e => main()}> START</button>
        </div>
    );
}

export default MainCounter;
