import React, { Component } from 'react';
import Layout from './components/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import PostsContainer from './components/PostsContainer';
import CreatePost from './components/CreatePost';


export default class App extends Component {
    state = {
        loggedIn: true,
    }

    log = () => { console.log("Invoked"); }

	render () {
		return (
		<Layout>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={PostsContainer}/>
                <Route path="/create" render={props => {
                    return <CreatePost {...props} log={this.log}/>
                }}/>
                
            </Switch>
		</Layout>
		)
	}
}