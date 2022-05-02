import { DarkModeContext } from 'context/darkMode';
import AuthLayout from 'layouts/AuthLayout';
import PrivateLayout from 'layouts/PrivateLayout';
import PublicLayout from 'layouts/PublicLayout';
import Admin from 'pages/admin/Index';
import Clientes from 'pages/admin/Clientes';
import Vehiculos from 'pages/admin/Vehiculos';
import Test from 'pages/Test';
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    console.log('modo dark:', darkMode);
  }, [darkMode]);

  return (
    <div className='App'>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }} >
        <Router>
          <Switch>
            <Route path={['/admin', '/admin/vehiculos', '/admin/clientes', '/test']} >
              <PrivateLayout>
                <Switch>
                  <Route path='/admin/vehiculos'>
                    <Vehiculos />
                  </Route>
                  <Route path='/admin/clientes'>
                    <Clientes />
                  </Route>
                  <Route path='/test'>
                    <Test />
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
    </div>
  );
}

export default App;
