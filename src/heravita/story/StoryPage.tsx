import { useLayoutEffect, useRef } from "react";
import OriginalStoryPage from "@/original/pages/Story/StoryPage";
import "./story-mission.css";

export default function StoryPage() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const page = root.current?.querySelector(".story-page");
    if (!page) return;

    const updateMission = () => {
      const section = page.querySelector<HTMLElement>("#mission");
      if (!section) return;
      if (section.dataset.headerTheme !== "light") section.dataset.headerTheme = "light";
      if (section.classList.contains("story-mission")) return;

      // The legacy translations carry separate forced line breaks for desktop and mobile.
      const joiner = page.getAttribute("lang") === "zh" ? "" : " ";
      const flatten = (element: Element) =>
        Array.from(element.querySelectorAll(".story-title-desktop .mission-title-line"))
          .map((line) => line.textContent?.trim())
          .join(joiner);

      const title = section.querySelector(".mission-intro h2");
      if (title) {
        title.textContent = flatten(title);
        title.id = "story-mission-title";
        section.setAttribute("aria-labelledby", title.id);
      }

      for (const card of section.querySelectorAll(".mission-card-content")) {
        const label = card.querySelector("h3");
        const title = card.querySelector(".mission-main-title");
        if (!label || !title) continue;
        label.classList.add("story-mission-label");
        title.className = "story-mission-statement";
        title.textContent = flatten(title);
      }

      section.classList.add("story-mission");
    };

    updateMission();
    const observer = new MutationObserver(updateMission);
    observer.observe(page, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["data-header-theme"],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={root} className="story-page-shell">
      <OriginalStoryPage />
    </div>
  );
}
