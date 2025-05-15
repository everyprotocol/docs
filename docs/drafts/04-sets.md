# Sets

**Sets** are the objects from which other objects are created.

All set objects originate from a special object called the **Set of Sets**, which is governed by the **Set Registry** contract. The Set of Sets itself is considered to have been created from its own structure.

Each set adheres to the **Kind of Set**, which defines the structure, interactions, and asset computations of set objects.

During the early stages of the universe, several original sets, including the Set of Sets, were created. From that point onward, more objects were either directly or indirectly created from these sets.

## Creation

Set objects are created upon registration and are initialized as follows:

### ID

For original sets, the `id` field is predefined:

```solidity
uint64 constant ID_SET_OF_SPACE     = 0;
uint64 constant ID_SET_OF_SET       = 1;
uint64 constant ID_SET_OF_KIND      = 2;
uint64 constant ID_SET_OF_RELATION  = 3;
uint64 constant ID_SET_OF_TRANSFORM = 4;
```

Emergent sets are dynamically created and assigned IDs from this range:

```solidity
uint64 constant ID_SET_EMERGENT_MIN = 17;
uint64 constant ID_SET_EMERGENT_MAX = type(uint56).max;
```

Set IDs must be ≤ `2^56 - 1`, reserving the upper 8 bits for category metadata.

### Meta

The `meta` field is initialized as:

```solidity
meta.flags    = 0;
meta.rev      = 1;
meta.kindRev  = latestKindOfSet();
meta.setRev   = latestSetOfSet();
meta.kind     = ID_KIND_OF_SET;
meta.set      = ID_SET_OF_SET;
```

### Elements

Sets consist of two elements, defined by the **Kind of Set**:

| Index | Name     | Mutable | Description                                         |
|--------|----------|---------|-----------------------------------------------------|
| 0      | law      | No      | Address of the set contract                         |
| 1      | lineage  | Yes     | Material hash of shared data for all set objects    |

#### law

The `law` element encodes the address of the set contract. On EVM chains, it's typically stored as:

```solidity
bytes32 law = bytes32(uint160(addr));
```

#### lineage

The `lineage` element holds shared metadata for all objects created from this set, often in JSON format, e.g.:

```json
{
  "name": "Example Set",
  "description": "A sample set for demo purposes",
  "image": "ipfs://..."
}
```

## Operations

Sets support the following unary operations:

| Operation | Description                     | Fields Affected                                |
|-----------|---------------------------------|------------------------------------------------|
| transfer  | Transfer ownership              | `owner`                                        |
| update    | Modify shared lineage           | `meta.rev`, `elems.lineage`                    |
| upgrade   | Apply new kind/set revision     | `meta.rev`, `meta.kindRev`, `meta.setRev`      |
| touch     | Increment revision only         | `meta.rev`                                     |

Inter-object operations (e.g., relate, move) do not apply to set objects.

---

Sets anchor the logic, structure, and shared identity for all objects, serving as the foundation for minting and governance in Every Protocol.
