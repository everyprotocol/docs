import { defineConfig } from "vocs";
import { sidebar } from "./docs/sidebar";

export default defineConfig({
  theme: {
    accentColor: {
      light: "#00DADA",
      dark: "#00FFFF",
    },
  },
  title: "Every",
  logoUrl: { light: "/every-symbol-light.svg", dark: "/every-symbol-dark.svg" },
  iconUrl: "/every-favicon.svg",
  font: {
    google: "Lexend Deca",
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
        {
          text: "Contract Addresses",
          link: "/docs/contracts/addresses",
          match: "__undefined__",
        },
        {
          text: "Network Endpoints",
          link: "/docs/network/endpoints",
          match: "__undefined__",
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
          link: "/docs/reference/kasc",
        },
        {
          text: "every",
          link: "/docs/reference/every-cli",
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
  head: () => (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.va = window.va || function () {(window.vaq = window.vaq || []).push(arguments);};`,
        }}
      />
      <script defer src="/_vercel/insights/script.js"></script>
    </>
  ),
});
