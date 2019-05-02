import React from 'react';

function NotFound() {
  let styles = {
    padding: '10%',
    textAlign: 'center'
  };
  return (
    <div style={styles}>
      <h1>{':('}</h1>
      <h2>Error 404: Página no encontrada</h2>
    </div>
  );
}

export default NotFound;
