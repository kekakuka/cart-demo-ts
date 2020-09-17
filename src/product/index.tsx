import React from 'react';
import { products, Product } from '../model/products';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardContent, Box, Typography, Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import action from '../store/action';
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '5vh',
  },
}));
interface ProductListProps {
  add_to_cart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ add_to_cart }) => {
  const classes = useStyles();

  const handleAddToCart = (product: Product) => {
    add_to_cart(product);
  };
  return (
    <Container className={classes.container}>
      <Grid container spacing={2}>
        {products.map((product, index) => (
          <Grid key={index} item xs={6} md={3}>
            <Card>
              <CardContent>
                <img src={product.image} alt='product' />
                <Box>
                  <Typography variant='subtitle1' component='div'>
                    {product.name}
                  </Typography>
                  <Box>
                    <Typography variant='subtitle1' component='div'>
                      {'$' + Number(product.price).toFixed(2)}
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    onClick={(e) => {
                      handleAddToCart(product);
                    }}
                  >
                    <ShoppingCartIcon />
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default connect(null, action.cart)(ProductList);
