import { Box, Container, Heading, Text, Stack, Image, SimpleGrid, Flex, Icon, Button } from "@chakra-ui/react";
import { FaInstagram, FaEtsy, FaFacebook, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Stack spacing={5}>
        <Heading as="h1" size="2xl" textAlign="center" style={{ fontFamily: "'UnifrakturMaguntia', cursive" }}>
          Caro&Co
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Unique. Bold. Beautiful.
        </Text>
        <Box align="center">
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1600427150683-348f588e815c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMGpld2VscnklMjBhcnRpc3QlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MDk2MTMxODh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Jewelry Artist" />
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <ProductCard imageQuery="handmade necklace" title="Necklaces" description="Stunning necklaces that make a statement." />
          <ProductCard imageQuery="handmade earrings" title="Earrings" description="Daring and delightful earrings for any occasion." />
          <ProductCard imageQuery="handmade bracelet" title="Bracelets" description="Chic bracelets to complement your style." />
        </SimpleGrid>
        <Flex justifyContent="center" mt={10}>
          <SocialButton label="Instagram" icon={FaInstagram} />
          <SocialButton label="Etsy" icon={FaEtsy} />
          <SocialButton label="Facebook" icon={FaFacebook} />
          <SocialButton label="Contact" icon={FaEnvelope} />
        </Flex>
      </Stack>
    </Container>
  );
};

const ProductCard = ({ imageQuery, title, description }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Image src={`https://placehold.co/600x400`} alt={title} borderRadius="md" />
      <Heading fontSize="xl" mt={4}>
        {title}
      </Heading>
      <Text mt={2}>{description}</Text>
    </Box>
  );
};

const SocialButton = ({ label, icon }) => {
  return (
    <Button leftIcon={<Icon as={icon} />} colorScheme="teal" variant="outline" m={2}>
      {label}
    </Button>
  );
};

export default Index;
