import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './styles/main.css';
import Home from './pages/home'
import Settings from './pages/settings'
import AppLayout from "./component/app_layout";
import Shorts from "./pages/shorts";
import Subscription from "./pages/subscriptions";
import History from "./pages/history";
import Trending from "./pages/trending";
import Shopping from './pages/shopping';
import Music from './pages/music';
import Movies from './pages/movies';
import Live from './pages/live';
import Gaming from './pages/gaming';
import News from './pages/news';
import Sports from './pages/sports';
import Feedback from './pages/feedback';
import Help from './pages/help';

const router = createBrowserRouter([
  {
    path: "/",
    element: < AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/shorts',
        element: <Shorts />
      },
      {
        path: '/subscriptions',
        element: <Subscription />
      },
      {
        path: '/history',
        element: <History />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/trending',
        element: <Trending />
      },
      {
        path: '/shopping',
        element: <Shopping />
      },
      {
        path: '/music',
        element: <Music />
      },
      {
        path: '/movies',
        element: <Movies />
      },
      {
        path: '/live',
        element: <Live />
      },
      {
        path: '/gamming',
        element: <Gaming />
      },
      {
        path: '/news',
        element: <News />
      },
      {
        path: '/sports',
        element: <Sports />
      },
      {
        path: '/feedback',
        element: <Feedback />
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/watchlater',
        element: <Feedback />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
