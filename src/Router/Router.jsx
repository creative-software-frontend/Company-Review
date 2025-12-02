import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root/Root';
import Home from '../Pages/Home/Home';
import BasicPlan from '../Pages/BasicPlan/BasicPlan';
import FreePlan from '../Pages/FreePlan/FreePlan';
import ProPlan from '../Pages/ProPlan/ProPlan';
import Blog from '../Pages/Blog/Blog';
import Categories from '../Pages/Categories/Categories';
import Solutions from '../Pages/Solutions/Solutions';

import CustomerStories from '../Pages/CustomerStories/CustomerStories';
import GuidesReports from '../Pages/GuidesReports/GuidesReports';
import InviteReviews from '../Pages/InviteReviews/InviteReviews';
import EngageFeedback from '../Pages/EngageFeedback/EngageFeedback';
import { AccelerateConversions } from '../Pages/AccelerateConversions/AccelerateConversions';
import { Insights } from '../Pages/Insights/Insights';
import { Userlogin } from '../Pages/LoginRegister/Userlogin/Userlogin';
import { UserRegister } from '../Pages/LoginRegister/UserRegister/UserRegister';
import AuthLayout from '../Layout/AuthLayout';

export const router = createBrowserRouter([
  // public layout
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

      {
        path: '/customer-stories',
        Component: CustomerStories,
      },
      {
        path: '/guides-reports',
        Component: GuidesReports,
      },
      {
        path: '/invite-reviews',
        Component: InviteReviews,
      },
      {
        path: '/engage-feedback',
        Component: EngageFeedback,
      },
      {
        path: '/accelerate-conversions',
        Component: AccelerateConversions,
      },
      {
        path: '/insights',
        Component: Insights,
      },
    ],
  },
  // login layout
  {
    path: '/user-auth',
    Component:AuthLayout,
    children: [
      {
        index: true,
        Component:Userlogin
      },
      {
        path: 'register',
        Component:UserRegister
      }
    ]
  }
]);
