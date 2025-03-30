#!/bin/env bash
set -e

DOCGEN_DIR=/tmp/docgen

# every-cli
git clone git@github.com:everyprotocol/cli.git $DOCGEN_DIR/every
(cd $DOCGEN_DIR/every; bun install; bash docgen-mintlify.sh)
cp $DOCGEN_DIR/every/every-cli.md reference/tools/every-cli.mdx


# v1-core
git clone git@github.com:everyprotocol/v1-core.git $DOCGEN_DIR/v1-core
(cd $DOCGEN_DIR/v1-core; forge install; forge doc)
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IKindRegistry.sol/interface.IKindRegistry.md > contracts/v1-core/KindRegistry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/ISetRegistry.sol/interface.ISetRegistry.md > contracts/v1-core/SetRegistry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IElementRegistry.sol/interface.IElementRegistry.md > contracts/v1-core/ElementRegistry.mdx
tail -n +4 $DOCGEN_DIR/v1-core/docs/src/src/interfaces/core/IOOPS.sol/interface.IOOPS.md > contracts/v1-core/OmniRegistry.mdx


# v1-periphery
git clone git@github.com:everyprotocol/v1-periphery.git $DOCGEN_DIR/v1-periphery
(cd $DOCGEN_DIR/v1-periphery; forge install; forge doc)
tail -n +4 $DOCGEN_DIR/v1-periphery/docs/src/src/interfaces/user/ISet.sol/interface.ISet.md >contracts/v1-periphery/ISet.mdx
tail -n +4 $DOCGEN_DIR/v1-periphery/docs/src/src/interfaces/user/ISetCallback.sol/interface.ISetCallback.md >contracts/v1-periphery/ISetCallback.mdx
tail -n +4 $DOCGEN_DIR/v1-periphery/docs/src/src/interfaces/user/ISetMintable.sol/interface.ISetMinterMintable.md >contracts/v1-periphery/ISetMinterMintable.mdx
tail -n +4 $DOCGEN_DIR/v1-periphery/docs/src/src/interfaces/user/ISetMintable.sol/interface.ISetSelfMintable.md >contracts/v1-periphery/ISetSelfMintable.mdx
