
import React, {useState, useEffect} from 'react';

type TimerProps = {
    enteredTime: number
}

const Timer = ({enteredTime}: TimerProps) => {

    const [present, setPresentTime] = useState(Math.floor(new Date().getTime()/1000.0));

    const setPresentTimeHandler = () => {
        setPresentTime(Math.floor(new Date().getTime()/1000.0));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setPresentTimeHandler();
          }, 1000);
        
          return () => clearInterval(interval);
    }, [])
    
    useEffect(() => {
        setPresentTimeHandler();
    }, [enteredTime])


    return <div>
        <p>Entered data: {enteredTime}</p>
        <p>Current time: {present}</p>
        {(enteredTime !== 0)?(((present-enteredTime) < 60) ? <p>{present-enteredTime} sec ago.</p> : <p>{Math.floor((present-enteredTime)/60)} min ago.</p>) : ''}
        
    </div>
}


export default Timer;