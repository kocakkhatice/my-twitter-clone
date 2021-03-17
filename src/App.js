import React from 'react'
import ProfilePhoto from './components/ProfilePhoto';
import Navigation from "./components/Navigation";
import TweetButton from "./components/TweetButton";
import ProfileBox from './components/ProfileBox';


function App() {
  return (
    <div >
     <Navigation/>
     <ProfileBox />
     <TweetButton > normal</TweetButton>
     <TweetButton biggerButton> bigger</TweetButton>

     <TweetButton full> full</TweetButton>
    </div>
  );
}

export default App;
