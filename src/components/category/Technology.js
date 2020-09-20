import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Technology = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.technology.map( (techno, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ techno.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ techno.author }</b></small> 
									<small>  { new Date(techno.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ techno.description } </h3>
								<br />
								<p className='text-muted text-left'>{ techno.content } </p>
								<img src={ techno.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default Technology;