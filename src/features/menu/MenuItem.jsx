import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import DeleteItem from "../cart/DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import { addItem, getQuantityById } from "../cart/cartSlice";
import PropTypes from "prop-types";

MenuItem.propTypes = {
  pizza: PropTypes.any,
};
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  const itemCurrentQuantityInCart = useSelector(getQuantityById(id));
  const isInCart = itemCurrentQuantityInCart > 0;

  function handleAddToCart() {
    console.log(id);
    const newItem = {
      pizzaId: id,
      name: name,
      unitPrice: unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={soldOut ? "w-24 opacity-70 grayscale" : "w-24"}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex gap-4">
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={itemCurrentQuantityInCart}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
