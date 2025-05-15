# Elements

Elements are the building blocks of an object. There are four categories of elements:
- **Matter** — media and content
- **Value** — fungible tokens
- **Unique** — non-fungible tokens (NFTs)
- **Info** — arbitrary data

## Matter

Matters are cryptographically committed data stored on the Every Network. Each object that uses a matter element references it by its hash.

The structure of a matter is:

```
matter_data = (form: uint8, mime: string31, content: bytes)
```

The corresponding hash is calculated as:

```
matter_hash = sha256(form || mime || content)
```

Matters are not stored on universe chains, since most blockchains do not support programmability over media content. Instead, the observer chain (Every Network) loads and processes matter data through kind contracts to compute the object’s assets.

## Value

Value represents an amount of **fungible tokens** wrapped by the object, the token contract must be registered at the Element Registry, its the set contract's responsibility to make sure it holds the corresponding fungible token 应归属于 the object.

The structure of a value is:

```
value_wrapped = (token: uint64, mime: string31, content: bytes)
```

the record of the token contract is:

value_record = ()

```
value_wrapped = (token: uint64, mime: string31, content: bytes)
```

## Unique

Unique elements represent **non-fungible tokens** (NFTs).

These are also encoded as 32-byte tuples, structured based on the token standard.


## Info

Info elements are arbitrary 32-byte data fields. They are used for storing structured or encoded data within an object. These can be accessed by contracts on any supported chain.
