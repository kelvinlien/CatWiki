import React from 'react';
import {HStack, Image, VStack} from "@chakra-ui/react";
import firstVerticalImage from "../../assets/image 2.png";
import secondVerticalImage from "../../assets/image 1.png";
import secondHorizontalImage from "../../assets/image 3.png";
import "./CatsCollage.css";

function CatsCollage() {
    return (
        <HStack>
            <VStack>
                <Image src={firstVerticalImage}/>
                <Image src={secondVerticalImage} className={"secondVerticalImage"}/>
            </VStack>
            <Image src={secondHorizontalImage} className={"secondHorizontalImage"}/>
        </HStack>
    );
}

export default CatsCollage;