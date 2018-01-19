import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

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
      <MuiThemeProvider>
      <RaisedButton label="Default" />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
