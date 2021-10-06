import React from 'react';
import {Center, Image} from "@chakra-ui/react";
import DiscoveryImageLg from "../../assets/DiscoveryImagelg.png";
import DiscoveryImageMd from "../../assets/DiscoveryImagemd.png";
import DiscoveryImagesm from "../../assets/DiscoveryImagesm.png";
import "./DiscoveryImage.css"

function DiscoveryImage() {
    return (
        <Center className={"discoveryWrapper"}>
            <Image src={DiscoveryImageLg} alt={DiscoveryImageMd} className={"discoveryImage"}/>
        </Center>
    );
}

export default DiscoveryImage;