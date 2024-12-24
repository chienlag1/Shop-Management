import { ROUTERS } from "./utils/router";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/user/HomePage";
import MasterLayout from "./pages/user/theme/masterLayout";
import ProfilePage from "./pages/user/ProfilePage";

const renderUserRouter =  () =>{
    const userRouters=[
        {
            path: ROUTERS.USER.HOME,
            component: <HomePage></HomePage>
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage></ProfilePage>
        },
    ]

    return (
        <MasterLayout>
        <Routes>
            {
                userRouters.map((item, key) => (
                    <Route key={key}  path={item.path} element={item.component}/>
                ))
            }
        </Routes>
        </MasterLayout>
    )
}


const RouterCustom  =() =>{
    return renderUserRouter();
}
export default RouterCustom