import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Business = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.articles.map( (article, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ article.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ article.author }</b></small> 
									<small>  { new Date(article.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ article.description } </h3>
								<br />
								<p className='text-muted text-left'>{ article.content } </p>
								<img src={ article.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default Business;