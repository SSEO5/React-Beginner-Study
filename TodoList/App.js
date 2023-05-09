import { useState } from "react";

function App() {
	const [Todo, setTodo] = useState("");
	const [Todos, setTodos] = useState([]);
	const onChange = (event) => setTodo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (Todo === "") {
			return;
		}
		setTodos((currentArray) => [Todo, ...currentArray]);
		setTodo("");
	};
	return (
		<div>
			<h1>My To-do List ({Todos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					value={Todo}
					onChange={onChange}
					type="text"
					placeholder="Write your to do"
				/>
				<button>Add to do</button>
			</form>
			<hr />
			<ul>
				{Todos.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
