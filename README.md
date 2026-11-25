# MARKlab website

A static Jekyll site for GitHub Pages, with local layouts and CSS. No JavaScript build step is needed. The map uses Leaflet 1.9.4 and OpenStreetMap tiles; all location information also appears in HTML tables.

## Local preview

Use the Ruby version supported by the declared `github-pages` gem:

```sh
bundle install
bundle exec jekyll serve --baseurl /marklab-website
```

Open `http://localhost:4000/marklab-website/`. For a production build:

```sh
bundle exec jekyll build --strict_front_matter
```

The output goes to `_site/` and is ignored by Git. The deployment URL and base path are configured in `_config.yml`. Local preview does not publish anything. Do not push or publish changes without the project owner's explicit approval.

## Content maintenance

- `_data/deployments.yml` is the deployment inventory. Update `verified` when confirming the inventory. Each record represents a location, not necessarily a single node. Only set `node_count` when confirmed. Per-location modem variants are not yet recorded.
- Use `status: active` for deployed locations and `status: planned` for future ones. Leave city and coordinates absent until the location is known. Coordinates should describe approximate public city/region locations, not host addresses.
- The map, location tables, and homepage country count use this same inventory. Active deployment status is not a live availability check.
- `_data/measurements.yaml` supplies the measurement catalogue.
- `_pages/host.md` contains host requirements and setup instructions. `assets/manuals/` holds copies of the supplied PDFs; replace them when the source manuals change and update the guide dates.
- `_pages/node.md` distinguishes operational stationary nodes from the mobility node under development. Do not infer that each location supports 5G.
- `_pages/results.md` lists research and datasets. Keep historical campaign counts separate from the current deployment inventory.
- `_posts/` contains dated news articles. All posts appear on `/blog/`; there is no pagination. Existing article URLs are preserved. The four articles dated 25 November 2026 are proposed local copy for review; they describe the confirmed status on that date, not installation or conference dates.
- `_layouts/`, `_includes/image-modal.html`, and `assets/css/custom.css` define the presentation. `assets/js/locations.js` draws the map.

## Host details to confirm

The supplied guides do not fully specify management VPN transport protocol, ancillary outbound access, typical power consumption, monthly management traffic, costs, or expected hosting duration. The hosting page currently directs prospective hosts to the team to agree on those details.

## Validation of the local refresh

Build with strict front matter; check generated internal links and anchors; inspect the homepage, hosting page, news archive and location map in a browser at desktop and phone widths. Confirm that all three PDF downloads are present. Generated output must not be committed.
