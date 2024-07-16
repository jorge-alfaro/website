import './App.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {AppRouter} from "./router/AppRouter.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AppRouter/>}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    )
}

export default App
