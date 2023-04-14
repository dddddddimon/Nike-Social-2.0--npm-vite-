import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      <Routes>
        <Route
          path="/profile"
          element={
            <Profile
              posts={props.state.profilePage.posts}
              addPost={props.addPost}
              newPostText={props.state.profilePage.newPostText}
              updateNewPostText={props.updateNewPostText}
            />
          }
        />
        <Route
          path="/dialogs/*"
          element={
            <Dialogs
              dialogs={props.state.messagesPage.dialogs}
              messages={props.state.messagesPage.messages}
            />
          }
        />
        {/* <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music />} />
          <Route path="/settings" element={<Settings />} /> */}
      </Routes>
    </div>
  );
}

export default App;
