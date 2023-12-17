import React from 'react';
import defaultRoutes from './route'


const AppRouter = () => {
    const { publicRoutes, protectedRoutes } = defaultRoutes;


    const publicPageRoutes = publicRoutes.map((data) => {
        <Route key={data.path} path={data.path} element={data.component} />
    })

    const protectedPageRoutes = protectedRoutes.map((data) => {
        <Route key={data.path} path={data.path} element={data.component} />
    })

    return (
        <Routes>
            <Route path='/' element={<Layout />}>

            </Route>
        </Routes>
    )
}


export default AppRouter