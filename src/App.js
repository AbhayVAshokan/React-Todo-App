import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Route path="/React-Todo-App/" component={Home}></Route>
    </Router>
  );
}

export default App;
