import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import QuestionPage1 from './components/QuestionPage1'
import QuestionPage2 from './components/QuestionPage2'
import QuestionPage3 from './components/QuestionPage3'
import QuestionPage4 from './components/QuestionPage4'
import QuestionPage5 from './components/QuestionPage5'
import Result from './components/ResultSection'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/QuestionPage1" component={QuestionPage1} />
      <Route exact path="/QuestionPage2" component={QuestionPage2} />
      <Route exact path="/QuestionPage3" component={QuestionPage3} />
      <Route exact path="/QuestionPage4" component={QuestionPage4} />
      <Route exact path="/QuestionPage5" component={QuestionPage5} />
      <Route exact path="/Result" component={Result} />
    </Switch>
  </BrowserRouter>
)

export default App
