/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    domains: [
      "cdna.pcpartpicker.com",
      "m.media-amazon.com",
      "encrypted-tbn3.gstatic.com",
    ],
  },
};

export default config;
