import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput.tsx";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

interface Props {
  onSubmit: (data: FieldValues) => void;
}

type FormData = {
  username: string;
  email: string;
  password: string;
  password_repeat: string;
};

export const Login = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <>
      <Container padding={6}>
        <Heading size="3xl" textAlign="center" marginY={5}>
          Login
        </Heading>
        <HStack marginBottom={3} justifyContent="center">
          <Text>You don't have an account yet?</Text>
          <ChakraLink to="/register" as={Link}>
            Register now!
          </ChakraLink>
        </HStack>

        <Box marginY={5}>
          <form onSubmit={handleSubmit((data) => onSubmit(data))}>
            <FormControl marginY={4}>
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register("username")} />
              <FormHelperText>
                You can also use your email address.
              </FormHelperText>
            </FormControl>
            <FormControl marginY={4}>
              <FormLabel>Password</FormLabel>
              <PasswordInput
                placeholder="Enter password"
                register={register("password")}
              />
            </FormControl>
            <Button type="submit" colorScheme="green">
              Submit
            </Button>
          </form>
        </Box>
      </Container>
    </>
  );
};
