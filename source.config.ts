import { defineDocs, defineConfig } from "fumadocs-mdx/config";

// Defines the "docs" MDX collection sourced from content/docs.
// Running `npm install` triggers the postinstall script (fumadocs-mdx),
// which generates the typed .source folder this config describes.
export const docs = defineDocs({
  dir: "content/docs",
});

export default defineConfig();
