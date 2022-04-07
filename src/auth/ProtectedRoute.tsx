import { ComponentType } from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Loading from 'components/common/Loading/Loading';

type ProtectedRouteProps = {
  component: ComponentType;
  [key: string]: any;
};

const ProtectedRoute = ({ component, ...propsForComponent }: ProtectedRouteProps) => {
  const Cp = withAuthenticationRequired(component, {
    onRedirecting: () => <Loading />,
  });
  return <Cp {...propsForComponent} />;
};

export default ProtectedRoute;
