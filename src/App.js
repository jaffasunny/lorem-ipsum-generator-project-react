import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(0);
	const [text, setText] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
	};

	return (
		<section className="section-center">
			<h3>tired of boring lorem ipsum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Paragraphs:</label>
				<input
					onChange={(e) => setCount(e.target.value)}
					type="number"
					name="amount"
					id="amount"
					value={count}
				/>
				<button type="submit" className="btn">
					generate
				</button>
			</form>
			<article className="lorem-text">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
					voluptatem?
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque,
					voluptatem?
				</p>
			</article>
		</section>
	);
}

export default App;
