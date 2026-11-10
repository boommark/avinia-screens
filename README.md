# Avinia screen redesign

The 18 Avinia HCS screens that had no approved staging version, rebuilt in the approved staging design. Every screen is plain HTML and CSS with no build step, so it can be read, reviewed or ported straight into the Flutter app.

**Live gallery:** https://boommark.github.io/avinia-screens/

> Avinia is in development. Every person, clinic and record here is synthetic sample data. Nia does not diagnose or give medical advice; the care team makes clinical decisions.

## What's here

| Path | What it is |
|---|---|
| `styles/tokens.css` | Design tokens taken from the staging app build: colours, type, radii, shadows |
| `styles/app.css` | Shared components: app bars, cards, rows, icon tiles, stat tiles, chips, buttons, options, segmented control, toggles, status tracker, tab bar and Nia mic |
| `assets/icons.js` | A small Lucide-style icon set (`<i data-i="phone"></i>`) |
| `screens/*.html` | One file per screen state, 390 x 844 for patient screens, 1280 x 800 for clinician and admin |
| `renders/*.png` | 2x renders of every screen |
| `screens.json` | Screen list, states and what changed on each |
| `tools/render.sh` | Re-renders every screen with headless Chrome |
| `tools/new-screen.sh` | Wraps a new screen body in the shared head |

## Design tokens (from staging)

| Role | Value |
|---|---|
| Primary green (CTAs, Nia mic, within range) | `#16A34A` |
| Accent green (selected tabs, active labels, icons, toggles) | `#3E8440` |
| Text / muted / borders | `#09090B` / `#71717A` / `#E4E4E7` |
| Mint surfaces | `#F2FAF1`, `#EEF9F0` |
| Warning | `#996C00` on `#FFF8E8` |
| Error and held | `#A32626`, `#DC4C4C` on `#FBE4E4` |
| Font | Inter |

## Screens

| ID | Screen | States |
|---|---|---|
| P02 | Sample-patient selection | `p02a-sample-picker`, `p02b-test-patient` |
| P03 | Sample-patient introduction (matches live staging) | `p03-meet-myra` |
| P05 | Record connection status | `p05a-confirming`, `p05b-importing`, `p05c-ready` |
| P11 | Visit preparation | `p11-visit-prep` |
| P14 | Your details | `p14-your-details` |
| P20 | New medicine status | `p20-new-medicine` |
| P21 | Intake review and completion | `p21a-intake`, `p21b-intake-sent` |
| P22 | Visit note | `p22a-visit-note`, `p22b-original-note` |
| P24 | Referral: choose a specialist | `p24-referral` |
| P26 | Record sharing | `p26-share-record` |
| P27 | Active record share (QR) | `p27-share-qr` |
| P28 | Same-medicine question | `p28-same-medicine` |
| P29 | Medicine entry: source detail | `p29-entry-detail` |
| P30 | Dose disagreement and review status | `p30a-dose-check`, `p30b-dose-routed` |
| P31 | Identity mismatch: records held | `p31-records-held` |
| C01 | Clinician sign-in | `c01-clinician-sign-in` |
| A01 | Super-admin review queue | `a01-admin-review` |
| X02 | Lock-screen notification (spec only) | `x02-lock-screen` |

## Working with it

Open any file in `screens/` in a browser. To re-render after a change:

```bash
tools/render.sh                          # all screens
tools/render.sh screens/p20-new-medicine.html   # one screen
```

Patient screens follow the staging rules: push screens use a back arrow and a pinned bottom action; tab-level screens use the Avinia HCS bar, the Today / Record / Visits tab bar and the green Nia mic. "Call Dr Lee's office" stays one tap away wherever the requirements list it (D1.23).

Prepared by Coronet for Avinia, November 2026. Icons adapted from Lucide (ISC licence).
