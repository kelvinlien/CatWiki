import React from 'react';
import { Wrap, WrapItem } from "@chakra-ui/react"
export default function Credit(props: any){
    return(
        <Wrap className={`${props.parentClass ? props.parentClass : ''}`}>
            <WrapItem>
                ©
            </WrapItem>
            <WrapItem>
                created by Winston - devChallenge.io 2021
            </WrapItem>
        </Wrap>
    );
}