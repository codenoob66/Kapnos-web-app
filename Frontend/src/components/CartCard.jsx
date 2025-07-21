import { Container } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useCartStore } from "../cart/cart";

const CartCard = () => {
  const { cart } = useCartStore();
  return (
    <Container>
      {cart.length === 0 && (
        <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight="bold"
          color="gray.500"
        >
          Your Cart is empty 😢{" "}
          <Link to={"/"}>
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              Please add items to your cart
            </Text>
          </Link>
        </Text>
      )}
    </Container>
  );
};

export default CartCard;
