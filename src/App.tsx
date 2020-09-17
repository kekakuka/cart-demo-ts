import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProductPage from './product';
import Drawer from './Drawer';
import { Provider } from 'react-redux';
import store from './store';
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Drawer />
      <Container className={classes.container}>
        <ProductPage />
      </Container>
    </Provider>
  );
};

export default App;
