import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sports = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.sports.map( (sport, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ sport.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ sport.author }</b></small> 
									<small>  { new Date(sport.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ sport.description } </h3>
								<br />
								<p className='text-muted text-left'>{ sport.content } </p>
								<img src={ sport.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default Sports;