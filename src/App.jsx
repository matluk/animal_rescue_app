import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About.jsx";
import AnimalList from "./components/AnimalList/AnimalList.jsx";
import AnimalInput from "./components/AnimalInput/AnimalInput.jsx";
import Notifications from "./components/Notifications/Notifications.jsx";
import Donations from "./components/Donations/Donations.jsx";
import AppBar from "./components/AppBar.jsx";
import { UserRoleContext } from "./utils/context/role.js";
import routes from "./routes.js";

const router = createBrowserRouter([
  {
    path: routes.about.path,
    element: <About />,
  },
  {
    path: routes.animalList.path,
    element: <AnimalList />,
  },
  {
    path: routes.animalInput.path,
    element: <AnimalInput />,
  },
  {
    path: routes.donations.path,
    element: <Donations />,
  },
  {
    path: routes.notifications.path,
    element: <Notifications />,
  },
]);

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <UserRoleContext.Provider value={isAdmin}>
      <AppBar setIsAdmin={setIsAdmin} router={router} />
      <RouterProvider router={router} />
    </UserRoleContext.Provider>
  );
}

export default App;
