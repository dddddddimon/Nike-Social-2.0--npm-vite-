import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navigation />
      {/* <Profile /> */}
      <Dialogs />
    </div>
  );
}

export default App;
