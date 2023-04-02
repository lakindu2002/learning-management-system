import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';
import { AuthGuard } from './content/auth/AuthGuard';

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Overview = Loader(lazy(() => import('src/content/overview')));

const Login = Loader(lazy(() => import('src/content/pages/Login')));
const SignUp = Loader(lazy(() => import('src/content/pages/SignUp')));
const VerifyCode = Loader(lazy(() => import('src/content/pages/VerifyCode')));
const ResetDefaultPassword = Loader(lazy(() => import('src/content/pages/ResetPassword')));

const Tasks = Loader(lazy(() => import('src/content/dashboards/Tasks')));

const UserListPage = Loader(
  lazy(() => import('src/content/applications/Users/list'))
)

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Courses = Loader(lazy(() => import('src/content/applications/Courses')));
const UserProfile = Loader(
  lazy(() => import('src/content/applications/Users/profile'))
);
const UserSettings = Loader(
  lazy(() => import('src/content/applications/Users/settings'))
);

const Status404 = Loader(lazy(() => import('src/content/pages/Status404')));
const Status500 = Loader(lazy(() => import('src/content/pages/Status500')));

const routes: RouteObject[] = [
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        element: (
          <AuthGuard>
            <Overview />
          </AuthGuard>
        )
      },
      {
        path: '/login',
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        )
      },
      {
        path: '/sign-up',
        element: (
          <AuthGuard>
            <SignUp />
          </AuthGuard>
        )
      },
      {
        path: '/verify-code',
        element: (
          <AuthGuard>
            <VerifyCode />
          </AuthGuard>
        )
      },
      {
        path: '/reset-password',
        element:
          <AuthGuard>
            <ResetDefaultPassword />
          </AuthGuard>
      },
      {
        path: 'status',
        children: [
          {
            path: '',
            element: <Navigate to="404" replace />
          },
          {
            path: '404',
            element: <Status404 />
          },
          {
            path: '500',
            element: <Status500 />
          }
        ]
      },
      {
        path: '*',
        element: <Status404 />
      }
    ]
  },
  {
    path: 'app',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="overview" replace />
      },
      {
        path: 'overview',
        element: (
          <AuthGuard>
            <Tasks />
          </AuthGuard>
        )
      },
      {
        path: 'messenger',
        element: (
          <AuthGuard>
            <Messenger />
          </AuthGuard>
        )
      }
    ]
  },
  {
    path: 'app/management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="courses" replace />
      },
      {
        path: 'courses',
        element: (
          <AuthGuard>
            <Courses />
          </AuthGuard>
        )
      },
      {
        path: 'users',
        element: (
          <AuthGuard>
            <UserListPage />
          </AuthGuard>
        )
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
          {
            path: 'details',
            element: (
              <AuthGuard>
                <UserProfile />
              </AuthGuard>
            )
          },
          {
            path: 'settings',
            element: (
              <AuthGuard>
                <UserSettings />
              </AuthGuard>
            )
          }
        ]
      }
    ]
  }
];

export default routes;
