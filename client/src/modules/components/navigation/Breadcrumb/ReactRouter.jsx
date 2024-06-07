// import {HashRouter, Link, Route, Routes, useLocation} from 'react-router-dom';
// import {Alert, Breadcrumb} from 'antd';
// import React from 'react';
//
// const Apps = () => (
//   <ul className='app-list'>
//     <li>
//       <Link to='/apps/1'>Application1</Link>：
//       <Link to='/apps/1/detail'>Detail</Link>
//     </li>
//     <li>
//       <Link to='/apps/2'>Application2</Link>：
//       <Link to='/apps/2/detail'>Detail</Link>
//     </li>
//   </ul>
// );
//
// const breadcrumbNameMap = {
//   '/apps': 'Application List',
//   '/apps/1': 'Application1',
//   '/apps/2': 'Application2',
//   '/apps/1/detail': 'Detail',
//   '/apps/2/detail': 'Detail',
// };
// const Home = () => {
//   const location = useLocation();
//   const pathSnippets = location.pathname.split('/').filter((i) => i);
//   const extraBreadcrumbItems = pathSnippets.map((_, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
//     return (
//       <Breadcrumb.Item key={url}>
//         <Link to={url}>{breadcrumbNameMap[url]}</Link>
//       </Breadcrumb.Item>
//     );
//   });
//   const breadcrumbItems = [
//     <Breadcrumb.Item key='home'>
//       <Link to='/'>Home</Link>
//     </Breadcrumb.Item>,
//   ].concat(extraBreadcrumbItems);
//   return (
//     <div className='demo'>
//       <div className='demo-nav'>
//         <Link to='/'>Home</Link>
//         <Link to='/apps'>Application List</Link>
//       </div>
//       <Routes>
//         <Route path='/apps' component={Apps} />
//         <Route render={() => <span>Home Page</span>} />
//       </Routes>
//       <Alert
//         style={{margin: '16px 0'}}
//         message='Click the navigation above to switch:'
//       />
//       <Breadcrumb>{breadcrumbItems}</Breadcrumb>
//     </div>
//   );
// };
//
// const ReactRouter = () => {
//   return (
//     <HashRouter>
//       <Home />
//     </HashRouter>
//   );
// };
//
// export default ReactRouter;

import React from 'react';

const ReactRouter = () => {
  return <div>ReactRouter</div>;
};

export default ReactRouter;
