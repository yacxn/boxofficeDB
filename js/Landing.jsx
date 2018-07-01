import React from 'react'
import {Link} from 'react-router-dom';

const landing = () => (
<div className='landing'>
  <h1>svid</h1>
  <input type="text" placeholder='Search Here' />
  <Link to="/search">Or Browse All</Link>
</div>
);

export default landing;
