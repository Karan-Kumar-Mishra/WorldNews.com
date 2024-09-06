import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Page from './Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Page type={"Word"}/>,
  },
  {
    path: '/entertainment',
    element: <Page type={"Entertainment"} />,
  },
  {
    path: '/world',
    element: <Page type={"World"} />,

  },
  {
    path: '/business',
    element: <Page type={"Business"} />,
  },
  {
    path: '/sport',
    element: <Page type={"Sport"} />,
  },
  {
    path: '/science',
    element: <Page type={"Science"} />,
  },
  {
    path: '/technology',
    element: <Page type={"Technology"} />,
  }
]);

export default function Rout() {
  return <RouterProvider router={router} />;
}