import React , { useState , useEffect } from 'react';
import { Nav, ListGroup } from 'react-bootstrap';
import Business from './category/Business';
import Headlines from './category/Headlines';
import Technology from './category/Technology';
import Sports from './category/Sports';
import Economics from './category/Economics';
import World from './category/World';
import Header from './common/Header';
import EuropeanFootball from './category/EuropeanFootball';


const API_KEY = '8b449337ff434ba9b6455e2341c4a4a6';

const Resources = props => {
	const [ resources ,  setResources ] = useState('Home');
	const [ articles ,  setArticles ] = useState([]);
	const [ headlines ,  setHeadlines ] = useState([]);
	const [ technology ,  setTechnology ] = useState([]);
	const [ sports ,  setSports ] = useState([]);
	const [ economics ,  setEconomics ] = useState([]);
	const [ world_news ,  setWorldnews ] = useState([]);
	const [ european_football ,  setEuropeanFootball ] = useState([]);

	useEffect(() => {

		function getBusiness() {
			fetch(`https://newsapi.org/v2/everything?q=business&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( articles => setArticles(articles.articles) )
		}

		function getHeadlines() {
			fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( headlines => setHeadlines(headlines.articles) )
		}

		function getTechnology() {
			fetch(`https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( technology => setTechnology(technology.articles) )
		}

		function getSports() {
			fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( sports => setSports(sports.articles) )
		}

		function getEconomy() {
			fetch(`https://newsapi.org/v2/everything?q=economy&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( economics => setEconomics(economics.articles) )
		}

		function getWorld() {
			fetch(`https://newsapi.org/v2/everything?q=world&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( world_news => setWorldnews(world_news.articles) )
		}


		function getEuropeanFootball() {
			debugger
			fetch(`https://newsapi.org/v2/everything?q=european-football&apiKey=${API_KEY}`)
				.then( response => response.json())
					.then( european_football => setEuropeanFootball(european_football.articles) )
		}


		switch (resources) {
			case "Home" :
			  getHeadlines();
			  break;

			case "Business" :
			  getBusiness();
			  break;

			case "Tech" :
			  getTechnology();
			  break;

			case "Sports" :
			  getSports();
			  break;

			case "Economy" :
			  getEconomy();
			  break;

			case "World" :
			  getWorld();
			  break;

			case "european_football" :
			  getEuropeanFootball();
			  break;

			default:
				console.log( 'Home')
				break;
		}
		
	})

	return (
		<div className='ResourcesTabs container-fluid' >
			<Header />
			<br />
			<br />
			<Nav variant="pills justify-content-center" defaultActiveKey="/">
			  <Nav.Item>
			    <Nav.Link eventKey="/" onClick={ () => setResources('Home')}>Home</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link  eventKey="business" onClick={ () => setResources('Business')}>Business</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link  eventKey="sports" onClick={ () => setResources('Sports')}>Sports</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link  eventKey="economy" onClick={ () => setResources('Economy')}>Economy</Nav.Link>
			  </Nav.Item>
			  <Nav.Item>
			    <Nav.Link  eventKey="technology" onClick={ () => setResources('Tech')}>Science & Tech</Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
			    <Nav.Link  eventKey="world" onClick={ () => setResources('World')}>World</Nav.Link>
			  </Nav.Item>

			  <Nav.Item>
			    <Nav.Link  eventKey="european-football" onClick={ () => setResources('european_football')}>European Football</Nav.Link>
			  </Nav.Item>

			</Nav>
			<br />
			<br />
			<hr />
			<br />

			<h1 className='text-center text-muted'>{ resources }</h1>
			<br/>
			{ resources === 'Home' && <Headlines headlines={ headlines}/> }
			{ resources === 'Business' && <Business articles={ articles}/> }
			{ resources === 'Tech' && <Technology technology={ technology}/> }
			{ resources === 'Sports' && <Sports sports={ sports}/> }
			{ resources === 'Economy' && <Economics economics={ economics}/> }
			{ resources === 'World' && <World world_news={ world_news}/> }
			{ resources === 'european_football' && <EuropeanFootball european_football={ european_football}/> }

		</div>
	)
}

export default Resources;