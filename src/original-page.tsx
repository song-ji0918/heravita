import { lazy, Suspense, type ComponentType } from "react";

// The original site reads browser storage on load (language), so pages render in the browser only.
export function originalPage(load: () => Promise<{ default: ComponentType }>) {
  const Page = lazy(async () => {
    await import("./original/i18n");
    return load();
  });
  return function OriginalPage() {
    return (
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#fcfaf7" }} />}>
        <Page />
      </Suspense>
    );
  };
}
