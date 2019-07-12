import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './components/Hello';
import Button from './components/Button';

ReactDOM.render(
	<div>
		<Hello name="World" />
		<Button name="Contador:" />
	</div>,
	document.getElementById('app')
);
