import { BaseRouter, MenuRouter } from '@/routes'
import { useRoutes, Link } from 'react-router-dom';

function Container() {
  const element = useRoutes(MenuRouter.concat(BaseRouter));
  return <div style={{ marginLeft: '30px' }}>{element}</div>;
}

function App() {
  return (
    <>
      {MenuRouter.map(router => {
        const { path } = router;

        return (
          <li key={path}>
            <Link to={path}>{path.replace('/', '')}</Link>
          </li>
        );
      })}
      <Container />
    </>
  )
}

export default App
