// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SimpleStorage {
    // basic is zero here
    uint256 favoriteNumber;

    mapping(string => uint256) public nameToFavNumber;

    struct People {
        uint favoriteNumber;
        string name;
    }

    People[] public people;

    // 0:Patric, 1: Vova,

    function store(uint256 _favNumber) public virtual {
        favoriteNumber = _favNumber;
    }

    // view pure
    function retrieve() public view returns (uint256) {
        return favoriteNumber;
    }

    // calldata - временные, которые нельзя изменять, memory - временные, которые можно изменять, storage- постоянные. Если мы не указываем тип, то он автоматически - storage.
    function addperson(string memory _name, uint _favNumber) public {
        People memory newPerson = People({
            favoriteNumber: _favNumber,
            name: _name
        });
        people.push(newPerson);
        nameToFavNumber[_name] = _favNumber;
    }
}
