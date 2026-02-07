# SEO Experiment (HTML vs React vs Next.js)

This project is a controlled experiment to understand how Google indexes and ranks websites built with different rendering strategies.

I am testing:
- Static HTML
- React SPA (Client-Side Rendering)
- Next.js (Server-Side Rendering / Static Generation)

All versions:
- Deployed on Vercel

Primary success metric:
If it appears in Google, it is indexed.

---

## Comparison Matrix

| Metric | Phase 1 (Static HTML) | Phase 2 (React SPA) | Phase 3 (Next.js SSR) |
| :--- | :--- | :--- | :--- |
| **Status** | COMPLETE | IN PROGRESS | TBD |
| **Deploy Date** | Feb 6, 2026 | Feb 7, 2026 | TBD |
| **Index Date (site:)** | Feb 7, 2026 | TBD | TBD |
| **View Source Visible?**| Yes | No | Yes |
| **Keyword Search** | Success | TBD | TBD |

---

## Phase 1 Results (Static HTML)
- **URL:** https://html-static-swart.vercel.app/
- **Keyword:** ZynthoKinetix-2026
- **Result:** Successfully indexed within 24 hours. The keyword was found in the raw HTML and on google, leading to immediate indexing. Even a simple google site:search confirms this. LightHouse Score of 100 on both SEO and Performance...well it is just a simple html page so yeah 


---

## Phase 2 Setup (React SPA)
- **Strategy:** Client-Side Rendering (CSR).
- **Goal:** Verify if Googlebot executes JavaScript to find the keyword when it is missing from the initial Page Source.
- **Verification:** View Source should show an empty root div, while Inspect Element shows the rendered content.