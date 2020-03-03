import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'

class Home extends Component {
	state = {
		posts: null
	}

	componentDidMount() {
		axios
			.get('/posts')
			.then(res => {
				console.log(res.data)
				this.setState({
					posts: res.data
				})
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		let recentPostsMarkup = this.state.posts ? this.state.posts.map(post => <p>{post.body}</p>) : <p>Loading...</p>

		return (
			<Grid container spacing={16}>
				<Grid item sm={8} xs={12}>
					{recentPostsMarkup}
				</Grid>
				<Grid item sm={4} xs={12}>
					<p>Profile</p>
				</Grid>
			</Grid>
		)
	}
}

export default Home
