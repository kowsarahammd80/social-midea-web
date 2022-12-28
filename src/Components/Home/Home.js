import React from 'react';
import ShowStatus from '../ShowStatus/ShowStatus';
import StatusPost from '../StatusPost/StatusPost';

const Home = () => {
  return (
    <div>
       <StatusPost></StatusPost>
       <ShowStatus></ShowStatus>
    </div>
  );
};

export default Home;