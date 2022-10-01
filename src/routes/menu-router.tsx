import loadable from '@loadable/component';

const Start = loadable(() => import('@/pages/start'));
const MenuList = loadable(() => import('@/pages/menu-list'));
const CategoryList = loadable(() => import('@/pages/category-list'));

// Demo
const RpaListDemo = loadable(() => import('@/pages/demo/rpa-list-demo'));
const RpaMenuDemo = loadable(() => import('@/pages/demo/rpa-menu-demo'));
const RpaMeTnuDemo = loadable(() => import('@/pages/demo/rpa-menu-demo'));
const MobxDemo = loadable(() => import('@/pages/demo/mobx-demo'));

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
    path: "mobx-demo", // TODO 做demo的子路由
    element: <MobxDemo />,
  },
  {
    path: "RpaMenuDemo",
    element: <RpaMenuDemo />,
  },
  {
    path: "MenuList",
    element: <MenuList />,
  },
  {
    path: "CategoryList",
    element: <CategoryList />,
  }
]

