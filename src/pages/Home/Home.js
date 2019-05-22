import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
			lista:[]
		};
	}
	// https://jsonplaceholder.typicode.com/posts
	componentDidMount() {
		/*
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(r => r.json())
			.then(json => {
				this.setState({lista:json});
			});
		*/

		let corpo = {
			title:'Meu post novo',
			body:'Conteúdo do post para testes',
			userId:'1'
		};

		fetch('https://jsonplaceholder.typicode.com/posts', {
			method:'POST',
			body:JSON.stringify(corpo),
			headers:{
				"Content-type":"application/json;charset=UTF-8"
			}
		})
		.then(r => r.json())
		.then(json => {
			console.log(json);
		})
	}

	render() {
		return (
			<div>
				<h3>Página Home...</h3>
				<div>
					{this.state.lista.length == 0 &&
						<i>Carregando...</i>
					}
						{this.state.lista.length > 0 &&
						<ul>
							{this.state.lista.map((item)=>{
								return (
									<li># {item.id} - {item.title}</li>
								);
							})}
						</ul>
					}
				</div>
				<br/>
				<Link to="/sobre">Ir para página sobre</Link>
			</div>
		);
	}

}