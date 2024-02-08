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
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import PasswordInput from "./PasswordInput.tsx";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

interface Props {
  onSubmit: (data: FormData) => void;
}

type FormData = {
  username: string;
  email: string;
  password: string;
  password_repeat: string;
};

export const Registration = ({ onSubmit }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <>
      <Container padding={6}>
        <Heading size="3xl" textAlign="center" marginY={5}>
          Register
        </Heading>
        <HStack marginBottom={3} justifyContent="center">
          <Text>You already have an account?</Text>
          <ChakraLink to="/login" as={Link}>
            Login here!
          </ChakraLink>
        </HStack>

        <Box marginY={5}>
          <form
            onSubmit={handleSubmit((data) => {
              if (data.password !== data.password_repeat) return;
              onSubmit(data);
            })}
          >
            <FormControl marginY={4}>
              <FormLabel>Username</FormLabel>
              <Input type="text" {...register("username")} />
            </FormControl>
            <FormControl marginY={4}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" {...register("email")} />
            </FormControl>
            <FormControl marginY={4}>
              <FormLabel>Password</FormLabel>
              <PasswordInput
                placeholder="Enter password"
                register={register("password")}
              />
            </FormControl>
            <FormControl marginY={4}>
              <FormLabel>Repeat Password</FormLabel>
              <PasswordInput
                placeholder="Repeat password"
                register={register("password_repeat")}
              />
              <FormHelperText>We'll never share your data.</FormHelperText>
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
