import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import storeItems from '../Data/items.json'
import { formatCurrency } from '../Utilities/formatCurrency';


type CartItemsPoops = {
    id: number
    quantity: number
}

const CartItems = ({ id, quantity }: CartItemsPoops) => {

    const { removeFromCart } = useShoppingCart();

    const item = storeItems.find(i => i.id === id)
    if (item == null) return null;

    console.log(item)

    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img src={item.imgUrl} style={{ width: 125, height: 70, objectFit: "cover" }} alt="" />

            <div className="me-auto">
                <div>
                    {item.name} {
                        quantity > 1 && <span className="text-muted" style={{ fontSize: ".65rem" }}>x{quantity}</span>
                    }
                </div>
                <div className="text-muted" style={{ fontSize: ".75rem" }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
                {formatCurrency(item.price * quantity)}
            </div>

          <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item.id)}>&times;</Button>
        </Stack>
    );
};

export default CartItems;