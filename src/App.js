import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

const router = createBrowserRouter(
  // TODO: change it to object based routing in the future K...
  createRoutesFromElements(
    <Route path="/">
        <Route index element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="users">
          <Route index element={<List/>}/>
          <Route path=":userId" element={<Single/>}/>
          <Route path="new" element={<New inputs={userInputs} title="Add new User"/>}/>
        </Route>
        {/* This admin template manages products */}
        <Route path="products">
          <Route index element={<List/>}/>
          <Route path=":productId" element={<Single/>}/>
          <Route path="new" element={<New inputs={productInputs} title="Add new Product"/>}/>
        </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
