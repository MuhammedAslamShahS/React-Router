import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" exact Component={Project} />
                <Route path="/about" Component={About} />
                <Route path="/" Component={Project} />
            </Routes>
        </Router>
    );
};

export default App;
