//SPDX-License-Identifier: MIT


pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract mynft is ERC721 {
    constructor() ERC721("mynft" , "symbol"){
        //mint 1 nft for myself
        _mint(msg.sender , 1);


    }
    //create an erc721 contract
    //mine some nft
}