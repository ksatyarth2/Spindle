pragma solidity ^0.7.0;
//SPDX-License-Identifier: MIT

//import "@openzeppelin/contracts/access/Ownable.sol"; //https://github.com/OpenZeppelin/openzeppelin-//contracts/blob/master/contracts/access/Ownable.sol

import {RedirectAll, ISuperToken, IConstantFlowAgreementV1, ISuperfluid} from "./RedirectAll.sol";

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract SpindleSuperApp is ERC721, RedirectAll {
    constructor(
        string memory name_,
        string memory symbol_,
        ISuperfluid host,
        IConstantFlowAgreementV1 cfa,
        ISuperToken acceptedToken,
        address receiver
    ) ERC721(name_, symbol_) RedirectAll(host, cfa, acceptedToken, receiver) {}

    function _beforeTokenTransfer(
        address, /*from*/
        address to,
        uint256 /*tokenId*/
    ) internal override {
        _changeReceiver(to);
    }
}
