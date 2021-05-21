   import React ,{Component} from 'react';
import CardList from '../components/CardList';

import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:''
		}

	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users => {
			this.setState({robots:users});
		})
	}


		
	
		onSearchChange = (event) => {
			this.setState({searchfield:event.target.value});	
	
	}

	render(){

		const{robot,searchfield}=this.state;

		const filteredRobots = robots.filter(robots=>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
			})	
		
	if (! robots.length){
		return <h1> LOADING !! </h1>
	
		}
		else{

		return(
		<div className='tc'>
		<h1 >ROBOFRIENDS</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll>
		<ErrorBoundary>
		<CardList robots={filteredRobots}/>
		</ErrorBoundary>
		</Scroll>
		</div>
		);
	}


   }
}


export default App;