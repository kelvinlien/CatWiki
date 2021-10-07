import React from 'react';
import {Box} from "@chakra-ui/react";
import "./DiscoverySection.css"
import DiscoveryImage from "../DiscoveryImage/DiscoveryImage";

function DiscoverySection(props: any) {
    return (
        <Box className={"discoverySectionWrapper"}>
            <DiscoveryImage />
        </Box>
    );
}

export default DiscoverySection;