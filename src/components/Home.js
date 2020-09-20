import React from 'react';
import { ListGroup } from 'react-bootstrap';
import GetStarted from './GetStarted';
const Home = props => {
    return (
        <div className="App container-fluid">
          <div className='app-bkgnd'></div>
            <br />
            <br />
            <br />
            <h1 style={{ fontSize: '6rem' }} className='text-left'>Welcome to React-Bloomberg</h1>
            <br />
            <br />
            <h3 className='text-left' style={{ fontSize: '4rem' }}>The ultimate world of News Media that covers up everything ,
              right from business, to economics , to sports to space. In short, the end-to-end solution to 
              information right on the fingertips
            </h3>
            <br />
            <br />
            <GetStarted />
            <br />
            <br />
           <br />
       </div>
     )
}

export default Home;
