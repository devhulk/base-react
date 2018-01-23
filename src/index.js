import React from 'react';
import ReactDOM from 'react-dom';
import SimpleAppBar from './components/simple-app-bar.js'
import { withStyles } from 'material-ui/styles';
  const styles = {
  root: {
    width: '100%',
  },
};

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {name: 'Medium'};
  }


  handleChange(e) {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <SimpleAppBar/>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
