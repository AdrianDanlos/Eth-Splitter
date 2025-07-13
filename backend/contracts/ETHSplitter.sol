// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ETHSplitter {
    address[] public recipients;
    uint256[] public percentages;

    constructor(address[] memory _recipients, uint256[] memory _percentages) {
        require(_recipients.length == _percentages.length, "Mismatched array lengths");
        
        uint256 total = 0;
        for (uint i = 0; i < _percentages.length; i++) {
            total += _percentages[i];
        }
        require(total == 100, "Total percentage must be 100");

        recipients = _recipients;
        percentages = _percentages;
    }

    // Triggers when someone sends plain Ether to the contract. No function call needed. Must be external payable
    receive() external payable {
        for (uint i = 0; i < recipients.length; i++) {
            uint256 amount = (msg.value * percentages[i]) / 100;
            payable(recipients[i]).transfer(amount);
        }
    }
}
