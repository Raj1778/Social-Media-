import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";
import { useState } from "react";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
        <div className="content">
          <Header />
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />0
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
