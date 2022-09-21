import React from "react";
import { useRoutes } from "react-router-dom";
import Start from "@/pages/start";
import MenuList from "@/pages/menu-list";
import RpaListDemo from "@/pages/demo/rpa-list-demo";

export const MenuRouter = [
  {
    path: "start",
    element: <Start />,
  },
  {
    path: "rpa-list-demo", // TODO 做demo的子路由
    element: <RpaListDemo />,
  },
  {
    path: "MenuList",
    element: <MenuList />,
  }
]

