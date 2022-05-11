import { DarkModeContext } from 'context/darkMode';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Clientes';
import Usuarios from 'pages/admin/Usuarios';
import Vehiculos from 'pages/admin/Vehiculos';
import Ventas from 'pages/admin/Ventas';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { UserContext } from 'context/userContext';
import PrivateRoute from 'components/PrivateRoute';
import PrivateComponent from 'components/PrivateComponent';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    //console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <Auth0Provider
      domain="misiontic-concesionario-personal.us.auth0.com"
      clientId="4vwVf1aGGdJrMZgSPAAVXUmWSodxmlbT"
      redirectUri='https://salty-fjord-61443.herokuapp.com/admin'
      audience='api-auth-concesionario-mintic'
    >
      <div className='App'>
        <UserContext.Provider value={{ userData, setUserData }}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }} >
            <Router>
              <Switch>
                <Route path={['/admin', '/admin/vehiculos', '/admin/clientes', '/admin/ventas', '/admin/usuarios']} >
                  <PrivateLayout>
                    <Switch>
                      <Route path='/admin/vehiculos'>
                        <PrivateRoute roleList={['admin']}>
                          <Vehiculos />
                        </PrivateRoute>
                      </Route>
                      <Route path='/admin/clientes'>
                        <Clientes />
                      </Route>
                      <Route path='/admin/ventas'>
                        <PrivateComponent roleList={['admin', 'vendedor']}>
                          <Ventas />
                        </PrivateComponent>
                      </Route>
                      <Route path='/admin/usuarios'>
                        <PrivateComponent roleList={['admin']}>
                          <Usuarios />
                        </PrivateComponent>
                      </Route>
                      <Route path='/admin'>
                        <Admin />
                      </Route>
                    </Switch>
                  </PrivateLayout>
                </Route>
                <Route path={['/login', '/registro']}>
                  <AuthLayout>
                    <Switch>
                      <Route path='/login'>
                        <Login />
                      </Route>
                      <Route path='/registro'>
                        <Registro />
                      </Route>
                    </Switch>
                  </AuthLayout>
                </Route>
                <Route path={['/']}>
                  <PublicLayout>
                    <Route path='/'>
                      <Index />
                    </Route>
                  </PublicLayout>
                </Route>
              </Switch>
            </Router>
          </DarkModeContext.Provider>
        </UserContext.Provider>
      </div>
    </Auth0Provider>
  );
}

export default App;
