import { Navigate, useRoutes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import NavLayout from './layouts/NavLayout';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
//
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PollsPage from './pages/PollsPage';
import ProfilePage from './pages/ProfilePage';
import SignupPage from './pages/SignupPage';
import TrendingPage from './pages/TrendingPage';

export default function Router() {
  // The useRoutes hook is the functional equivalent of <Routes>, but it uses JavaScript objects instead of <Route> elements to define your routes. These objects have the same properties as normal <Route> elements, but they don't require JSX.
  return useRoutes([
    {
      path: '/users',
      element: <NavLayout />,
      children: [
        { path: 'signup', element: <SignupPage /> },
        { path: 'login', element: <LoginPage /> },
        { path: 'profile', element: <ProfilePage /> },
      ],
    },
    {
      path: '/polls',
      element: <NavLayout />,
      children: [
        { element: <Navigate to="/" replace /> },
        { path: 'interests/:interest', element: <PollsPage /> },
        { path: 'following', element: <TrendingPage /> },
      ],
    },
    {
      path: '/error',
      element: <ErrorPage />,
    },
    {
      path: '/',
      element: <NavLayout />,
      children: [
        // { element: <Navigate to="/" replace /> },
        { path: '/', element: <HomePage /> },
        // { path: 'login', element: <LoginPage /> },
        // { path: 'signup', element: <SignupPage /> },
        { path: 'profile', element: <ProfilePage /> },
        { path: 'about', element: <AboutPage /> },
        { path: 'trending', element: <TrendingPage /> },
      ],
    },
    { path: '*', element: <Navigate to="/error" replace /> },
  ]);
}
