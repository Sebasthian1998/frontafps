import { createBrowserRouter } from 'react-router-dom'
import Home from 'views/home';
import Kits from 'views/kit/kit'
import Usuarios from 'views/users/user'

const RoutesL = createBrowserRouter([
    {
        path:"/",
        element: <Home></Home>
    },
    {
        path:"/usuarios",
        element: <Usuarios></Usuarios>
    },
    {
        path:"/kits",
        element: <Kits></Kits>
    },
    {
        path:"*",
        element: <Home></Home>
    },
     
    ])


export default RoutesL;