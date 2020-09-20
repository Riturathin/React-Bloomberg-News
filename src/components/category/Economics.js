import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Economics = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.economics.map( (economy, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ economy.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ economy.author }</b></small> 
									<small>  { new Date(economy.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ economy.description } </h3>
								<br />
								<p className='text-muted text-left'>{ economy.content } </p>
								<img src={ economy.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default Economics;