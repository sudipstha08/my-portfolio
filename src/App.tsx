import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Navigation, BackToTop } from "./components"
import {
  Greetings,
  Skills,
  Proficiency,
  Education,
  Experience,
  Projects,
  GithubProfile,
} from "./containers"

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
