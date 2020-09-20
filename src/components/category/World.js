import React from 'react';
import { ListGroup } from 'react-bootstrap';

const World = props => {
	return (
		<div className='col-xs-12 col-md-8 offset-md-2'>
			<ListGroup>

				{ props.world_news.map( (world_news_item, index) => {
					return (
							<ListGroup.Item key={index}> 
								<h1 className='text-left'>{ world_news_item.title } </h1>
								<br/>

								<p className='text-left'>
									<span><b> | </b></span>
									<small><b>{ world_news_item.author }</b></small> 
									<small>  { new Date(world_news_item.publishedAt).toLocaleDateString() }</small> 
								</p>

								<br />
								<h3 className='text-muted text-left'>{ world_news_item.description } </h3>
								<br />
								<p className='text-muted text-left'>{ world_news_item.content } </p>
								<img src={ world_news_item.urlToImage } width='100%' />
							</ListGroup.Item>
					)
				})}
				
		 	</ListGroup>
		</div>
		)
}

export default World;