import { Sidebar } from "vocs";

export const sidebar: Sidebar = [
  {
    text: "Introduction",
    items: [
      { text: "Overview", link: "/docs" },
      { text: "Getting Started", link: "/docs/set-up-wallets" },
    ],
  },
  {
    text: "Concepts",
    items: [
      { text: "Objects", link: "/docs/concepts/objects" },
      { text: "Kinds", link: "/docs/concepts/kinds" },
      { text: "Sets", link: "/docs/concepts/sets" },
      { text: "Relations", link: "/docs/concepts/relations" },
      { text: "Elements", link: "/docs/concepts/elements" },
    ],
  },
  {
    text: "Guides",
    items: [
      { text: "Set up Wallets", link: "/docs/guides/set-up-wallets" },
      { text: "Create a Set", link: "/docs/guides/create-a-set" },
      { text: "Define a Kind", link: "/docs/guides/define-a-kind" },
      { text: "Register a Matter", link: "/docs/guides/register-a-matter" },
    ],
  },

  {
    text: "Contracts",
    items: [
      {
        text: "Core",
        collapsed: false,
        items: [
          { text: "Set Registry", link: "/docs/contracts/core/SetRegistry" },
          { text: "Omni Registry", link: "/docs/contracts/core/OmniRegistry" },
          { text: "Kind Registry", link: "/docs/contracts/core/KindRegistry" },
          { text: "Element Registry", link: "/docs/contracts/core/ElementRegistry" },
        ],
      },
      {
        text: "Periphery",
        collapsed: false,
        items: [
          { text: "ISet", link: "/docs/contracts/periphery/ISet" },
          { text: "ISetRegistryAdmin", link: "/docs/contracts/periphery/ISetRegistryAdmin" },
          { text: "IInteroperable", link: "/docs/contracts/periphery/IInteroperable" },
          { text: "IRemotMintable", link: "/docs/contracts/periphery/IRemoteMintable" },
          { text: "IObjectMinterAdmin", link: "/docs/contracts/periphery/IObjectMinterAdmin" },
        ],
      },
    ],
  },

  {
    text: "Network",
    items: [
      { text: "Overview", link: "/docs/network/overview" },
      { text: "Accounts", link: "/docs/network/accounts" },
      { text: "Transactions", link: "/docs/network/transactions" },
      { text: "State", link: "/docs/network/state" },
      { text: "Smart Contracts", link: "/docs/network/contracts" },
      { text: "OVM", link: "/docs/network/ovm" },
      { text: "Tokenomics", link: "/docs/network/tokenomics" },
      { text: "Nodes", link: "/docs/network/nodes" },
      { text: "Deployment", link: "/docs/network/deployment" },
    ],
  },

  {
    text: "Miscellaneous",
    items: [
      { text: "Resources", link: "/docs/misc/resources" },
      { text: "FAQ", link: "/docs/misc/faq" },
    ],
  },
];
