import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Box padding={5}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};