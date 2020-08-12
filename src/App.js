import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import styled from 'styled-components'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import { ROOT, FAVORITES } from './constants/pathes'

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Content>
          <Switch>
            <Route path={ROOT} exact component={Home} />
            <Route path={ROOT + FAVORITES} exact component={Favorites} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  /* height: 100vh; */
  font-size: 14px;
  font-family: Nexa, Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div``;

export default App;
