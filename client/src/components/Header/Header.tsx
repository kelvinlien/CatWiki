import { Box } from "@chakra-ui/react";
import React from "react";
import "./Header.css"
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
export default function Header(){
    return (
      <Box boxSize="sm">
        <CatWikiLogo parentClass="headerLogo"/>
      </Box>
    );
}