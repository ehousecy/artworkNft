pragma solidity ^0.7.6;

import {SponsorWhitelistControl} from "./whitelist.sol";

//    @title conflux internal handler
//    @dev InternalHandler is used to config smart contracts with initial configuration

library  InternalHandler {
    SponsorWhitelistControl public constant SPONSOR_CONTROL =
    SponsorWhitelistControl(0x0888000000000000000000000000000000000001);
}
