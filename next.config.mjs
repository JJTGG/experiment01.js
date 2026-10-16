const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;

const isUserOrOrganizationSite = Boolean(
  repository &&
    owner &&
    repository.toLowerCase() ===
      `${owner}.github.io`.toLowerCase()
);

const basePath =
  process.env.GITHUB_ACTIONS === "true" &&
  repository &&
  !isUserOrOrganizationSite
    ? `/${repository}`
    : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
};

export default nextConfig;