import React from 'react';
import { ListGroup } from 'react-bootstrap';

const EuropeanFootball = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.european_football.map( (euro, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ euro.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ euro.author }</b></small> 
									<small>  { new Date(euro.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ euro.description } </h3>
								<br />
								<p className='text-muted text-left'>{ euro.content } </p>
								<img src={ euro.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default EuropeanFootball;