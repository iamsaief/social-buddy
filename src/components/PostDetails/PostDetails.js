import React, {useState, useEffect} from "react";
import {Card, CardMedia, CardContent, Typography, makeStyles, Container, Box} from "@material-ui/core";
import {useParams} from "react-router-dom";
import CommentList from "../CommentList/CommentList";

const PostDetails = () => {
	// Find post using url parameter
	const {postId} = useParams();

	const [details, setDetails] = useState([]);
	const [comments, setComments] = useState([]);

	// Fetch and update post state
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setDetails(data));
	}, []);

	// Fetch and update comments state
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setComments(data));
	}, []);

	const useStyles = makeStyles({
		media: {
			height: 340,
		},
	});
	const classes = useStyles();

	return (
		<Box py="2.5rem">
			<Container maxWidth="lg">
				<Card>
					<CardMedia
						className={classes.media}
						image={`https://picsum.photos/id/${10 + details.id}/1280/720`}
						title="alt text"
					/>
					<CardContent>
						<Typography variant="h4" component="h3" gutterBottom>
							{details.title}
						</Typography>
						<Typography variant="body2" component="p" color="textSecondary">
							{details.body}
						</Typography>
					</CardContent>
				</Card>
				<CommentList comments={comments}></CommentList>
			</Container>
		</Box>
	);
};

export default PostDetails;
