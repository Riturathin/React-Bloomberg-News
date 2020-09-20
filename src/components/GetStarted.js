import React from 'react';
import { ListGroup , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GetStarted = props => {
	return (
		<div className='col-xs-12 col-md-2'>
			<ListGroup>
				<Link to='/home'>
					<Button className='btn btn-primary btn-lg'> Get Started </Button>
				</Link>
		 	</ListGroup>
		</div>
		)
}

export default GetStarted;