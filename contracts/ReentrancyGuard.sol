pragma solidity ^0.7.6;

//  @title ReentrancyGuard
//  @dev Exposes a modifier that guards a function against reentrancy
contract ReentrancyGuard {

    uint private _guardValue;

    modifier nonReentrant(){
        require(_guardValue == 0, "REENTRANCY");
        _guardValue = 1;
        _;
        _guardValue = 0;
    }
}
