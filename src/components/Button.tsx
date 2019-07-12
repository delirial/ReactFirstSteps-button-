import * as React from 'react';

//propiedades del Button
export interface ButtonProps {
	name: string;
}
//estados del Button
export interface ButtonStates {
	numberOfClicks: number;
}

export default class Button extends React.Component<ButtonProps, ButtonStates> {
	incrementCount() {
		this.setState({
			numberOfClicks: this.state.numberOfClicks + 1
		});
	}

	render() {
		return (
			<div>
				<button onClick={this.incrementCount}>
					{' '}
					{this.props.name}
					{this.state.numberOfClicks}{' '}
				</button>
			</div>
		);
	}
	constructor(props) {
		super(props);
		this.state = {
			numberOfClicks: 0
		};
	}
}
