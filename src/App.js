import './index.css';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import RestaurantMenu from './components/RestaurantMenu';
import Error from './components/Error';
import Contact from './components/Contact';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider , Outlet } from 'react-router-dom';



const App = () => {
  return (
     <div className='app'>
     <Header></Header>
     <Outlet />
     </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    {
      path: "/contact",
      element: <Contact></Contact>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu />,
    },
    ],
    errorElement: <Error></Error>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={appRouter} />
  
);


