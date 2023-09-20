import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import {BrowserRouter as Router} from "react-router-dom";
import store from "./features/store.js";
import {Provider} from "react-redux";

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
