module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/instagram",
        destination: "https://www.instagram.com/prospective.ai/",
        permanent: true,
      },
      {
        source: "/discord",
        destination: "https://discord.gg/vYSCGAsm3c",
        permanent: true,
      },
    ];
  },
};
