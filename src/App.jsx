import { RouterProvider } from "react-router-dom";
import RootProvier from "./core/provider/root_provider";
import {appRouter} from "./core/routes/app_router";

function App() {

  return (
    <>
    <RootProvier>
      <RouterProvider router={appRouter}/>
    </RootProvier>
    </>
  )
}

export default App
