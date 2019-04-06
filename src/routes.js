import Dashboard from "views/Dashboard.jsx";
import Map from "views/Map.jsx";
import TableList from "views/TableList.jsx";
import UserProfile from "views/UserProfile.jsx";
import SignIn from "./components/SignIn/SignIn";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: Map,
    layout: "/admin"
  },

  {
    path: "/user-profile",
    name: "User Profile",    
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },

  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin"
  },

  // {
  //   path: "/signin",
  //   name: "Sign In",
  //   component: SignIn
  // }
];
export default routes;
