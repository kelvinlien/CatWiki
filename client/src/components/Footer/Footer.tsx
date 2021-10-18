import {Text, HStack} from "@chakra-ui/react";
import React from "react";
import "./Footer.css"
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
export default function Footer(){
    return (
      <HStack className="footerWrapper" justify={"space-between"}>
        <CatWikiLogo parentClass="footerLogo"/>
          <Text className={"footerCredit"}>
              © created by <strong>Winston</strong> - devChallenge.io 2021
          </Text>
      </HStack>
    );
}