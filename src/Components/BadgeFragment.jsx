import React, { Component } from 'react';
import '../styles/BadgeList.css';
import Gravatar from './Gravatar';
class BadgeFragment extends Component {
  render() {
    return (
      <div className="BadgesListItem">
        <Gravatar
          className="BadgesListItem__avatar"
          email={this.props.badge.email}
          alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
        />
        <strong>
          {this.props.badge.firstName} {this.props.badge.lastName}
        </strong>
        <br />
        <br />
        {/*<a href={'https://twitter.com/' + this.props.badge.twitter}>*/}
        {'@' + this.props.badge.twitter}
        {/*</a>*/}
        <br />
        <p>{this.props.badge.jobTitle}</p>
      </div>
    );
  }
}

export default BadgeFragment;
