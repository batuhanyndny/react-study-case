import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import BasketLogo from '../../Shared/BasketLogo';
import { StyledCart } from '../style';
import { RootState } from '../../../redux';
import Basket from '../../Basket';
import Modal from 'react-modal';
import useOnClickOutside from '../../../utils/useOnClickOutside';

Modal.setAppElement('#root');

const styles = {
  content: {
    padding: '0',
    inset: '0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    background: 'transparent',
    border: 'none',
  },
  overlay: {
    width: '100vw',
  },
};

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const [isOpen, setIsOpen] = useState(false);
  const basketRef = useRef(null);

  useOnClickOutside(basketRef, () => setIsOpen(false));

  return (
    <StyledCart
      data-cy="header-cart"
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <BasketLogo /> ₺ {cart.price}
      <Modal isOpen={isOpen} style={styles}>
        <Basket ref={basketRef} visible={isOpen} />
      </Modal>
    </StyledCart>
  );
};

export default Cart;
