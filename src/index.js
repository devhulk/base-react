import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

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
  let cardStyle = {
    height : "400px",
    width : "33%",
    margin : "10px",
    marginLeft: "0px"
  }
  let appBarStyle = {
    color : "dddddd"
  }
    return (
      // Replace MuiTheme with Grid
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <AppBar
    title="Superbowl Articles"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
    style={appBarStyle}
  />
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <Card style={cardStyle}>
          <CardHeader
          title="Super Bowl Champs" 
          />
          <CardMedia
          overlay={<CardTitle title="How'd They do it?" subtitle="click for details..." />}
        >
          <img src="/eaglebitties.jpg" alt="" />
        </CardMedia>
        </Card>
      </MuiThemeProvider>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('app'));
