import React from 'react';
import confLogo from '../images/platziconf-logo.svg';
import Badge from '../Components/Badge';
import '../styles/BadgeDetails.css';
import { Link } from 'react-router-dom';
import DeleteBadgeModal from '../Components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count, setCount] = React.useState(0);
  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  //Hooks [count, setCount ] = [state, setState] useState(inicializacion)
  //const [count, setCount] = React.useState(0);
  const [count, setCount] = useIncreaseCount(10);

  const badge = props.badge;
  return (
    <React.Fragment>
      <div className="BadgeDetails__hero">
        <div className="container" />
        <div className="row">
          <div className="col-6">
            <img src={confLogo} alt="logo de conferencia" />
          </div>
          <div className="col-6 BadgeDetails__hero-attendant-name">
            <h1>
              {badge.firstName} {badge.lastName}
            </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              twitter={badge.twitter}
              jobTitle={badge.jobTitle}
            />
          </div>
          <div className="col-6">
            <h2>Actions</h2>
            <div>
              <button
                onClick={() => {
                  setCount(count + 1);
                }}
                className="btn btn-primary mb-4"
              >
                HOOKS -> Increase Count: {count}
              </button>
              <br />
              <Link
                className="btn btn-primary mb-4"
                to={`/badges/${badge.id}/edit`}
              >
                Edit
              </Link>
              <br />
              <button
                onClick={props.onOpenModal}
                className="btn btn-danger mb-4"
              >
                Delete
              </button>
              <DeleteBadgeModal
                onDeleteBadge={props.onDeleteBadge}
                onCloseModal={props.onCloseModal}
                isOpen={props.modalIsOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default BadgeDetails;
