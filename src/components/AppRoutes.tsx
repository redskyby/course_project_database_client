import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../utils/routes";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={<Component />} />;
                })}
            </Routes>
        </div>
    );
};

export default AppRoutes;
