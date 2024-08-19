// Router

import { createBrowserRouter } from "react-router-dom";
import LoginScreen from '../Screens/LoginScreen'
import ChatApp from '../Screens/ChatApp'


const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/chat",
    element: <ChatApp />,
  },
]);

export default router;
