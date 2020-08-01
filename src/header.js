import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import YouTubeIcon from "@material-ui/icons/YouTube";

import DehazeIcon from "@material-ui/icons/Dehaze";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";

import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import HistoryIcon from "@material-ui/icons/History";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import Avatar from "@material-ui/core/Avatar";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

import SettingsIcon from "@material-ui/icons/Settings";
import FlagIcon from "@material-ui/icons/Flag";
import HelpIcon from "@material-ui/icons/Help";
import FeedbackIcon from "@material-ui/icons/Feedback";

import Recomendation from "./Recomendations";
import Tile from "./Components/Tile";

import "./header.css";
import Home from "./Home";
import Trending from "./Trending";
import History from "./History";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Subcriptions from "./Subscriptions";
import Library from "./Library";
import WatchLater from "./WatchLater";
import LikedVideos from "./LikedVideos";

const list1 = [
  {
    name: "CarryMinati",
    url:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Tanmay Bhat",
    url: "https://yt3.ggpht.com/a/AATXAJx1ZKAP8wnYy736KMxvYegRzyZmelFEbPHrI8VZIg=s144-c-k-c0xffffffff-no-rj-mo"
  },
  {
    name: "Miniature Automobiles",
    url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRVQMNmZMrkFy_AZpGnkGWiSG5Fakn86-0Sag&usqp=CAU",
  },
  {
    name: "Raghav Chaitanya",
    url:
      "https://yt3.ggpht.com/a/AATXAJzF6AgCnAdzYSJxYPEPOduELVVf4Q84uvGp0h59fA=s144-c-k-c0xffffffff-no-rj-mo",
  },
];

const list2 = [
  {
    name: "Amazon Prime Video",
    url:
      "https://www.macobserver.com/wp-content/uploads/2020/04/workheader-amazon-prime-video.jpg",
  },
  
  {
    name: "Bhangra Empire",
    url:
      "data:image/jpeg;base64,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",
  },
  {
    name: "BFunk",
    url:
      "https://res06.bignox.com/noxinfluencer/youtube/avatar/69daba309f3f6843ffbddc559431e4f0.png",
  },
  {
    name: "Snooker Planet",
    url:
      "https://external-preview.redd.it/sIw35oI2NENHqvkWssaO0KONLUJjqvOMrNJjHoWyWVc.jpg?auto=webp&s=5eaddb242b3c6f7c91915feaa6284264e5cbd75e",
  },
  {
    name: "The Square to Spare",
    url:
      "https://i.ytimg.com/vi/3jApWYb09rY/hqdefault.jpg?sqp=-oaymwEjCPYBEIoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCK52cgIuvldcIrTsMVAKfpqTCEcw",
  },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    minHeight: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  menuButton: {
    color: "#606060",
  },
  youtubeIcon: {
    color: "red",
  },
  youtubeIconContainer: {
    padding: 0,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(3),
  },
  iconContainer: {
    padding: "15px",
  },
  icon: {
    color: "#606060",
  },
  searchField: {
    height: "30px",
  },
  searchIcon: {},
  searchIconContainer: {
    backgroundColor: "#d3d3d3",
    borderRadius: "0px",
    maxHeight: "30px",
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [showMore, setShowMore] = React.useState(false);
  const [selected, setSelected] = React.useState(["home"]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSelected = (id) => {
    setSelected([id]);
  };

  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpen(!open)}
              edge="start"
              className={clsx(classes.menuButton)}
            >
              <MenuIcon />
            </IconButton>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <IconButton className={clsx(classes.youtubeIconContainer)}>
                <YouTubeIcon className={clsx(classes.youtubeIcon)} />
                <h3 className="header__yt">YouTube</h3>
              </IconButton>
            </Link>
          </Toolbar>
          <Toolbar>
            <input placeholder="Search" className="header__searchField" />
            <IconButton className="header__searchIconContainer">
              <SearchIcon className={clsx(classes.searchIcon)} />
            </IconButton>
          </Toolbar>
          <Toolbar>
            <IconButton className={clsx(classes.iconContainer)}>
              <VideoCallIcon className={clsx(classes.icon)} />
            </IconButton>
            <IconButton className={clsx(classes.iconContainer)}>
              <AppsIcon className={clsx(classes.icon)} />
            </IconButton>
            <IconButton className={clsx(classes.iconContainer)}>
              <NotificationsIcon className={clsx(classes.icon)} />
            </IconButton>
            <Avatar className="header__user"/>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />

          <List className="header__list">
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem
                button
                className={`${
                  selected.indexOf("home") > -1 ? "header__selected" : ""
                }`}
                onClick={() => setSelected(["home"])}
              >
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link
              to="/trending"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                button
                className={`${
                  selected.indexOf("trending") > -1 ? "header__selected" : ""
                }`}
                onClick={() => setSelected(["trending"])}
              >
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                <ListItemText primary="Trending" />
              </ListItem>
            </Link>
            <Link
              to="/subscriptions"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ListItem
                button
                className={`${
                  selected.indexOf("subscriptions") > -1
                    ? "header__selected"
                    : ""
                }`}
                onClick={() => setSelected(["subscriptions"])}
              >
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                <ListItemText primary="Subscriptions" />
              </ListItem>
            </Link>
            {!open && (
              <Link
                to="/library"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem
                  button
                  className={`${
                    selected.indexOf("library") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["library"])}
                >
                  <ListItemIcon>
                    <VideoLibraryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Library" />
                </ListItem>
              </Link>
            )}
          </List>
          <Divider />
          {open && (
            <List className="header__list">
              {open && (
                <Link
                  to="/library"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <ListItem
                    button
                    className={`${
                      selected.indexOf("library") > -1 ? "header__selected" : ""
                    }`}
                    onClick={() => setSelected(["library"])}
                  >
                    <ListItemIcon>
                      <VideoLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Library" />
                  </ListItem>
                </Link>
              )}
              <Link
                to="/history"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem
                  button
                  className={`${
                    selected.indexOf("history") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["history"])}
                >
                  <ListItemIcon>
                    <HistoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="History" />
                </ListItem>
              </Link>
              <Link
                to="/watchLater"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem
                  button
                  className={`${
                    selected.indexOf("later") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["later"])}
                >
                  <ListItemIcon>
                    <WatchLaterIcon />
                  </ListItemIcon>
                  <ListItemText primary="Watch Later" />
                </ListItem>
              </Link>
              <Link
                to="/likedVideos"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem
                  button
                  className={`${
                    selected.indexOf("liked") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["liked"])}
                >
                  <ListItemIcon>
                    <ThumbUpAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Liked Videos" />
                </ListItem>
              </Link>
            </List>
          )}
          {open && (
            <div>
              <Divider />
              <h3 className="header__subscriptionsHeading">Subscriptions</h3>
              <List className="header__list">
                {list1.map((item, index) => (
                  <ListItem
                    button
                    key={index}
                    className={`${
                      selected.indexOf(item.name) > -1 ? "header__selected" : ""
                    }`}
                    onClick={() => setSelected([item.name])}
                  >
                    <ListItemIcon>
                      <Avatar alt={item.name} src={item.url} />
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItem>
                ))}

                {!showMore && (
                  <div>
                    <IconButton
                      className="header__showLink"
                      onClick={() => setShowMore(true)}
                    >
                      <ExpandMoreIcon className={clsx(classes.icon)} />
                      <a>Show More</a>
                    </IconButton>
                  </div>
                )}

                {showMore &&
                  list2.map((item, index) => (
                    <ListItem
                      button
                      key={index}
                      className={`${
                        selected.indexOf(item.name) > -1
                          ? "header__selected"
                          : ""
                      }`}
                      onClick={() => setSelected([item.name])}
                    >
                      <ListItemIcon>
                        <Avatar alt={item.name} src={item.url} />
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                {showMore && (
                  <div>
                    <IconButton
                      className="header__showLink"
                      onClick={() => setShowMore(false)}
                    >
                      <ExpandLessIcon className={clsx(classes.icon)} />
                      <a>Show Less</a>
                    </IconButton>
                  </div>
                )}
              </List>
              <Divider />
              <List className="header__list">
                <ListItem
                  button
                  className={`${
                    selected.indexOf("premium") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["premium"])}
                >
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText primary="YouTube Premium" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("movies") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["movies"])}
                >
                  <ListItemIcon>
                    <LocalMoviesIcon />
                  </ListItemIcon>
                  <ListItemText primary="Movies" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("gaming") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["gaming"])}
                >
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gaming" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("live") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["live"])}
                >
                  <ListItemIcon>
                    <RssFeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Live" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("learning") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["learning"])}
                >
                  <ListItemIcon>
                    <EmojiObjectsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Learning" />
                </ListItem>
              </List>
              <Divider />
              <List className="header__list">
                <ListItem
                  button
                  className={`${
                    selected.indexOf("settings") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["settings"])}
                >
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Settings" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("report") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["report"])}
                >
                  <ListItemIcon>
                    <FlagIcon />
                  </ListItemIcon>
                  <ListItemText primary="Report history" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("help") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["help"])}
                >
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Help" />
                </ListItem>
                <ListItem
                  button
                  className={`${
                    selected.indexOf("feedback") > -1 ? "header__selected" : ""
                  }`}
                  onClick={() => setSelected(["feedback"])}
                >
                  <ListItemIcon>
                    <FeedbackIcon />
                  </ListItemIcon>
                  <ListItemText primary="Send feedback" />
                </ListItem>
              </List>
            </div>
          )}
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar}></div>
          <Divider />

          <Switch>
            <Route path="/trending">
              <Divider />
              <Trending />
            </Route>
            <Route path="/subscriptions">
              <Divider />
              <Subcriptions />
            </Route>
            <Route path="/library">
              <Divider />
              <Library />
            </Route>
            <Route path="/history">
              <Divider />
              <History />
            </Route>
            <Route path="/watchLater">
              <Divider />
              <WatchLater/>
            </Route>
            <Route path="/likedVideos">
              <Divider />
              <LikedVideos/>
            </Route>
            <Route path="/">
              <div
                className="recomm__container"
                style={{ width: `${open ? "84vw" : "94vw"}` }}
              >
                <Recomendation />
              </div>

              <Divider />
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}
