import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as S from './App.styled';
import GlobalStyled from './styles/global';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { ROUTE } from './constants';

import RouteWithLayout from './hoc/RouteWithLayout';
import FormLayout from './components/common/FormLayout';
import Header from './components/Header';
import Home from './page/Home';
import Login from './page/Login';
import Signup from './page/Signup';
import Banner from './components/Banner';
import { useSelector } from 'react-redux';

function App() {
  const bannerProps = useSelector(state => state.banner);
  return (
    <S.App>
      <GlobalStyled />
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <S.Main>
            <Switch>
              <Route exact path={ROUTE.HOME} component={Home} />
              <RouteWithLayout
                exact
                path={ROUTE.LOGIN}
                component={Login}
                layout={FormLayout}
              />
              <RouteWithLayout
                exact
                path={ROUTE.SIGN_UP}
                component={Signup}
                layout={FormLayout}
              />
            </Switch>
          </S.Main>
        </Router>
        <Banner {...bannerProps} />
      </ThemeProvider>
    </S.App>
  );
}

export default App;
