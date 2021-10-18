import React from 'react';
import {HStack, Text} from "@chakra-ui/react";
import {ArrowForwardIcon} from "@chakra-ui/icons";
import "./ButtonLink.css";

interface ButtonLinkProps{
    text: string;
}

function ButtonLink(props: ButtonLinkProps) {
    return (
        <HStack spacing={6}>
            <Text className={"seeMoreText"}>{props.text}</Text>
            <ArrowForwardIcon className={"seeMoreIcon"}/>
        </HStack>
    );
}

export default ButtonLink;