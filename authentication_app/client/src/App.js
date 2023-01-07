import { RouterProvider } from "react-router-dom";

import "./App.css";

import router from './components/router';

function App() {
  return (
    <main>
      <RouterProvider router={router}>
        {/* <div className="App">
          <h1 className="text-3xl font-bold underline">React Login APP</h1>
        </div> */}
      </RouterProvider>
    </main>
  );
}

export default App;
