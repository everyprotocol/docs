#!/bin/env bash
set -e

DOCGEN_DIR=/tmp/docgen

git clone git@github.com:everyprotocol/v1-core.git $DOCGEN_DIR/v1-core
(cd $DOCGEN_DIR/v1-core; forge install; forge doc)
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IKindRegistry.sol/interface.IKindRegistry.md > contracts/v1-core/kind-registry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/ISetRegistry.sol/interface.ISetRegistry.md > contracts/v1-core/set-registry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IElementRegistry.sol/interface.IElementRegistry.md > contracts/v1-core/element-registry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IOOPS.sol/interface.IOOPS.md > contracts/v1-core/omni-registry.mdx

git clone git@github.com:everyprotocol/cli.git $DOCGEN_DIR/every
(cd $DOCGEN_DIR/every; bun install; bash docgen-mintlify.sh)
cp $DOCGEN_DIR/every/every-cli.md reference/tools/every-cli.mdx
