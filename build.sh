#!/bin/env bash
set -e

# every-cli
(cd repos/every-cli; bun install; bunx commander-docgen --entry src/program.ts --out every-cli.md)
mv repos/every-cli/every-cli.md docs/reference/every-cli.mdx

# kind-as
(cd repos/kind-as; bun install; bunx commander-docgen --entry src/program.ts --out kasc.md)
mv repos/kind-as/kasc.md docs/reference/kasc.mdx

# # periphery
repo=repos/periphery
(cd repos/periphery; forge install; forge doc)

for name in SetRegistry KindRegistry ObjectMinter \
    RelationRegistry ObjectInteraction ObjectAuthorization ValueRegistry UniqueRegistry ; do
  tail -n +4 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" \
    > "docs/contracts/core/${name}.mdx"
done

name=OmniRegistry
file="docs/contracts/core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[RelationRegistry](/contracts/core/RelationRegistry), [ObjectAuthorization](/contracts/core/ObjectAuthorization), [ObjectInteraction](/contracts/core/ObjectInteraction)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file

name=ElementRegistry
file="docs/contracts/core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[ValueRegistry](/contracts/core/ValueRegistry), [UniqueRegistry](/contracts/core/UniqueRegistry)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file


for name in ISet IInteroperable IRemoteMintable ISetRegistryAdmin IObjectMinterAdmin; do
  tail -n +4 "$repo/docs/src/contracts/interfaces/user/${name}.sol/interface.${name}.md" \
    > "docs/contracts/periphery/${name}.mdx"
done
