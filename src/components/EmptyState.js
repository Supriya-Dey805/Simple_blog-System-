import React from 'react';

const EmptyState = ({ message = "No items found matching your criteria." }) => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 2rem', background: '#f9f9f9', borderRadius: '8px', color: '#666' }}>
      <p>{message}</p>
    </div>
  );
};

export default EmptyState;