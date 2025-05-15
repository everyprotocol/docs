# Relations

A relation defines the possible connections between an object and other objects in the Previous Network.

If an object \( x \) is connected to an object \( y \) in relation \( R \), we say \( x \) is \( R \)-related to \( y \). \( x \) is called the departure object, and \( y \) is called the destination object.

## Operations

### Relate

Users can call `relate(uint256 dest, uint256 dep, uint64 rel)` to connect a departure (dep) object to a destination (dest) object.

### Unrelate

Conversely, `unrelate(uint256 dest, uint256 dep, uint64 rel)` can be called to disconnect them.

## Creation

Relations are registered at the Relation Registry. A relation itself is also an object and consists of two to nine elements, with the first element being `possession` and the remaining elements being `adj_spec0`, `adj_spec1`, ..., `adj_spec7`.

### Possession

The `possession` element defines the processing of the ownership of the departure objects when they are connected or disconnected from destination objects.

### Adjacency Specs

Each `adj_spec_n` element is composed of two tuples: `(dep_kind, min, max)`, `(dep_kind, min, max)`.

- **dep_kind**: The kind ID of the departure object, a `uint64` integer.
- **min**: The minimum number of objects that the destination object can accept, a `uint32` integer.
- **max**: The maximum number of objects that the destination object can accept, a `uint32` integer.

The last tuple `(dep_kind, min, max)` of the last `adj_spec_n` can be all zeros, indicating the end of the adjacency spec array.

Normal `dep_kind`s must be an integer in the range of [1, \(2^{64} - 2\)].

A wildcard `dep_kind` has a value of `2^{32} - 1`, meaning any kind.

The `(dep_kind, min, max)` tuples must be in increasing order. If a wildcard adjacency spec exists, it must be the last valid one.

`min` and `max` can be any `uint32` integer in the range [0, \(2^{32} - 1\)], as long as `max >= min`.

If `max` equals \(2^{32} - 1\), it means unlimited.
