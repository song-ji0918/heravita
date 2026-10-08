import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it("matches the flagship destination and all three journey detail paths", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
    expect(router.matchRoutes('/destinations/phuket').at(-1)?.routeId).toBe('/destinations/phuket');
     for (const region of ['china','europe','usa']) {
       expect(router.matchRoutes(`/destinations/${region}`).at(-1)?.routeId).toBe(`/destinations/${region}`);
     }
    for (const stage of ['discover', 'reset', 'rebuild']) {
      expect(router.matchRoutes(`/journeys/${stage}`).at(-1)?.routeId).toBe('/journeys/$stage');
    }
  });
  it("matches a page for / instead of falling back to not found", () => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
