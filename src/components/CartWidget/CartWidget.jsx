import { BsFillCartCheckFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div>
      <BsFillCartCheckFill size={30} color="white" />
      <span>5</span>
    </div>
  );
};

export default CartWidget;
