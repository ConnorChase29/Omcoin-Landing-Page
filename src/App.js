import React from 'react';
import './CSS/App.css';
import FeaturesPage from './pages/FeaturesPage';
import TermsOfService from './pages/TermsOfService2';
import Footer from './components/Footer';
import NavBar from './components/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar/>
        <Router>
          <Switch>
            <Route exact path="/" component={FeaturesPage}/>
            <Route path="/termsOfService" component={TermsOfService}/>
          </Switch>
        </Router>
        <Footer/>
      </React.Fragment>
    </div>
  );
}

export default App;
