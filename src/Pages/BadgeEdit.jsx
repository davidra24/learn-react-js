import React, { Component } from 'react';
import header from '../images/platziconf-logo.svg';
import Badge from '../Components/Badge.jsx';
import BadgeForm from '../Components/BadgeForm.jsx';
import '../styles/BadgeEdit.css';
import PageLoading from '../Components/PageLoading';
import api from '../api';

class BadgeEdit extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  };

  handleChange = e => {
    this.setState({
      loading: false,
      error: null,
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });
    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: true, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit_hero-image img-fluid"
            src={header}
            alt="Logo"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FIRST NAME'}
                lastName={this.state.form.lastName || 'LAST NAME'}
                twitter={this.state.form.twitter || 'TWITTER'}
                jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                email={this.state.form.email || 'E-MAIL'}
              />
            </div>
            <div className="col-6">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeEdit;
