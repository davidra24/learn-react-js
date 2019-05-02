import React, { Component } from 'react';
import confLogo from '../images/platziconf-logo.svg';
import '../styles/Badges.css';
import BadgeList from '../Components/BadgeList';
import { Link } from 'react-router-dom';
import api from '../api';
import PageLoading from '../Components/PageLoading';
import PageError from '../Components/PageError';
import MiniLoader from '../Components/MiniLoader';

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      console.log('entra');
      this.setState({ loading: false, error: error });
    }
  };
  componentDidUpdate(prevProps, prevState) {
    /*console.log('componentDidMount');
    console.log(prevProps, prevState);
    console.log(this.props, this.state);*/
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.intervalId);
  }
  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={confLogo} alt="" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <br />
          <div className="Badges__list">
            <div className="Badges__container">
              <BadgeList badges={this.state.data} />
              {this.state.loading && <MiniLoader />}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Badges;
