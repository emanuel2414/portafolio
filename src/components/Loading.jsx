import React from 'react';

const Loading = () => {
  return (
    <div className='w-100' style={{height: '100vh'}}>
      <img className='w-100' src={require('../img/loading.gif')} alt="loading" />
    </div>
  );
}

export default Loading;