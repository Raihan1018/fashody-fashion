import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Error/Error";
import Home from "../pages/Home/Home";
import OurGroups from "../pages/OurGroups/OurGroups";
import OurPromise from "../pages/OurPromise/OurPromise";
import GlobalLocation from "../pages/GlobalLocation/GlobalLocation";
import NewsFeed from "../pages/NewsFeed/NewsFeed";
import Contact from "../pages/Contact/Contact";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import Products from "../pages/Shop/Products/Products";
import ProductDetails from "../pages/Shop/ProductDetails/ProductDetails";

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
        path: "products",
        Component: Products,
      },
      {
        path: "product-details,",
        Component: ProductDetails,
      },
      {
        path: "product-details/:id",
        Component: ProductDetails,
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
      {
        path: "privacy-policy",
        Component: PrivacyPolicy,
      },
      {
        path: "cookie-policy",
        Component: CookiePolicy,
      },
    ],
  },
]);
