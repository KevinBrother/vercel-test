import React from "react";
import { useRoutes } from "react-router-dom";
import Start from "@/pages/start";
import MenuList from "@/pages/menu-list";
import { RpaList } from "@/pages/Demo";

export const MenuRouter = [
  {
    path: "start",
    element: <Start />,
  },
  {
    path: "demo", // TODO 做demo的子路由
    element: <RpaList />,
  },
  {
    path: "MenuList",
    element: <MenuList />,
  }
]

