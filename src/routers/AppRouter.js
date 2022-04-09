import React from 'react'
import { Routes ,Route,BrowserRouter} from 'react-router-dom'

import LoginScreen from '../components/login/LoginScreen'
import NotFoundScreen from '../components/notFoundScreen/NotFoundScreen'
import DashBoardRoutes from './DashBoardRoutes'
import PrivateRoute from './PrivateRoute'
import PublicRoutes from './PublicRoutes'


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/login' element={
                    <PublicRoutes>
                        <LoginScreen/>
                    </PublicRoutes>
                }
                />

                {/* rutas privadas */}
                {/* luego del / en adelante el private route se va a encargar de devolver las rutas
                sólo si el usuario está autentificado */}
                <Route path='/*' element={
                    <PrivateRoute>
                        <DashBoardRoutes/>
                    </PrivateRoute>
                }
                />
                {/* <Route path='/*' element={<DashBoardRoutes/>}/> */}
                <Route path='*' element={<NotFoundScreen/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter