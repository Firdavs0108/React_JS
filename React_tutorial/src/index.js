// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react'
import ReactDOM from 'react-dom'
import Lesson1 from './lesson_1'



ReactDOM.render(
<React.StrictMode>
  <Lesson1 city = 'SariAsiya' population = '100.000'/> 
  <Lesson1 city = 'Uzun'/> 
  <Lesson1 city = 'Denav'/> 


</React.StrictMode>,
document.getElementById('root'))