import { Button } from "@material-ui/core";

//types
import { CartItemType } from "../App";

//
import { Wrapper } from "./item.style";

type props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <h3>{item.price}</h3>
        </div>
        <Button onClick={() => handleAddToCart(item)} >Add to Cart</Button>
    </Wrapper>
)

export default Item;