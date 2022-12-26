import { createBrowserRouter } from 'react-router-dom';
import Application from '../../Pages/Application/Application';
import Home from '../../Pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/application',
                element: <Application></Application>
            },
        ]
    }
])