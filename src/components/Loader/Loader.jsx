import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        minHeight: '170 ',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '400',
      }}
    >
      <ThreeDots
        height="170"
        position="center"
        width="80"
        radius="9"
        color="orange"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};
