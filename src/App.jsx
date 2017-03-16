import React from 'react';
import ReactDOM from 'react-dom';

import './styles.scss';

function App() {
	return (
		<div>
			<h1>React!</h1>
		</div>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));