pragma solidity ^0.4.18;

contract TokenFilmManager {
    struct TokenStruct {
        uint filmIndex; 
        uint filmBudget;
        uint filmIssueDate;
        uint filmMaturity;
        uint tokenPrice;
        uint tokenNumber;
        int tokenRecommend;
    }
    
    event logToken(
        uint filmIndex,
        uint filmBudget,
        uint filmIssueDate,
        uint filmMaturity,
        uint tokenPrice,
        uint tokenNumber,
        int tokenRecommend
    );
    
    mapping(uint => TokenStruct) tokenStructs; // uint is filmIndex
    uint[] filmIndexes;

    /* Constructor */
    function TokenFilmManager() public {
        // insertToken(filmIndex, filmBudget, filmIssueDate, filmMaturity, tokenPrice, tokenNumber, tokenRecommend)
        insertToken(4, 4000, 1500000000000 ,1520000000000, 10, 400, 0);
        insertToken(5, 2000, 1400000000000 ,1450000000000, 10, 200, 0);
    }

    // verify the existence of token
    function isToken(uint filmIndex) private constant returns(bool isIndeed) {
        if(filmIndexes.length == 0 || tokenStructs[filmIndex].filmIndex >= filmIndexes.length) return false;
        return (filmIndexes[tokenStructs[filmIndex].filmIndex] == filmIndex);
    }

    function insertToken(uint filmIndex, uint filmBudget, uint filmIssueDate, uint filmMaturity, uint tokenPrice, 
    uint tokenNumber, int tokenRecommend) public returns(uint index_filmIndexes) {
        if(isToken(filmIndex)) revert();

        tokenStructs[filmIndex].filmIndex = filmIndexes.push(filmIndex) - 1;
        tokenStructs[filmIndex].filmBudget = filmBudget;
        tokenStructs[filmIndex].filmIssueDate = filmIssueDate;
        tokenStructs[filmIndex].filmMaturity = filmMaturity;
        tokenStructs[filmIndex].tokenPrice = tokenPrice;
        tokenStructs[filmIndex].tokenNumber = tokenNumber;
        tokenStructs[filmIndex].tokenRecommend = 0;

        logToken(tokenStructs[filmIndex].filmIndex, filmBudget, filmIssueDate, filmMaturity, tokenPrice, tokenNumber, 0);

        return filmIndexes.length-1;
    }

    function getToken(uint filmIndex) public constant returns(uint index_filmIndexes, uint filmBudget, 
        uint filmMaturity, uint filmIssueDate, uint tokenPrice, uint tokenNumber, int tokenRecommend) {
        if(!isToken(filmIndex)) revert();
        return(
            tokenStructs[filmIndex].filmIndex, 
            tokenStructs[filmIndex].filmBudget,
            tokenStructs[filmIndex].filmIssueDate,
            tokenStructs[filmIndex].filmMaturity,
            tokenStructs[filmIndex].tokenPrice,
            tokenStructs[filmIndex].tokenNumber, 
            tokenStructs[filmIndex].tokenRecommend
        );
    }


    function updateToken(uint filmIndex, uint filmBudget, uint filmIssueDate, uint filmMaturity, uint tokenPrice, 
    uint tokenNumber) public returns(bool success) {
        if(!isToken(filmIndex)) revert();

        tokenStructs[filmIndex].filmBudget = filmBudget;
        tokenStructs[filmIndex].filmIssueDate = filmIssueDate;
        tokenStructs[filmIndex].filmMaturity = filmMaturity;
        tokenStructs[filmIndex].tokenPrice = tokenPrice;
        tokenStructs[filmIndex].tokenNumber = tokenNumber;

        logToken(tokenStructs[filmIndex].filmIndex, filmBudget, filmIssueDate, filmMaturity, tokenPrice, tokenNumber, 
        tokenStructs[filmIndex].tokenRecommend);
        return true;
    }

    function addOneTokenRecommend(uint filmIndex) public { tokenStructs[filmIndex].tokenRecommend++; }

    function minusOneTokenRecommend(uint filmIndex) public { tokenStructs[filmIndex].tokenRecommend--; }

    function deleteToken(uint filmIndex) public returns(bool success) {
        if(!isToken(filmIndex)) revert();

        uint rowToDelete = tokenStructs[filmIndex].filmIndex;
        uint keyToMove = filmIndexes[filmIndexes.length-1];
        filmIndexes[rowToDelete] = keyToMove;
        tokenStructs[keyToMove].filmIndex = rowToDelete;
        filmIndexes.length--;

        return true;
    }

    function getNumberToken() public constant returns(uint numberToken) {
        return filmIndexes.length;
    }

    function getByIndex_filmIndexes(uint index_filmIndexes) public constant returns(uint filmIndex) {
        return filmIndexes[index_filmIndexes];
    }
}