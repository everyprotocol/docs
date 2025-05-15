#!/bin/env bash
set -e

# every-cli
(cd repos/every-cli; bun install; cmddoc --entry src/program.ts --out every-cli.md)
cp repos/every-cli/every-cli.md docs/reference/tools/every-cli.mdx


# # periphery
repo=repos/periphery
(cd repos/periphery; forge install; forge doc)

for name in SetRegistry KindRegistry ObjectMinter \
    RelationRegistry ObjectInteraction ObjectAuthorization ValueRegistry UniqueRegistry ; do
  tail -n +4 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" \
    > "docs/contracts/v1-core/${name}.mdx"
done

name=OmniRegistry
file="docs/contracts/v1-core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[RelationRegistry](/contracts/v1-core/RelationRegistry), [ObjectAuthorization](/contracts/v1-core/ObjectAuthorization), [ObjectInteraction](/contracts/v1-core/ObjectInteraction)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file

name=ElementRegistry
file="docs/contracts/v1-core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[ValueRegistry](/contracts/v1-core/ValueRegistry), [UniqueRegistry](/contracts/v1-core/UniqueRegistry)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file


for name in ISet IInteroperable IRemoteMintable ISetRegistryAdmin IObjectMinterAdmin; do
  tail -n +4 "$repo/docs/src/contracts/interfaces/user/${name}.sol/interface.${name}.md" \
    > "docs/contracts/v1-periphery/${name}.mdx"
done
