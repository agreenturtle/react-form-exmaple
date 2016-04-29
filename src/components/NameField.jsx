var React = require('react');

var NameField = React.createClass({
  getInitialState: function(){
    return ({value:""});
  },
  onChange: function(e){
    this.setState({value:e.target.value});
  },
  clear: function(){
      this.setState({value:""});
  },
  render: function(){
    return (
      <input className="form-control"
      value={this.state.value}
      placeholder={this.props.type + "Name"}
      onChange={this.onChange} />
    );
  }
});

module.exports = NameField;
