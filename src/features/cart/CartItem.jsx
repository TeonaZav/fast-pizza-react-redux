import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";
import { getQuantityById } from "./cartSlice";
import { useSelector } from "react-redux";

CartItem.propTypes = {
  item: PropTypes.any,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const itemCurrentQuantityInCart = useSelector(getQuantityById(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={itemCurrentQuantityInCart}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
