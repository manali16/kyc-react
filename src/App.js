import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Kyc from './KYC/Kyc';
function App() {
    return (
      <React.Fragment>
        <Router>              
            <Route exact path="/" component={Kyc} />
            </Router>
            </React.Fragment>
          
  );
}

export default App;
