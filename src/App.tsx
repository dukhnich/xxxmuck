import './App.css'
import TheHeader from './components/TheHeader';

import {
  Outlet,
} from "react-router-dom";

function App() {

  return (
    <>
      <TheHeader></TheHeader>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App
