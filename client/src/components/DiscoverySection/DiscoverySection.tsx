import React from 'react';
import {Box, Center, Text} from "@chakra-ui/react";
import "./DiscoverySection.css"

function DiscoverySection(props: any) {
    return (
        <Center>
            <Box className={"discoverySectionWrapper"}>
                <Text className={"mostSearchText"}>Most Searched Breeds</Text>
                <Box className={"mostSearchDivider"}>
                    <hr/>
                </Box>
            </Box>
        </Center>
    );
}

export default DiscoverySection;