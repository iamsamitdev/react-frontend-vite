import {Route, Switch} from 'react-router-dom'
import AuthLayout from './components/layouts/AuthLayout'
import FrontLayout from './components/layouts/FrontLayout'
import About from './pages/frontend/about/About'
import Forgotpassword from './pages/frontend/forgotpassword/Forgotpassword'
import Home from './pages/frontend/home/Home'
import Login from './pages/frontend/login/Login'
import PageNotFound from './pages/frontend/pagenotfound/PageNotFound'
import Project from './pages/frontend/project/Project'
import Register from './pages/frontend/register/Register'
import Team from './pages/frontend/team/Team'

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
   <Route {...rest} render={ props => (
        <Layout><Component {...props}></Component></Layout> 
   )}></Route>
)

const Routes = () => {
    return (
        <Switch>

            {/* Frontend */}
            <AppRoute path="/" exact={true} layout={FrontLayout} component={Home} />
            <AppRoute path="/about" layout={FrontLayout} component={About} />
            <AppRoute path="/teams" layout={FrontLayout} component={Team} />
            <AppRoute path="/projects" layout={FrontLayout} component={Project} />

            {/* Authen */}
            <AppRoute path="/login" layout={AuthLayout} component={Login} />
            <AppRoute path="/register" layout={AuthLayout} component={Register} />
            <AppRoute path="/forgotpassword" layout={AuthLayout} component={Forgotpassword} />

            {/* Backend */}
    
             {/* Pagenotfound */}
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes
