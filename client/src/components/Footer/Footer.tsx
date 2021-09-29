import { Box } from "@chakra-ui/react";
import React from "react";
import "./Footer.css"
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
export default function Footer(){
    return (
      <Box boxSize="sm" className="footerWrapper">
        <CatWikiLogo parentClass="footerLogo"/>
      </Box>
    );
}