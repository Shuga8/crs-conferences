import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import {
  CallForPapers,
  Contact,
  Forbidden,
  Home,
  NotFound,
  Patnership,
  ServerError,
  Shop,
  Sponsorship,
  Volunteer,
} from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/get-involved/sponsorship" element={<Sponsorship />} />
        <Route path="/get-involved/volunteer" element={<Volunteer />} />
        <Route path="/get-involved/partnership" element={<Patnership />} />

        {/** Error Routes */}
        <Route path="/404" element={<NotFound />} />
        <Route path="/500" element={<ServerError />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
