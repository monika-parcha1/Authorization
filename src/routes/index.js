import Welcome from "../pages/welcome";
import Users from "../pages/users";
import AdminPage from "../pages/admin";

export const Paths = {
    welcome : "/welcome",
    users : '/users',
    admin : '/protected',
}

export const routes = [
    {
    path : Paths.welcome,
    component : Welcome,
    isPublic : true,
   },
   {
    path : Paths.users,
    component : Users,
    isPublic : true ,
   },
   {
    path : Paths.admin,
    component : AdminPage,
    isPublic : false ,
   },
]