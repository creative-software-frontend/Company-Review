import { createBrowserRouter } from 'react-router';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import BasicPlan from '../Pages/BasicPlan/BasicPlan';
import FreePlan from '../Pages/FreePlan/FreePlan';
import ProPlan from '../Pages/ProPlan/ProPlan';
import Blog from '../Pages/Blog/Blog';
import Categories from '../Pages/Categories/Categories';
import Solutions from '../Pages/Solutions/Solutions';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: '/pricing/free',
        Component: FreePlan,
      },
      {
        path: '/pricing/basic',
        Component: BasicPlan,
      },
      {
        path: '/pricing/pro',
        Component: ProPlan,
      },
      {
        path: '/blog',
        Component: Blog,
      },
      {
        path: '/categories',
        Component: Categories,
      },
      {
        path: '/solutions',
        Component: Solutions,
      },
    ],
  },
]);
