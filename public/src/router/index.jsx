import { createBrowserRouter } from "react-router-dom";
import Home from "../auth/Home";
import ForgotPassword from "../auth/ForgotPassword";
import VerifyOtp from "../auth/VerifyOtp";
import UpdatePassword from "../auth/UpdatePassword";
import DashboardHome from "../dashboardHome/DashboradHome";
import Main from "../layout/Main";
import Profile from "../dashboardMenu/headerMenu/Profile";
import EditProfiel from "../dashboardMenu/headerMenu/EditProfile";
import Settings from "../dashboardMenu/sidebarMenu/settings/Settings";
import PrivacyPolicy from "../dashboardMenu/sidebarMenu/settings/PrivacyPolicy/PrivacyPolicy";
import EditPrivacyPolicy from "../dashboardMenu/sidebarMenu/settings/PrivacyPolicy/EditPrivacyPolicy";
import TermsCondition from "../dashboardMenu/sidebarMenu/settings/termsCondition/TermsCondition";
import EditTermsCondition from "../dashboardMenu/sidebarMenu/settings/termsCondition/EditTermsCondition";
import ApprovedUsers from "../dashboardMenu/sidebarMenu/ApprovedUsers";
import ErrorPage from "./ErrorPage";
import AboutUs from "../dashboardMenu/sidebarMenu/settings/AboutUs/AboutUs";
import EditAboutUs from "../dashboardMenu/sidebarMenu/settings/AboutUs/EditAboutUs";
import Notification from "../dashboardMenu/headerMenu/Notification";
import Earnings from "../dashboardMenu/sidebarMenu/Earnings/Earnings";
import Categories from "../dashboardMenu/sidebarMenu/Categories/Categories";
import CategoryDetails from "../dashboardMenu/sidebarMenu/Categories/CategoryDetails";
import Appointment from "../dashboardMenu/sidebarMenu/Appointment/Appointment";
import Categoriess from './../dashboardMenu/sidebarMenu/CatagoriesMain/Categories';
import Recruitment from "../dashboardMenu/sidebarMenu/Recruitment/Recruitment";
import RecruitmentUserDetails from "../dashboardMenu/sidebarMenu/Recruitment/RecruitmentUserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage />,
  },
  {
    path: "forgotpassword",
    element: <ForgotPassword />,
  },
  {
    path: "verifyotp",
    element: <VerifyOtp />,
  },
  {
    path: "updatepassword",
    element: <UpdatePassword />,
  },
  {
    path: "/dashboard",
    element: <Main />,
    children: [
      {
        path: "home",
        element: (
          // <PrivateRoute>
          <DashboardHome />
          // </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "editprofile",
        element: <EditProfiel />,
      },
      {
        path: "userslist",
        element: <ApprovedUsers />,
      },
      {
        path: "earnings",
        element: <Earnings />,
      },
      {
        path: "caregivers",
        element: <Categories />,
      },
      {
        path: "caregivers/:id",
        element: <CategoryDetails />,
      },
      {
        path: "appointment",
        element: <Appointment />,
      },
      {
        path: "categories",
        element: <Categoriess />,
      },
      {
        path: "recruitment",
        element: <Recruitment />,
      },
      {
        path: "recruitment/:id",
        element: <RecruitmentUserDetails />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "settings/privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "settings/privacypolicy/editprivacypolicy",
        element: <EditPrivacyPolicy />,
      },
      {
        path: "settings/termcondition",
        element: <TermsCondition />,
      },
      {
        path: "settings/edittermcondition",
        element: <EditTermsCondition />,
      },

      {
        path: "settings/aboutus",
        element: <AboutUs />,
      },
      {
        path: "settings/editaboutus",
        element: <EditAboutUs />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
    ],
  },
]);
