import { useEffect, useState } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);

	console.log("i run all the time");

	// component가 생성되는 첫 시작점에서만 코드가 실행되도록 하기
	useEffect(() => {
		console.log("I run only once");
	}, []);

	// keyword가 변할 때만 코드가 실행되도록 하기
	useEffect(() => {
		if (keyword !== "" && keyword.length > 5) {
			console.log("SEARCH FOR", keyword);
		}
	}, [keyword]);

	return (
		<div>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>click me</button>
		</div>
	);
}

export default App;
