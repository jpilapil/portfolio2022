module.exports = {
  projectList: [
    {
      projectName: "Pepi Mafia",
      desc: "A NFT (Non-Fungible Token) pixel art PFP collection built within the NFT Worlds ecosystem, a sandbox Metaverse platform.",
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
      projectName: "Nord Portfolio",
      desc: "Probably the website you're looking at right now! Simplistic design and color palette inspired by my current favorite IDE theme, Nord.",
      tech: ["React", "Next.js", "SCSS", "Slack API"],
      src: "/project-images/portfolio.png",
      url: "https://github.com/jpilapil/portfolio2022",
      externals: [
        {
          name: "Github",
          url: "https://github.com/jpilapil/portfolio2022",
          src: "/icons/github.svg",
        },
      ],
    },
  ],
};
