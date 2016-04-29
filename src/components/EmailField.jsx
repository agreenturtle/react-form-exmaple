var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
  getInitialState: function(){
    return {validEmail: true, emailValue: ""}
  },
  onChange: function(e){
      var val = e.target.value;

      if(!validator.validate(e.target.value)){
        this.setState({validEmail: false, emailValue: e.target.value});
      }
      else{
        this.setState({validEmail: true, emailValue: e.target.value});
      }
  },
  clear: function(){
      this.setState({validEmail: true, emailValue:""});
  },
  render: function(){
    var formClass = this.state.validEmail ? "form-group" : "form-group has-error";
    return(
      <div className={formClass}>
        <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.emailValue}/>
      </div>
    );
  }
});

module.exports = EmailField;
