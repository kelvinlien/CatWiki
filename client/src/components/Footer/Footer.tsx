import {Text, HStack, Wrap, WrapItem} from "@chakra-ui/react";
import React from "react";
import "./Footer.css"
import CatWikiLogo from "../CatWikiLogo/CatWikiLogo";
export default function Footer(){
    return (
      <Wrap className="footerWrapper" justify={"space-between"}>
          <WrapItem>
              <CatWikiLogo parentClass="footerLogo"/>
          </WrapItem>
          <WrapItem>
              <Text className={"footerCredit"}>
                  © created by <strong>Winston</strong> - devChallenge.io 2021
              </Text>
          </WrapItem>
      </Wrap>
    );
}