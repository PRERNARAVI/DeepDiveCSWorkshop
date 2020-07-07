// import React from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import HomePage from './components/HomePage/HomePage';

// function App() {
//   return (<Router>
//     <div className="App">
//       <Switch>
//           <Route exact path='/' component={HomePage} />
//           {/** 
//           <Route path="/" component={Insert here} />
//           <Route path="/" component={Insert here} />
//           */}
//       </Switch>
//     </div>
//   </Router>   
//   );
// }

// export default App;
import React from 'react';
import ReactDOM from "react-dom";

import './App.css';
import Modal from './Modal';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
      show: false,
      header: "I am Header",
      footer: "I am Footer",
      desc: "Hello! I am modal box"
     };

  }
 
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
      return (
        <div>
          <h1>React Modal</h1>
          <Modal show={this.state.show} handleClose={this.hideModal} header={this.state.header} footer={this.state.footer} desc={this.state.desc}>
            
          </Modal>

          <button type="button" onClick={this.showModal}>
            open108
          </button>
        </div>
      );
    }
}

export default App;