import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import AffliateProgram from "./routes/AffliateProgram";
import FAQ from "./routes/FAQ";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";
import Payment from "./routes/Payment";
import Dashboard from "./Dashboard/Dashboard";
import Withdrawal from "./Dashboard/Withdrawal";
import Announcements from "./Dashboard/Announcements";
import RulesandFaq from "./Dashboard/RulesandFaq";
import Affiliate from "./Dashboard/Affiliate";
import NeedHelp from "./Dashboard/NeedHelp";
import Settings from "./Dashboard/Settings";
import Logout from "./routes/Logout";

export const router = createBrowserRouter([
  { id: "0", path: "/", element: <App /> },
  { id: "1", path: "/about", element: <About /> },
  { id: "2", path: "/affliateprogram", element: <AffliateProgram /> },
  { id: "3", path: "/faq", element: <FAQ /> },
  { id: "4", path: "/contact", element: <Contact /> },
  { id: "5", path: "/login", element: <Login /> },
  { id: "6", path: "/signup", element: <SignUp /> },
  { id: "7", path: "/payment", element: <Payment /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/withdrawal", element: <Withdrawal /> },
  { path: "/announcements", element: <Announcements /> },
  { path: "/rulesandfaq", element: <RulesandFaq /> },
  { path: "/affiliate", element: <Affiliate /> },
  { path: "/needhelp", element: <NeedHelp /> },
  { path: "/settings", element: <Settings /> },
  { path: "/logout", element: <Logout /> },
]);
