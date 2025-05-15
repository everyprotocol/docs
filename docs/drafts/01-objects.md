# Objects

The OpenZeppelin documentation[^note] provides a clear explanation to help distinguish between token contracts and tokens:

> *Much of the confusion surrounding tokens comes from two concepts getting mixed up: token contracts and the actual tokens.*
>
> *A token contract is simply an Ethereum smart contract. "Sending tokens" actually means "calling a method on a smart contract that someone wrote and deployed." Essentially, a token contract is a mapping of addresses to balances, along with methods for adding or subtracting from those balances.*
>
> *These balances represent the tokens themselves. Someone "has tokens" when their balance in the token contract is non-zero. These balances could be considered money, game experience points, ownership deeds, or voting rights, with each type stored in different token contracts.*

In light of this, an ERC-721 token is a token defined by an ERC-721-compliant contract, which maintains a mapping between a token's ID, its owner and a URI pointing to its metadata. The structure of the mapping looks like this:

```plain
id => (owner, uri)
```
By comparison, an **object** is a token defined by a contract conforming to the object token standard. This contract maintains mappings for the object’s ID, its owner, and its state. Additionally, objects have a **position** property that tracks their location or relationship with other objects. This is managed by the **OOPS** (Object Operating and Positioning System), a core contract in the protocol. The mappings are as follows:

```plain
id => (owner, state)  // maintained by the set contract
id => pos             // maintained by OOPS
```

The state of an object is composed of two types of information:

1. **Metadata**: Information about the object’s revision, kind, and set objects.
1. **Elements**: The actual data that make up the object.


The address of the defining contract is stored as an information element within the object's set object, and is typically referred to as the **set contract**.

There is also another type of contract, executed on the Previous chain, responsible for computing the object's assets. The hash of this contract is stored as a material element of the object's kind, and it is commonly known as the **kind contract**.

## Representation

An object can be represented by the following structure.

```solidity
struct Object {
    uint256   owner;
    Meta      meta;
    bytes32[] elems;
    uint256   pos;
}
```

<div class="warning">
Note that this structure is pseudocode for illustration purposes. In practice, the pos property is handled by the OOPS contract, implemented by the protocol developer. Meanwhile, the other fields are handled by set contracts created by users, who have flexibility in how they manage the properties.
</div>

### id

The ID of an object is assigned by the set contract at the time of creation and must remain constant throughout the object's lifecycle. Although this field is essential, its implementation are left to the discretion of users.

### owner

The owner field is stored as a **uint256** to ensure compatibility with various universe chains. This allows for flexibility in managing ownership across different blockchains.

On Ethereum, ownership is typically represented by an **address** type. To convert an address into a uint256, the following Solidity code can be used:

```solidity
uint256(uint160(address(owner)));
```

The owner field is updated when an object is transferred. Additionally, ownership might change when an object becomes related or unrelated to other objects, or when it enters or exits a space or world, depending on how the governing contract (such as a relation, space, or world contract) is structured.

### meta

The meta field contains metadata about the object and is represented by a **Meta** structure, as defined below:

```solidity
struct Meta {
    uint32 flags;
    uint32 rev;
    uint32 kindRev;
    uint32 setRev;
    uint64 kind;
    uint64 set;
}
```

The fields of a Meta structure include:

- **flags**: Status flags of the object.
- **rev**: The revision number of the object.
- **kindRev**: The revision number of the object's kind object.
- **setRev**: The revision number of the object's set object.
- **kind**: The ID of the kind object, which defines the object's structure and behavior.
- **set**: The ID of the set object, where the object was created.

A Meta structure can be encoded into a `uint256` as follows:

```solidity
(uint256(meta.flags)   << 224) |
(uint256(meta.rev)     << 192) |
(uint256(meta.kindRev) << 160) |
(uint256(meta.setRev)  << 128) |
(uint256(meta.kind)    << 64)  |
 uint256(meta.set)
```

### elems

The elems field is an array of bytes32 values representing the elements of an object at a specific revision.

The length of this array and the interpretation of each element are governed by the `stateSpec` of the object's kind. The specific revision of the kind object is determined by the `meta.kind` and `meta.kindRev` fields.

### pos

The pos field is a uint256 value that records the object's location, along with additional associated information.

The lower 128 bits are reserved for the Position primitive, which specifies the object's exact location. The higher 128 bits store additional data. This allows the pos field to not only reflect spatial coordinates but also offer room for contextual data related to the operation.

The default value for pos is `0`, indicating that newly created objects initially reside in the void. As objects move, or become related to other objects, the pos field is updated to reflect their new location or relationship within the universe.

## Operations

Objects can undergo various operations, ranging from modifications to ownership and interactions with other objects. These operations are either unary (affecting a single object) or inter-operations (interactions between objects).

### Unary Operations

Unary operations are applied to individual objects and are defined by set contracts. These operations update specific fields related to the object's state or ownership.

| **Operation**  | **Description** | **Fields Affected** |
|----------------|-----------------|---------------------|
| **transfer**   | Transfers the ownership of the object. | `owner`|
| **update**     | Updates the elements of the object. | `meta.rev`, `elems` |
| **upgrade**    | Applies new versions of the object's kind and/or set. | `meta.rev`, `meta.kindRev`, `meta.setRev` |
| **touch**      | Increments the object's revision without changing state.  | `meta.rev` |

### Inter-Operations

Inter-operations involve interactions between objects, are governed by the OOPS contract. These operations can modify relationships, positioning, and movement between spaces and universes.

| **Operation**  | **Description** | **Fields Affected** |
|----------------|-----------------|---------------------|
| **move**       | Moves the object in space. | `pos` |
| **relate**     | Moves the object into a relation with another object.   | `meta.rev`, `pos`, `owner` |
| **unrelate**   | Moves the object out of a relation with another object. | `meta.rev`, `pos`, `owner` |
| **enter**      | Moves the object into a world.   | `pos`, `owner` |
| **leave**      | Moves the object out of a world. | `pos`, `owner` |
| **jump**       | Moves the object out of the current universe for another, verse-jumping. | `pos`, `owner` |
| **drop**       | Moves the object into the current universe from another, because of a verse-jumping. | `pos`, `owner` |

## Compatibility

Objects are a next-generation NFT standard, but they can easily be made compatible with previous NFTs. By implementing the interfaces required by prior standards (e.g., ERC-721 or ERC-1155) alongside those needed for a valid set contract, developers can ensure that objects function like traditional tokens and integrate seamlessly with existing wallets, marketplaces, and block explorers, all with minimal effort.

---

[^note]: https://docs.openzeppelin.com/contracts/5.x/tokens#but_first_coffee_a_primer_on_token_contracts
