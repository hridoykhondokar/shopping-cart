import { Offcanvas, OffcanvasBody, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../Context/ShoppingCartContext";
import { formatCurrency } from "../Utilities/formatCurrency";
import CartItems from "./CartItems";
import storeItems from '../Data/items.json'

type ShoppingCartPoops = {
    isOpen: boolean
}
const ShoppingCart = ({ isOpen }: ShoppingCartPoops) => {

    const { closeCart, cartItems } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <h1>Cart</h1>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Header>
                <Offcanvas.Body>
                    <Stack gap={3}>
                        {cartItems.map(item => (
                            <CartItems key={item.id} {...item} />))}
                  <div className="ms-auto">
                    Total {formatCurrency(cartItems.reduce((total, cartItems) => {
                        const item = storeItems.find(i => i.id === cartItems.id)
                        return total + (item?.price || 0) * cartItems.quantity
                    }, 0)
                    )}
                  </div>
                    </Stack>
                </Offcanvas.Body>


            </Offcanvas.Header>
        </Offcanvas >
    );
};

export default ShoppingCart;