import React, { Component } from 'react';
class BadgeForm extends Component {
  state = {};

  /*handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };*/
  handleClick = e => {
    console.log(this.props.formValues);
  };
  //Previene que se envie el formulario con el submit del botón
  /*handleSubmit = e => {
    e.preventDefault();
  };*/
  render() {
    return (
      <div className="">
        <form onSubmit={this.props.onSubmit}>
          <div className="form-group">
            <label htmlFor="">First Name</label>
            <input
              className="form-control"
              type="text"
              name="firstName"
              onChange={this.props.onChange}
              /** Valor controlado*/
              value={this.props.formValues.firstName}
            />
            <label htmlFor="">Last Name</label>
            <input
              className="form-control"
              type="text"
              name="lastName"
              onChange={this.props.onChange}
              value={this.props.formValues.lastName}
            />
            <label htmlFor="">E-mail</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.props.onChange}
              value={this.props.formValues.email}
            />
            <label htmlFor="">Job title</label>
            <input
              className="form-control"
              type="text"
              name="jobTitle"
              onChange={this.props.onChange}
              value={this.props.formValues.jobTitle}
            />
            <label htmlFor="">Twitter</label>
            <input
              className="form-control"
              type="text"
              name="twitter"
              onChange={this.props.onChange}
              value={this.props.formValues.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
          {this.props.error && (
            <p className="text-danger">Internal server error</p>
          )}
        </form>
      </div>
    );
  }
}

export default BadgeForm;
