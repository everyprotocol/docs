import { defineConfig } from "vocs";
import { sidebar } from "./docs/sidebar";

export default defineConfig({
  theme: {
    accentColor: {
      light: "#00FFFF",
      dark: "#00FFFF",
    },
  },
  title: "Every",
  logoUrl: { light: "/every-symbol-light.svg", dark: "/every-symbol-dark.svg" },
  iconUrl: "/every-favicon.svg",
  banner: "Head to our new [Discord](https://discord.gg/JUrRkGweXV)!",
  font: {
    google: "Lexend",
  },
  sidebar,
  topNav: [
    { text: "Docs", link: "/docs", match: "/docs/index" },
    { text: "Guides", link: "/docs/guides/set-up-wallets", match: "/docs/guides" },
    { text: "Contracts", link: "/docs/contracts/core/SetRegistry", match: "/docs/contracts" },
    { text: "Network", link: "/docs/network/overview", match: "/docs/network" },
    {
      text: "Builders",
      items: [
        {
          text: "Developer Portal",
          link: "https://portal.every.fun",
        },
        {
          text: "Object Explorer",
          link: "https://each.so",
        },
        {
          text: "Faucet",
          link: "https://faucet.every.fun",
        },
        {
          text: "Status Page",
          link: "https://status.every.fun",
        },
      ],
    },
    {
      text: "Reference",
      items: [
        {
          text: "Everything Theory",
          link: "https://theory.every.fun/",
        },
        {
          text: "kind-as",
          link: "https://kindas.every.fun/",
        },
        {
          text: "kasc",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
        },
        {
          text: "every",
          link: "https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md",
        },
        {
          text: "Core Contracts",
          link: "https://core.every.fun/",
        },

        {
          text: "Periphery Contracts",
          link: "https://periphery.every.fun/",
        },
      ],
    },
  ],
  sponsors: [
    {
      name: "Collaborator",
      height: 120,
      items: [
        [
          {
            name: "Paradigm",
            link: "https://paradigm.xyz",
            image: "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/paradigm-light.svg",
          },
          {
            name: "Ithaca",
            link: "https://ithaca.xyz",
            image: "https://raw.githubusercontent.com/wevm/.github/main/content/sponsors/ithaca-light.svg",
          },
        ],
      ],
    },
  ],
  socials: [
    {
      link: "https://github.com/everyprotocol",
      icon: "github",
    },
    {
      link: "https://x.com/everyprotocol",
      icon: "x",
    },
    {
      link: "https://farcaster.xyz/everyprotocol",
      icon: "warpcast",
    },
  ],
});
