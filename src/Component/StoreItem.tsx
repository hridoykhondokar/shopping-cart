import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { formatCurrency } from '../Utilities/formatCurrency';
type StoreItemPoops = {
    id: number
    name: string
    imgUrl: string
    price: number
};

const StoreItem = ({ id, name, imgUrl, price }: StoreItemPoops) => {

    const {getItemsQuantity,increaseCartQuantity,decreaseCartQuantity,removeFromCart} = useShoppingCart()

    const quantity = getItemsQuantity(id);

    return (
        <>
            <Card>
                <Card.Img variant='top' src={imgUrl} height="200px" style={{
                    objectFit: 'cover'
                }}>
                </Card.Img>
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex align-items-center justify-content-between align-items-baseline mt-3">
                        <span className="fs-2">{name}</span>
                        <span className="text-muted ms-2">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div className="mt-auto">
                        {
                            quantity === 0 ?
                               ( <Button onClick={() => increaseCartQuantity(id)} className="w-100">+Add To Cart</Button>)
                                : (<div className=" d-flex align-items-center flex-column" style={{ gap: ".5rem" }}>
                                    <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
                                        <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                        <div>
                                          <span className="fs-3">{quantity}</span>In Cart
                                          </div>
                                        <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                                    </div>
                                    <Button onClick={() => removeFromCart(id)} variant="danger" size="sm">Remove</Button>
                                </div>)
                        }
                    </div>
                </Card.Body>
            </Card>
        </>
    );
};

export default StoreItem;