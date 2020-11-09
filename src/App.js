import "./App.css";
import ArticleList from "./components/articleList";
import Article from "./components/article";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Redirect exact from="/" to="/list" />
          <Route exact path="/list" component={ArticleList} />
          <Route exact path="/article/:id" component={Article} />
          <Route exact path="**">
            <Redirect to="/list" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
