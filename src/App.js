import './index.css';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



const App = () => {
  return (
     <div className='app'>
     <Header></Header>
     <Body></Body>
     </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRouter} />
  
);


