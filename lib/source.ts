import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";

// Exposes the docs collection (currently the HarvestFlow case study,
// extendable with further /docs entries) to fumadocs-ui's layout
// and page components.
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
});
