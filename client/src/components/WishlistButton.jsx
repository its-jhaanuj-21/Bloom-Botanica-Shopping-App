import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWishlistItem, removeWishlistItem } from '../store/wishlistSlice';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const WishlistButton = ({ productId }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);
  const isWishlisted = wishlist.some(item => item.productId._id === productId);

  const toggleWishlist = () => {
    if (isWishlisted) {
      dispatch(removeWishlistItem(productId));
    } else {
      dispatch(addWishlistItem(productId));
    }
  };

  return (
    <button onClick={toggleWishlist} className='text-xl'>
      {isWishlisted ? <FaHeart className='text-red-500' /> : <FaRegHeart />}
    </button>
  );
};

export default WishlistButton;
