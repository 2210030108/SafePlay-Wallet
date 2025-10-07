// SafePlay Wallet - Starknet Wallet Contract (Cairo 1)
// Minimal viable version for handling deposits, withdrawals, and transfers.

%lang starknet

from starknet::context import get_caller_address
from starknet::storage::storage import Storage
from starknet::contract::contract import ContractState
from starknet::math::uint256 import Uint256
from starknet::array::ArrayTrait

@storage_var
fn balances(owner: felt252, token: felt252) -> (Uint256) {}

@external
fn deposit(token: felt252, amount: Uint256) {
    let caller = get_caller_address();
    let current = balances::read(caller, token);
    let updated = current + amount;
    balances::write(caller, token, updated);
}

@external
fn withdraw(token: felt252, amount: Uint256) {
    let caller = get_caller_address();
    let current = balances::read(caller, token);
    assert(current >= amount, 'INSUFFICIENT_BALANCE');
    let updated = current - amount;
    balances::write(caller, token, updated);
}

@external
fn transfer(token: felt252, to: felt252, amount: Uint256) {
    let caller = get_caller_address();
    let caller_balance = balances::read(caller, token);
    assert(caller_balance >= amount, 'INSUFFICIENT_BALANCE');
    let receiver_balance = balances::read(to, token);

    balances::write(caller, token, caller_balance - amount);
    balances::write(to, token, receiver_balance + amount);
}

@view
fn get_balance(owner: felt252, token: felt252) -> (Uint256) {
    return (balances::read(owner, token));
}