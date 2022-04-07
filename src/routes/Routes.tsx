import ProtectedRoute from '../auth/ProtectedRoute';
import React from 'react';
import { Routes as SwitchRoutes, Route } from 'react-router-dom';
import paths from './paths';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/common/Loading/Loading';

const Home = React.lazy(() => import('pages/Home/Home'));
const CodeEditor = React.lazy(() => import('pages/CodeEditor/CodeEditor'));

function Routes() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <SwitchRoutes>
      <Route path={paths.home} element={<Home />} />

      <Route path={paths.codeEditor} element={<ProtectedRoute component={CodeEditor} />} />
    </SwitchRoutes>
  );
}
export default Routes;
