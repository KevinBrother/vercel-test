import { BaseRouter } from './base-router'
import { MenuRouter } from './menu-router'
import { useRoutes, Link, BrowserRouter } from 'react-router-dom';

function Container() {
  const element = useRoutes(MenuRouter.concat(BaseRouter));
  return <div style={{ marginLeft: '30px' }}>{element}</div>;
}

function Root() {
  return (
    <BrowserRouter >
      <div style={{ display: 'flex' }}>
        <ul>
          {MenuRouter.map(router => {
            const { path } = router;

            return (
              <li key={path}>
                <Link to={path}>{path.replace('/', '')}</Link>
              </li>
            );
          })}
        </ul>
        <Container />
      </div>
    </BrowserRouter >
  )
}

export default Root
