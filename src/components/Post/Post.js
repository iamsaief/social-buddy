import React from "react";
import {
	Card,
	CardActionArea,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
	Button,
	makeStyles,
} from "@material-ui/core";
import {Link} from "react-router-dom";

const Post = (props) => {
	const {id, title, body} = props.post;

	const useStyles = makeStyles({
		media: {
			height: 120,
		},
		linkStyle: {
			textDecoration: "none",
		},
	});
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<Link to={`/post/${id}`}>
					<CardMedia
						className={classes.media}
						image={`https://picsum.photos/id/${10 + id}/1280/720`}
						title="alt text"
					/>
				</Link>
				<CardContent>
					<Typography variant="h6" component="h5">
						{title}
					</Typography>
					<Typography variant="body2" component="p" color="textSecondary">
						{body}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Link to={`/post/${id}`} className={classes.linkStyle}>
					<Button size="small" color="primary">
						Learn More ...
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
};

export default Post;
