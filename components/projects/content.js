module.exports = {
  projectList: [
    {
      projectName: "Pepi Mafia",
      desc: "A NFT (Non-Fungible Token) PFP collection built within the NFT Worlds ecosystem, a Metaverse platform with full Minecraft integration.",
      tech: ["React", "Sass", "Alchemy API", "Solidity", "Web3"],
      src: "/project-images/pepi.png",
      url: null,
      comingSoon: true,
    },
    {
      projectName: "CHROME kids",
      desc: "A NFT (Non-Fungible Token) project on the Ethereum blockchain. Created with the intent of bringing artists and creatives together to create a community of like-minded people.",
      tech: ["Next.js", "Bulma", "Solidity", "AWS", "Web3"],
      src: "/project-images/chrome-kids.png",
      url: "https://chromekids.io/",
      externals: [
        {
          name: "Website",
          url: "https://chromekids.io/",
          src: "/icons/external.svg",
        },
        {
          name: "Etherscan",
          url: "https://etherscan.io/address/0x5d96aa26d15379f7a546fe0f698abca74c1c5369#code",
          src: "/icons/etherscan.svg",
        },
      ],
    },
    {
      projectName: "Stay Hydrated",
      desc: "A simple system tray application built with Electron to remind me of one simple task... to stay hydrated.",
      tech: ["React", "Electron", "Bootstrap"],
      src: "/project-images/hydrate.png",
      url: "https://github.com/jpilapil/stay-hydrated",
      externals: [
        {
          name: "Github",
          url: "https://github.com/jpilapil/stay-hydrated",
          src: "/icons/github.svg",
        },
      ],
    },
  ],
};
