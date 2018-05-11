import './Layout.css';

import React, { PureComponent } from 'react';

const Layout = ({ children }) => {
  return (
    <main className='main'>
      <div className='content'>{children}</div>
    </main>
  )
}

export default Layout;