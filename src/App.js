import "./App.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Switch, Route,Redirect } from "react-router-dom";
import { routes } from "./routes";
import PublicRoutes from "./routes/publicRoutes";
import PrivateRoutes from "./routes/privateRoutes";

function App() {
  
  return (
    <Layout>
      <Route 
       exact
       path="/"
       render={() => {
           return <Redirect to="/welcome"/> 
       }}
      />
      {routes.map((route) => {
       const Route = route.isPublic ? (
          <PublicRoutes path={route.path} exact component={route.component} />
        ) : (
          <PrivateRoutes path={route.path} exact component={route.component} />
        );
        return Route;
      })}
    </Layout>
  );
}

export default App;
