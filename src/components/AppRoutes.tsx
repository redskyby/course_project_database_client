import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "../services/routes";
import { ANIMALS_ROUTE } from "../services/const";

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                {publicRoutes.map(({ path, Component }) => {
                    return <Route key={path} path={path} element={<Component />} />;
                })}
                <Route path="*" element={<Navigate to={ANIMALS_ROUTE} />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
