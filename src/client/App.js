import React from 'react'
import loadable from '@loadable/component'
import './main.css'
import { Switch, Route, Link } from 'react-router-dom'

const About = loadable(() => import(/* webpackChunkName: 'About', webpackPrefetch: true */ './pages/About'))
const Home = loadable(() => import(/* webpackChunkName: 'Home', webpackPrefetch: true */ './pages/Home'))
const Users = loadable(() => import(/* webpackChunkName: 'Users', webpackPrefetch: true */ './pages/Users'))

const App = () => (
    <div>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
)

export default App
