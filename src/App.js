import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>
    },
    {
      path: 'about',
      element: <About></About>
    },
    {
      path: 'orders',
      element: <Orders></Orders>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
