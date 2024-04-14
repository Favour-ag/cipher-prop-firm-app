import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./routes/About";
import AffliateProgram from "./routes/AffliateProgram";
import FAQ from "./routes/FAQ";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Payment from "./routes/Payment";

export const router = createBrowserRouter([
  { id: "0", path: "/", element: <App /> },
  { id: "1", path: "/about", element: <About /> },
  { id: "2", path: "/affliateprogram", element: <AffliateProgram /> },
  { id: "3", path: "/faq", element: <FAQ /> },
  { id: "4", path: "/contact", element: <Contact /> },
  { id: "5", path: "/login", element: <Login /> },
  { id: "6", path: "/payment", element: <Payment /> },
]);
