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
      redirectUri='http://localhost:3000/admin'
      audience='api-auth-concesionario-mintic'
    >
      <div className='App'>
        <UserContext.Provider value={{userData, setUserData}}>
          <DarkModeContext.Provider value={{ darkMode, setDarkMode }} >
            <Router>
              <Switch>
                <Route path={['/admin', '/admin/vehiculos', '/admin/clientes', '/admin/ventas', '/admin/usuarios']} >
                  <PrivateLayout>
                    <Switch>
                      <Route path='/admin/vehiculos'>
                        <Vehiculos />
                      </Route>
                      <Route path='/admin/clientes'>
                        <Clientes />
                      </Route>
                      <Route path='/admin/ventas'>
                        <Ventas />
                      </Route>
                      <Route path='/admin/usuarios'>
                        <Usuarios />
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
