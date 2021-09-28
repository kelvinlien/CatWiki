import { Image,Box } from "@chakra-ui/react";
import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";
export default function Header(){
    return (
      <Box boxSize="sm" bg="" color="white">
        <Image src={CatLogo} alt="Cat header logo" boxSize="150px"/>
      </Box>
    );
}