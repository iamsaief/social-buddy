import React from "react";
import {Box, Container} from "@material-ui/core";

const NotFound = () => {
	return (
		<Box py="2rem">
			<Container maxWidth="lg">
				<div style={{textAlign: "center"}} py="2.5rem">
					<h2 style={{padding: "20px 0"}}>404! Not Found</h2>
					<img src="https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif" alt="" />
				</div>
			</Container>
			=
		</Box>
	);
};

export default NotFound;
