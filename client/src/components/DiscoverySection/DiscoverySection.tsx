import React from 'react';
import {Box, Center, HStack, Text} from "@chakra-ui/react";
import "./DiscoverySection.css"
import ImagesRow from "../ImagesRow/ImagesRow";
import ButtonLink from "../ButtonLink/ButtonLink";

function DiscoverySection(props: any) {
    return (
        <Center>
            <Box className={"discoverySectionBackground"}>
                <Box className={"discoverySectionWrapper"}>
                    <Text className={"mostSearchText"}>Most Searched Breeds</Text>
                    <Box className={"mostSearchDivider"}>
                        <hr/>
                    </Box>
                    <HStack className={"discoveryIntroductionSection"} justify={"space-between"}>
                        <Text className={"discoveryIntroductionText"}>66+ Breeds For you to discover</Text>
                        <ButtonLink text={"SEE MORE"}/>
                    </HStack>
                    <ImagesRow/>
                </Box>
            </Box>
        </Center>
    );
}

export default DiscoverySection;