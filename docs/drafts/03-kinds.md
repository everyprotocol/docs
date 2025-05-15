# Kinds

**Kinds** define the structure, behavior, and asset computation logic for objects in Every Protocol.
They describe how objects are built, how they interact, and how their content is interpreted.

Each kind is created from the **Set of Kinds**, and governed by the **Kind Registry**. Every kind conforms to the **Kind of Kind**, which defines how kind objects themselves are structured and behave.

## Purpose

Kinds ensure consistency and expressiveness across object types. When an object is assigned a kind through a set contract, it inherits the kind's schema, computation rules, and supported interactions.

## Creation

Kinds are created through registration. There are two classes:

- **Original kinds**: Created at genesis, with predefined IDs.
- **Emergent kinds**: Created dynamically by users, with assigned IDs in a reserved range.

### Kind IDs

```solidity
// Original kinds
ID_KIND_OF_SPACE     = 0;
ID_KIND_OF_SET       = 1;
ID_KIND_OF_KIND      = 2;
ID_KIND_OF_RELATION  = 3;
ID_KIND_OF_TRANSFORM = 4;

// Emergent kinds
ID_KIND_EMERGENT_MIN = 17;
ID_KIND_EMERGENT_MAX = type(uint56).max;
```

All kind IDs must be less than `2^56`.

### Metadata

Kind metadata is initialized as:

```solidity
meta.flags    = 0;
meta.rev      = 1;
meta.kindRev  = latestKindOfKind();
meta.setRev   = latestSetOfKind();
meta.kind     = ID_KIND_OF_KIND;
meta.set      = ID_SET_OF_KIND;
```

## Elements

Kinds are structured as objects with specific elements, following the **Kind of Kind** shape:

| Index | Name   | Mutable | Description                                                        |
|--------|--------|---------|--------------------------------------------------------------------|
| 0      | shape  | No      | Declares element types for objects of this kind                    |
| 1      | code   | Yes     | Material hash of the kind contract (Wasm code)                     |
| 2      | gene   | Yes     | Shared data for all objects of this kind                           |
| 3      | rels0  | Yes     | Supported incoming relation IDs (up to 8)                          |
| 4      | rels1  | Yes     | Supported outgoing relation IDs (up to 8)                          |

### shape

Defines the element layout of objects of this kind.

- Encoded as an array of `uint8`
- Length: 0–16
- Supported types:

```solidity
1  = OBJECT
2  = INFORMATION
3  = VALUE
4  = ARTIFACT
5  = MATERIAL_GENERAL
6  = MATERIAL_JSON
7  = MATERIAL_PTABLE
8  = MATERIAL_MKTREE
9  = MATERIAL_IMAGE
```

### code

The `code` element is the material hash of the kind contract — WebAssembly (Wasm) code executed on the observer chain via the OVM.

Kind contracts are usually written in AssemblyScript (`kind-as`) or Rust (`kind-rs`).

### gene

The `gene` element contains shared configuration or metadata for all objects of a kind. It's often JSON, and may include fields like:

- `name`
- `description`
- `image`
- Additional fields specific to the kind

### rels0 / rels1

Each stores up to 8 relation IDs (as `uint64`, big-endian encoded). Remaining space is zero-padded.

- `rels0`: Supported incoming relations
- `rels1`: Supported outgoing relations

## Operations

Set contracts managing kind objects support the following operations:

| Operation | Description                           | Fields Affected                                |
|-----------|---------------------------------------|------------------------------------------------|
| transfer  | Transfer ownership                    | `owner`                                        |
| update    | Modify code/gene/relations            | `meta.rev`, `elems[1..4]`                      |
| upgrade   | Apply new kind/set revision           | `meta.rev`, `meta.kindRev`, `meta.setRev`      |
| touch     | Increment revision without changes    | `meta.rev`                                     |

Note: Inter-object operations (like `relate`, `move`) do not apply to kind objects.

---

Kinds are essential for defining programmable behaviors in Every Protocol — enabling open, modular, and evolving standards for on-chain creation.
