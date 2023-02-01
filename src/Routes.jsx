import {Route, Switch} from 'react-router-dom'

// Layouts
import AuthLayout from './components/layouts/AuthLayout'
import FrontLayout from './components/layouts/FrontLayout'
import AdminLayout from './components/layouts/AdminLayout'

// Frontend Pages
import About from './pages/frontend/about/About'
import Forgotpassword from './pages/frontend/forgotpassword/Forgotpassword'
import Home from './pages/frontend/home/Home'
import Login from './pages/frontend/login/Login'
import PageNotFound from './pages/frontend/pagenotfound/PageNotFound'
import Project from './pages/frontend/project/Project'
import Register from './pages/frontend/register/Register'
import Team from './pages/frontend/team/Team'

// Backend Pages
import Dashboard from './pages/backend/dashboard/Dashboard'
import Reststrapi from './pages/backend/reststrapi/Reststrapi'
import AddProduct from './pages/backend/reststrapi/AddProduct'


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
            <AppRoute path="/dashboard" layout={AdminLayout} component={Dashboard} />
            <AppRoute path="/reststrapi" layout={AdminLayout} component={Reststrapi} />
            <AppRoute path="/addproduct" layout={AdminLayout} component={AddProduct} />
    
             {/* Pagenotfound */}
            <Route component={PageNotFound} />
        </Switch>
    )
}

export default Routes
