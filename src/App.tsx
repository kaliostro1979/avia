import React from 'react';
import {Route, Routes} from "react-router-dom";
import Avia from "./pages/Avia";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
        <div className={"container"}>
            <Routes>
                <Route path='avia/'>
                    <Route index  element={<Avia/>}/>
                    <Route path='info' element={<Info/>}/>
                </Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
