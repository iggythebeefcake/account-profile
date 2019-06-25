import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Navbar from './components/shared/Navbar';
import AccountProfile from './components/account/AccountProfile';

const App = () => (
<>
  <Navbar />
  <Container>
    <Switch>
      <Route exact path='/' render={ () => <div>Home</div> } />
      <Route exact path='/account/profile' component={AccountProfile} />
    </Switch>
  </Container>
</>
)

export default App;
