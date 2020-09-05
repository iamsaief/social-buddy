import React from "react";
import {ListItem, Avatar, ListItemAvatar, ListItemText, Typography, Divider} from "@material-ui/core";

const Comment = (props) => {
	const {comment} = props;
	return (
		<>
			<ListItem alignItems="flex-start" key={comment.id}>
				<ListItemAvatar>
					<Avatar src={`https://randomuser.me/api/portraits/women/${comment.id}.jpg`} alt="" />
				</ListItemAvatar>
				<ListItemText
					primary={comment.name}
					secondary={
						<>
							<Typography component="span" variant="body2" color="textPrimary">
								{comment.email}
							</Typography>
							{` — ${comment.body}`}
						</>
					}
				></ListItemText>
			</ListItem>
			<Divider variant="inset" />
		</>
	);
};

export default Comment;
