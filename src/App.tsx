import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Avia from "./pages/Avia";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
        <div className={"container"}>
            <Routes>
                <Route index element={<Navigate to={`/avia`} replace/>}/>
                <Route path='avia/'>
                    <Route path={''} element={<Avia/>}/>
                    <Route path='info' element={<Info/>}/>
                </Route>
            </Routes>
        </div>
    </div>
  );
}

export default App;
