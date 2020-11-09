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
          <Route path="/list" component={ArticleList} />
          <Route path="/article/:id" component={Article} />
          <Route path="">
            <Redirect to="/list" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
