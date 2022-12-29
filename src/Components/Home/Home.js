import React from 'react';
import ShowStatus from '../ShowStatus/ShowStatus';
import StatusPost from '../StatusPost/StatusPost';

const Home = () => {
  return (
    <div>
       <div>
       <StatusPost></StatusPost>
       </div>
       <div>
       <ShowStatus></ShowStatus>
       </div>
    </div>
  );
};

export default Home;