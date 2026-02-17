import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Error/Error";
import Home from "../pages/Home/Home";
import OurGroups from "../pages/ourGroups/ourGroups";
import OurPromise from "../pages/ourPromise/ourPromise";
import GlobalLocation from "../pages/globalLocation/globalLocation";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Contact from "../pages/Contact/Contact";
import ProductServices from "../pages/ProductServices/ProductServices";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: Error,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "our-groups",
        Component: OurGroups,
      },
      {
        path: "product-services",
        Component: ProductServices,
      },
      {
        path: "our-promise",
        Component: OurPromise,
      },
      {
        path: "global-location",
        Component: GlobalLocation,
      },
      {
        path: "newsfeed",
        Component: NewsFeed,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);
