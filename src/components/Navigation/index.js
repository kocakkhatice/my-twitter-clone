import React from "react";
import NavigationButton from "../NavigationButton";
import {
  Twitter,
  Home,
  Explore,
  Messages,
  Notification,
  Bookmark,
  Lists,
  Profile,
  More,
} from "../icons";
import TextTitle from "../TextTitle";
import style from "./styles.module.css";
function Navigation({ selectedNav }) {
  return (
    <nav className={style.nav}>
      <NavigationButton>
        <Twitter />
      </NavigationButton>

      <NavigationButton notify={8}  selected={selectedNav === "home"}>
        <Home />
        <TextTitle>Home</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedNav === "explore"}>
        <Explore />
        <TextTitle>Explore</TextTitle>
      </NavigationButton>

      <NavigationButton notify={8} selected={selectedNav === "notification"}>
        <Notification />
        <TextTitle>Notification</TextTitle>
      </NavigationButton>

      <NavigationButton notify={8} selected={selectedNav === "messages"}>
        <Messages />
        <TextTitle >Messages</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedNav === "bookmarks"}>
        <Bookmark />
        <TextTitle>Bookmarks</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedNav === "lists"}>
        <Lists />
        <TextTitle>Lists</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedNav === "profile"}>
        <Profile />
        <TextTitle>Profile</TextTitle>
      </NavigationButton>

      <NavigationButton selected={selectedNav === "more"}>
        <More />
        <TextTitle>More</TextTitle>
      </NavigationButton>
    </nav>
  );
}

export default Navigation;
