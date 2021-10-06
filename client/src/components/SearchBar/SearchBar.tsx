import React from 'react';
import {Input, InputGroup, InputRightElement} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";
import "./SearchBar.css"

function SearchBar(props: any) {
    return (
        <InputGroup className={`searchGroup ${props.parentClass ? props.parentClass : ""}`}>
            <Input type={"text"} placeholder={props.placeholder} className={`customSearchInput`}/>
            <InputRightElement children={
                <SearchIcon color={"black.500"}/>
            }  className={"searchIcon"}/>
        </InputGroup>
    );
}

export default SearchBar;