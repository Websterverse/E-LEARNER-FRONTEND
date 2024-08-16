// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import { UserContextProvider } from './Context/UserContext.jsx'

// export const server = "http://localhost:5000";




//  const root =  ReactDOM.createRoot(document.getElementById('root'))
//  root.render
//  (
//   <React.StrictMode>
//     <UserContextProvider>
//     <App/>
//     </UserContextProvider>
//   </React.StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserContextProvider } from './Context/UserContext.jsx';
import { CourseContextProvider } from './Context/CourseContext.jsx';

export const server = "http://localhost:5000";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CourseContextProvider>
      <App />
      </CourseContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);

