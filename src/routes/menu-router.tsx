import loadable from '@loadable/component';

const Start = loadable(() => import('@/pages/start'));
const MenuList = loadable(() => import('@/pages/menu-list'));

// Demo
const RpaListDemo = loadable(() => import('@/pages/demo/rpa-list-demo'));

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

