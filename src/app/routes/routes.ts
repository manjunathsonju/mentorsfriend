import { create } from "../pages/todoapp/create.task.ts";
import { list } from "../pages/todoapp/list.task.ts";
import { task } from "../pages/todoapp/wrapper.task.ts";
import homeIndex from "../pages/home/home.index.ts";
import noPageFoundIndex from "../pages/noPageFound/noPageFound.index.ts";
import { login } from "../pages/user/login.example.ts";
import { logout } from "../pages/user/logout.example.ts";
import { register } from "../pages/user/register.example.ts";

type RouteParams = {
  /**
   * This is a path for route url
   */
  path: any;
  /**
   * This is a label for the route as a name
   */
  linkLabel?: string;
  /**
   * This is the content that route renders
   */
  content: any;
  /**
   * If path needs to be authenticated. ie. true, false
   */
  isAuthenticated?: boolean;
};

const routes: RouteParams[] = [
  {
    path: "/",
    linkLabel: "Home",
    content: homeIndex,
  },
  {
    path: "/login",
    linkLabel: "Login",
    content: login,
  },
  {
    path: "/register",
    linkLabel: "Signup",
    content: register,
  },
  {
    path: "/logout",
    linkLabel: "Signup",
    content: logout,
  },
  {
    path: "/todoapp",
    linkLabel: "To Do App",
    content: create,
    isAuthenticated: true
  },
  {
    path: "/task",
    linkLabel: "Task",
    content: task,
    isAuthenticated: true
  },
  {
    path: "/task-list",
    linkLabel: "To do App",
    content: list,
    isAuthenticated: true
  },
  {
    path: "/404",
    linkLabel: "404",
    content: noPageFoundIndex,
  },
];

export default routes;
