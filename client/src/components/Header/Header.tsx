import { Image,Box } from "@chakra-ui/react";
import React from "react";
import CatLogo from "../../assets/CatwikiLogo.svg";
import "./Header.css"
export default function Header(){
    return (
      <Box boxSize="sm">
        <Image src={CatLogo} alt="Cat header logo" class="headerLogo"/>
      </Box>
    );
}