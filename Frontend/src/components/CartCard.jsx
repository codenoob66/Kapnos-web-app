import { Container, Image, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { useCartStore } from "../cart/cart";

const CartCard = () => {
  const { cart } = useCartStore();
  return (
    <Container>
      <VStack>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Items in your cart🚀
        </Text>
        {cart.map((item) => (
          <Box>
            <Image
              src={item.image}
              alt={item.name}
              h={48}
              w="full"
              objectFit="cover"
            />
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </Box>
        ))}
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
      </VStack>
    </Container>
  );
};

export default CartCard;
