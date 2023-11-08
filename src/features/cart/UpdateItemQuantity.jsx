import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increaseItemQuantity, decreaseItemQuantity } from "./cartSlice";
import PropTypes from "prop-types";

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.any,
  currentQuantity: PropTypes.number,
};

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleIncrease() {
    dispatch(increaseItemQuantity(pizzaId));
  }
  function handleDecrease() {
    dispatch(decreaseItemQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handleIncrease}>
        +{" "}
      </Button>
      {currentQuantity}
      <Button type="round" onClick={handleDecrease}>
        -{" "}
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
