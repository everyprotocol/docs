import { Sidebar } from "vocs";

export const sidebar: Sidebar = [
  {
    text: "Introduction",
    items: [{ text: "Every", link: "/docs" }],
  },
  {
    text: "Concepts",
    items: [
      { text: "Objects", link: "/docs/concepts/objects" },
      { text: "Elements", link: "/docs/concepts/elements" },
      { text: "Kinds", link: "/docs/concepts/kinds" },
      { text: "Sets", link: "/docs/concepts/sets" },
      { text: "Relations", link: "/docs/concepts/relations" },
    ],
  },
  {
    text: "Guides",
    items: [
      { text: "Set up Wallets", link: "/docs/guides/set-up-wallets" },
      { text: "Register a Matter", link: "/docs/guides/register-a-matter" },
      { text: "Register a Set", link: "/docs/guides/register-a-set" },
      { text: "Register a Kind", link: "/docs/guides/register-a-kind" },
      { text: "Register a Relation", link: "/docs/guides/register-a-relation" },
    ],
  },

  {
    text: "Contracts",
    items: [
      {
        text: "Core",
        collapsed: false,
        items: [
          { text: "SetRegistry", link: "/docs/contracts/core/SetRegistry" },
          { text: "OmniRegistry", link: "/docs/contracts/core/OmniRegistry" },
          { text: "KindRegistry", link: "/docs/contracts/core/KindRegistry" },
          { text: "ElementRegistry", link: "/docs/contracts/core/ElementRegistry" },
          { text: "ObjectMinter", link: "/docs/contracts/core/ObjectMinter" },
        ],
      },
      {
        text: "Periphery",
        collapsed: false,
        items: [
          { text: "ISet", link: "/docs/contracts/periphery/ISet" },
          { text: "ISetRegistryHook", link: "/docs/contracts/periphery/ISetRegistryHook" },
          { text: "IObjectInteractionHook", link: "/docs/contracts/periphery/IObjectInteractionHook" },
          { text: "IObjectMinterHook", link: "/docs/contracts/periphery/IObjectMinterHook" },
        ],
      },
      { text: "Addresses", link: "/docs/contracts/addresses" },
    ],
  },

  {
    text: "Network",
    items: [
      { text: "Overview", link: "/docs/network/overview" },
      { text: "Accounts", link: "/docs/network/accounts" },
      { text: "Transactions", link: "/docs/network/transactions" },
      { text: "State", link: "/docs/network/state" },
      { text: "Contracts", link: "/docs/network/contracts" },
      { text: "OVM", link: "/docs/network/ovm" },
      { text: "Tokenomics", link: "/docs/network/tokenomics" },
      { text: "Participants", link: "/docs/network/participants" },
      { text: "Endpoints", link: "/docs/network/endpoints" },
    ],
  },
  {
    text: "Reference",
    items: [
      { text: "every", link: "/docs/reference/every-cli" },
      { text: "kasc", link: "/docs/reference/kasc" },
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
