import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Box,
  Button,
  Drawer,
  Badge,
  Hidden,
} from '@material-ui/core';
import { connect } from 'react-redux';
import action from '../store/action';
import { calculateTotalPrice } from '../utils/cartFunctions';
import { ListItem } from '../model/products';

import { RootState } from '../store/reducer';

const useStyles = makeStyles({
  list: {
    width: '85vw',
    maxWidth: 600,
  },
  fullList: {
    width: 'auto',
  },
});

interface ShoppingCartProps {
  listItems: ListItem[];
  total: number;
  remove_from_cart: (id: number) => void;
  clear_cart: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = (props) => {
  const { listItems, remove_from_cart, clear_cart, total } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => {
    setOpen(open);
  };

  const list = () => (
    <div
      className={classes.list}
      onClick={() => {
        toggleDrawer(false);
      }}
    >
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Name</TableCell>
            <Hidden smDown>
              <TableCell align='left'>Price</TableCell>
              <TableCell align='left'>Quantity</TableCell>
            </Hidden>
            <TableCell align='left'>Sub</TableCell>
            <TableCell align='left'>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listItems.map((item, index) => {
            const { name, price, quantity, id } = item;
            return (
              <TableRow key={index}>
                <TableCell>{name}</TableCell>
                <Hidden smDown>
                  <TableCell>${Number(price).toFixed(2)}</TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>${Number(price * quantity).toFixed(2)}</TableCell>
                </Hidden>
                <Hidden mdUp>
                  <TableCell>
                    ${Number(price).toFixed(2)}*{quantity}
                  </TableCell>
                </Hidden>
                <TableCell>
                  <Button
                    color='primary'
                    variant='contained'
                    onClick={(e) => {
                      e.stopPropagation();
                      remove_from_cart(id);
                    }}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Box style={{ width: '100%', marginLeft: '60%', marginTop: 30 }}>
        <Button
          size='small'
          color='secondary'
          variant='contained'
          onClick={(e) => {
            e.stopPropagation();
            clear_cart();
          }}
        >
          Clear Cart
        </Button>
      </Box>
      <Box style={{ width: '100%', marginLeft: '60%', marginTop: 30 }}>
        TOTAL: ${Number(calculateTotalPrice(listItems)).toFixed(2)}
      </Box>
    </div>
  );

  return (
    <Box key={'right'} style={{ position: 'fixed' }}>
      <Button
        style={{ marginTop: 20 }}
        onClick={() => {
          toggleDrawer(true);
        }}
      >
        <Badge badgeContent={total} color='primary'>
          <ShoppingCartIcon />
        </Badge>
      </Button>
      <Drawer
        open={open}
        onClose={() => {
          toggleDrawer(false);
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default connect((state: RootState) => state.cart, action.cart)(ShoppingCart);
