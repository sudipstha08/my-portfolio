import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Greetings from './containers/Greetings'
import Skills from './containers/Skills'
import Proficiency from './containers/Proficiency'
import Education from './containers/Education'
import Experience from './containers/Experience'
import Projects from './containers/Projects'
import GithubProfile from './containers/GithubProfile'
import { BackToTop } from './components/BackToTop'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        exact
        render={() => (
          <>
            <Navigation />
            <Greetings />
            <Skills />
            <Proficiency />
            <Education />
            <Experience />
            <Projects />
            <GithubProfile />
            <BackToTop />
          </>
        )}
      />
    </Switch>
  </BrowserRouter>
)

export default App
