import React, { Component } from 'react';
import confLogo from '../images/badge-header.svg';
import '../styles/Badge.css';
import Gravatar from '../Components/Gravatar';

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="badge_section-name">
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="avatar"
          />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>
        <div className="badge_section-info">
          <p>{this.props.jobTitle}</p>
          <p>@{this.props.twitter}</p>
        </div>
        <div className="badge_footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
