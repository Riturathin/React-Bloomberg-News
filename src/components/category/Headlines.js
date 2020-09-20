import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Headlines = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.headlines.map( (headline, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ headline.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ headline.author }</b></small> 
									<small>  { new Date(headline.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ headline.description } </h3>
								<br />
								<p className='text-muted text-left'>{ headline.content } </p>
								<img src={ headline.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default Headlines;