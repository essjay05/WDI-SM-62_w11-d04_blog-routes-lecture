import React, { Component } from 'react';

export default class CreatePost extends Component {
    render () {
        return(
            <div>
                <h1> Create new post</h1>
                <button onClick={this.props.log}>Click here</button>
            </div>
        )
    }
}