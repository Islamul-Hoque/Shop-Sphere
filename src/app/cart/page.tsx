
import Container from "@/components/Container";
import CartProducts from "@/components/cart/CartProducts"
import React from "react";

const CartPage = () => {
    return (
        <Container className="py-10">
            <CartProducts />
        </Container>
    );
};

export default CartPage;