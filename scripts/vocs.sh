#!/bin/env bash
set -e

DOCS=vocs/docs/pages/docs
mkdir ${DOCS}/reference
mkdir ${DOCS}/contracts/{core,periphery}

# every-cli
echo "generating every-cli.md ..."
(cd repos/every-cli; bun install; bunx commander-docgen --entry src/program.ts --out every-cli.md)
mv repos/every-cli/every-cli.md ${DOCS}/reference/every-cli.mdx
echo "moved to ${DOCS}/reference/every-cli.mdx"

# kind-as
echo "generating kasc.md ..."
(cd repos/kind-as; bun install; bunx commander-docgen --entry src/program.ts --out kasc.md)
mv repos/kind-as/kasc.md ${DOCS}/reference/kasc.mdx
echo "moved to ${DOCS}/reference/kasc.mdx"

# # periphery
echo "running forge doc ..."
repo=repos/periphery
(cd repos/periphery; forge install; forge doc)

for name in SetRegistry KindRegistry ObjectMinter \
    RelationRegistry ObjectInteraction ObjectAuthorization ValueRegistry UniqueRegistry ; do
    tail -n +4 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" \
    > "${DOCS}/contracts/core/${name}.mdx"
    echo "written to ${DOCS}/contracts/core/${name}.mdx"
done

name=OmniRegistry
file="${DOCS}/contracts/core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[RelationRegistry](/docs/contracts/core/RelationRegistry), [ObjectAuthorization](/docs/contracts/core/ObjectAuthorization), [ObjectInteraction](/docs/contracts/core/ObjectInteraction)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file
echo "written to ${DOCS}/contracts/core/${name}.mdx"

name=ElementRegistry
file="${DOCS}/contracts/core/${name}.mdx"
cat > $file <<EOF
**Inherits:**
[ValueRegistry](/docs/contracts/core/ValueRegistry), [UniqueRegistry](/docs/contracts/core/UniqueRegistry)
EOF
tail -n +6 "$repo/docs/src/contracts/interfaces/core/I${name}.sol/interface.I${name}.md" >> $file
echo "written to ${DOCS}/contracts/core/${name}.mdx"

for name in ISet IInteroperable ISetRegistryHook IObjectMinterHook; do
    tail -n +7 "$repo/docs/src/contracts/interfaces/user/${name}.sol/interface.${name}.md" \
        > "${DOCS}/contracts/periphery/${name}.mdx"
    echo "written to ${DOCS}/contracts/periphery/${name}.mdx"
done
