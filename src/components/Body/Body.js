import React, {useState, useEffect} from "react";
import Post from "../Post/Post";
import {Grid, Container, Box, GridList, makeStyles} from "@material-ui/core";

const Body = () => {
	// Fetch post and store it on state
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		const url = "https://jsonplaceholder.typicode.com/posts/";
		fetch(url)
			.then((res) => res.json())
			.then((data) => setPosts(data.slice(0, 20)));
	}, []);

	const useStyles = makeStyles({
		wrapper: {
			display: "grid",
			gridGap: "15px",
			gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
			gridTemplateRows: "max-content",
			gridAutoFlow: "dense",
		},
		item: {},
	});
	const classes = useStyles();

	return (
		<Box py="2.5rem">
			<Container maxWidth="lg">
				{/* <Grid container spacing={3} justify="center">
					{posts.map((post) => (
						<Grid item sm={4} key={post.id}>
							<Post post={post}></Post>
						</Grid>
					))}
				</Grid> */}
				<div className={classes.wrapper}>
					{posts.map((post) => (
						<div key={post.id} className={classes.item}>
							<Post post={post}></Post>
						</div>
					))}
				</div>
			</Container>
		</Box>
	);
};

export default Body;
