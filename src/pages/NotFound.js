import React from 'react';

const NotFound = ({ setPage }) => {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1>404</h1>
      <p>The page you are looking for doesn't exist.</p>
      <button onClick={() => setPage('home')} style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Back Home
      </button>
    </div>
  );
};

export default NotFound;