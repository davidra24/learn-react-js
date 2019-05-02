import React, { Component } from 'react';
import api from '../api';
import PageLoading from '../Components/PageLoading';
import PageError from '../Components/PageError';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends Component {
  state = {
    loading: false,
    data: [],
    error: null,
    modalIsOpen: false
  };
  componentDidMount() {
    this.fetchData();
  }
  handleOpenModal = e => {
    this.setState({ modalIsOpen: true });
  };
  handleCloseModal = e => {
    this.setState({ modalIsOpen: false });
  };
  handleDeleteBadge = async e => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.remove(this.props.match.params.badgeId);
      this.setState({ loading: false });
      this.props.history.push('/badges');
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const data = await api.badges.read(this.props.match.params.badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading === true) {
      return <PageLoading />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <BadgeDetails
        onCloseModal={this.handleCloseModal}
        onOpenModal={this.handleOpenModal}
        modalIsOpen={this.state.modalIsOpen}
        onDeleteBadge={this.handleDeleteBadge}
        badge={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
