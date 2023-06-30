// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract MortgageContract {
    address admin; 
    uint256 publicArrayIndex;
    struct MortgageData {
        address ownerAddress;
        string lenderName;
        string lenderDescription;
        uint256 minimumAmount;
        uint256 maximumAmount;
        uint256 loanTerms;
        string products;
        string startDate;
        string interestRate;
        uint256 balance;
    }

    MortgageData[] internal MortgageDataArray;

    // Create Morgage array
    function createMortgage(
        string memory lenderName,
        string memory lenderDescription,
        uint256 minimumAmount,
        uint256 maximumAmount,
        uint256 loanTerms,
        string memory products,
        string memory startDate,
        string memory interestRate
    ) public {
        address owner = msg.sender;
        uint256 _balance;
        MortgageData memory newData = MortgageData(
            owner,
            lenderName,
            lenderDescription,
            minimumAmount,
            maximumAmount,
            loanTerms,
            products,
            startDate,
            interestRate,
            _balance
        );

        MortgageDataArray.push(newData);
    }

    // Viwing created mortgages
    function viewMorgages() public view returns (MortgageData[] memory) {
        return MortgageDataArray;
    }

    // Lender Deposit
    function depositFunctionForLender(uint256 _index) external payable {
        require(
            _index < MortgageDataArray.length,
            "Your index is greater than the array length"
        );
        uint256 oldBlance = MortgageDataArray[_index].balance;
        MortgageDataArray[_index].balance = oldBlance += msg.value;
    }

    // Lender withdraw
    function withdrawFunctionForLender(
        uint256 _amount,
        uint256 _index,
        address payable _address
    ) public {
        uint256 oldBlance = MortgageDataArray[_index].balance;
        MortgageDataArray[_index].balance = oldBlance -= _amount;
        _address.transfer(_amount);
    }

    // MortgagorsData *******************************************************************************************
    struct MortgagorsData {
        string fullName;
        string homePrice;
        string downPayment;
        uint256 loanAmount;
        uint256 loanTerm;
        string startDate;
        string status;
        string interestRate;
        address mortgagorAddress;
        address lenderAddress;
        uint256 scorePoint;
    }

    MortgagorsData[] internal MorgagorsDataArray;

    // Create Mortgagors
    function createMortgagor(
        string memory fullName,
        string memory homePrice,
        string memory downPayment,
        uint256 loanAmount,
        uint256 loanTerm,
        string memory startDate,
        string memory interestRate,
        address lenderAddress,
        uint256 scorePoint
    ) public {
        MortgagorsData memory newMortgagor = MortgagorsData(
            fullName,
            homePrice,
            downPayment,
            loanAmount,
            loanTerm,
            startDate,
            interestRate,
            "pending",
            msg.sender,
            lenderAddress,
            scorePoint
        );
        MorgagorsDataArray.push(newMortgagor);
    }

    function viewMortgagors() public view returns (MortgagorsData[] memory) {
        return MorgagorsDataArray;
    }

    // Approve or reject
    function loanUnderWaitingFunction(string memory _status, uint256 _index)
        public
    {
        require(
            _index < MorgagorsDataArray.length,
            "Morgagors not found. Index is freater than morgagors array"
        );
        MorgagorsDataArray[_index].status = _status;
    }

    function viewMyMortgagors() public {
        // Will be implement in the front end
        // Viewing mortaggors that has a lender addres of user
    }

    //  Get contract balance
    function contractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdrawAllFunds()  public payable{
        payable(admin).transfer(contractBalance());
    }
}
