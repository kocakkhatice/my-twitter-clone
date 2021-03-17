import React from "react";
import cn from "classnames";
import style from "./styles.module.css";
import Navigation from "../components/Navigation";
import TweetButton from "../components/TweetButton";
import ProfileBox from "../components/ProfileBox";

function Sidebar({ flat }) {
  return (
    <div className={cn(style.sidebar)}>
      <Navigation flat={flat} />
      <div className={style.tweetButton}>
        <TweetButton bigButton full={!flat}>
          {flat ? "a" : "Tweet"}
        </TweetButton>

      </div>
      <div className={style.profile}>
        <ProfileBox flat={flat} />
      </div>
    </div>
  );
}

export default Sidebar;
