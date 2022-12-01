import Timer from "./components/Timer.tsx";
import React, { useState } from "react";

function App() {

	const [number, setNumber] = React.useState(0);
	const [lastSeen, setLastSeen] = useState(0);

	const setNumberHandler = (val) => {
		setNumber(val);
	}

	const submitHandler = () => {
		setLastSeen(number);
	}

	return (
		<div className="app">
			<input type='number' onInput={e => setNumberHandler(e.target.value)} min='0'></input>
			<button onClick={submitHandler} value='Submit'>Click</button>
			<Timer enteredTime={Number(lastSeen)} />
		</div>
	);
}

export default App;
