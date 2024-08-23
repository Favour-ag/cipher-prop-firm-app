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
import Competition from "./Dashboard/Competition";
import Leaderboard from "./Dashboard/Leaderboard";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/affliateprogram", element: <AffliateProgram /> },
  { path: "/faq", element: <FAQ /> },
  { path: "/contact", element: <Contact /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/payment", element: <Payment /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/withdrawal", element: <Withdrawal /> },
  { path: "/announcements", element: <Announcements /> },
  { path: "/rulesandfaq", element: <RulesandFaq /> },
  { path: "/affiliate", element: <Affiliate /> },
  { path: "/competition", element: <Competition /> },
  { path: "/leaderboard", element: <Leaderboard /> },
  { path: "/needhelp", element: <NeedHelp /> },
  { path: "/settings", element: <Settings /> },
  { path: "/logout", element: <Logout /> },
]);
