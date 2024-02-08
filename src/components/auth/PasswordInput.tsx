import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  placeholder: string;
  register: UseFormRegisterReturn;
}

const PasswordInput = ({ placeholder, register }: Props) => {

  const [show, setShow] = useState(false);

  return (
    <>
      <InputGroup>
        <Input
          pr="4.5rem"
          placeholder={placeholder}
          type={(show) ? "text" : "password"}
          {...register}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
            {(show) ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default PasswordInput;