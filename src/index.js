import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Switch } from 'react-router';
import SignIn from './Authentication/Login';
import routes from './Routes/routes';
import { getUserRole } from './Authentication/authService';

function App() {
  const userRole = getUserRole();

  return (
    <Router>
      <Switch>
        <Route path="/" element={<SignIn />} />
        {routes.map((route, index) => {
          if (userRole === route.role) {
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.component />}
              />
            );
          } else {
            return null;
          }
        })}
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;