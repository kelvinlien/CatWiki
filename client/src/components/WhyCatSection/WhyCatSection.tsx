import React from 'react';
import {Box, Heading, HStack, Text, VStack} from "@chakra-ui/react";
import CatsCollage from "../CatsCollage/CatsCollage";
import "./WhyCatSection.css";
import ButtonLink from "../ButtonLink/ButtonLink";

function WhyCatSection() {
    return (
        <HStack justify={"space-evenly"} className={"whyCatWrapper"}>
            <VStack align={"flex-start"} w={"500px"}>
                <Box className={"whyCatDivider"}>
                    <hr/>
                </Box>
                <Heading as="h1" className={"whyCatHeading"}>
                    Why should you have a cat?
                </Heading>
                <Text className={"whyCatParagraph"}>
                    Having a cat around you can actually trigger the release of calming chemicals in your body
                    which lower your stress and anxiety levels
                </Text>
                <ButtonLink text={"READ MORE"}/>
            </VStack>
            <CatsCollage/>
        </HStack>
    );
}

export default WhyCatSection;