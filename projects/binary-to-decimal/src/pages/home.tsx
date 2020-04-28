import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import styles from'./index.module.scss';

interface IState {
	binary: string,
	decimal: number,
	error: boolean
}

export default class Home extends Component<any, IState> {
	state: IState = {
		binary: '',
		decimal: 0,
		error: false
	}

	isValidDigit = (value: string) => {
		return (value.match(/[2-9]/) === null);
	}

	handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		this.setState({error: false});

		if (this.isValidDigit(event.target.value)) {
			return this.setState({binary: event.target.value});
		}

		return this.setState({error: true});
	}

	handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			this.generateDecimal();
		}
	}

	generateDecimal = () => {
		const revertedBinary = this.state.binary.split('').reverse().join('');

		let total = 0;

		this.setState({decimal: 0}, () => {
			for (let i = 0; i < revertedBinary.length; i++) {
				const binaryDigit: number = parseInt(revertedBinary[i]);
				total += (Math.pow(2, i) * binaryDigit);
			}

			this.setState({decimal: total});
		});
	}

	render() {
		return (
			<div className={styles.app}>
				<div className={styles.container}>
					<h1>Binary to decimal converter</h1>

					<input type="tel"
						   maxLength={8}
						   value={this.state.binary}
						   onChange={this.handleChange}
						   onKeyPress={this.handleKeyPress}/>

					{
						this.state.error
							? <span>Error: invalid binary</span>
							: ''
					}

					<button onClick={this.generateDecimal}>Convert</button>

					<p>Converted: {this.state.decimal}</p>
				</div>
			</div>
		);
	}
};
