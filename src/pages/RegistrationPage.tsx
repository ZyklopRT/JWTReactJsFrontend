import { Registration } from "../components/auth/Registration.tsx";
import useRegisterUser from "../hooks/useRegisterUser.ts";
import { Text } from "@chakra-ui/react";

const RegistrationPage = () => {
  const mutation = useRegisterUser();

  if (mutation.isLoading) <Text>Loading...</Text>;

  if (mutation.isError) <Text>{mutation.error.message}</Text>;

  return (
    <>
      <Registration
        onSubmit={(data) =>
          mutation.mutate({
            username: data.username,
            email: data.email,
            password: data.password,
          })
        }
      ></Registration>
    </>
  );
};

export default RegistrationPage;
