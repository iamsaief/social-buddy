import React from "react";
import {AppBar, Toolbar, Grid, IconButton, Badge, Typography, makeStyles} from "@material-ui/core";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatIcon from "@material-ui/icons/Chat";
import MenuIcon from "@material-ui/icons/Menu";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
	alignCenter: {
		display: "flex",
		alignItems: "center",
	},
	linkStyle: {
		textDecoration: "none",
		color: "#fff",
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Grid container alignItems="center">
					<Grid item className={classes.alignCenter}>
						<IconButton>
							<MenuIcon />
						</IconButton>
						<Typography variant="h5">
							<Link to="/" className={classes.linkStyle}>
								Home
							</Link>
						</Typography>
					</Grid>
					<Grid item sm></Grid>
					<Grid item>
						<IconButton>
							<Badge color="secondary" badgeContent={1}>
								<NotificationsActiveIcon />
							</Badge>
						</IconButton>
						<IconButton>
							<ChatIcon />
						</IconButton>
						<IconButton>
							<AccountCircleIcon />
						</IconButton>
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
