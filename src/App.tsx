import "./App.css";
import PostContainer from "./components/PostContainer";
import PostContainerCopy from "./components/PostContainerCopy";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <PostContainer />
        <PostContainerCopy />
      </div>
    </div>
  );
}

export default App;
