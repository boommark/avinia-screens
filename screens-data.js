window.SCREENS = [
 {
  "id": "P02",
  "title": "Sample-patient selection",
  "group": "Patient onboarding",
  "files": [
   [
    "p02a-sample-picker",
    "Instant demo entry"
   ],
   [
    "p02b-test-patient",
    "Fasten test-patient selection"
   ]
  ],
  "before": "O02 SamplePicker",
  "changes": [
   "One selectable patient-list component serves both states; only the explanation and the main action change.",
   "Selected row uses the staging green border and radio, not a dark outline box.",
   "The main action moves to a pinned green button. The switching tip becomes a quiet caption.",
   "Myra now carries the current persona: 54, type 2 diabetes, mild asthma, colon cancer follow-up."
  ]
 },
 {
  "id": "P03",
  "title": "Sample-patient introduction",
  "group": "Patient onboarding",
  "files": [
   [
    "p03-meet-myra",
    "Meet Myra"
   ]
  ],
  "before": "O03 SampleIntro",
  "changes": [
   "Live staging has already rebuilt this screen. This frame matches it so the set is consistent.",
   "The three guided steps are bordered cards with a number, a title and a one-line explanation.",
   "The beige private-copy warning is replaced by the calm line inside the profile card.",
   "Nia is introduced as Avinia's AI assistant on first mention."
  ]
 },
 {
  "id": "P05",
  "title": "Record connection status",
  "group": "Patient onboarding",
  "files": [
   [
    "p05a-confirming",
    "Confirming connection"
   ],
   [
    "p05b-importing",
    "Import in progress"
   ],
   [
    "p05c-ready",
    "Records ready"
   ]
  ],
  "before": "O08 FastenConfirm",
  "changes": [
   "One status screen with three states on the staging task gradient, matching the approved Connect screen.",
   "A three-step tracker shows what is happening now, what comes next and how long it takes.",
   "Import progress shows a real count and defines what an item is.",
   "Each state says it is safe to leave and return. The ready state names both sources and the next action."
  ]
 },
 {
  "id": "P11",
  "title": "Visit preparation",
  "group": "Visits and care",
  "files": [
   [
    "p11-visit-prep",
    "Upcoming-visit preparation"
   ]
  ],
  "before": "O25 Visits",
  "changes": [
   "Becomes its own detail screen. The approved Visits home stays the list.",
   "The date tile header card keeps the appointment context in one place.",
   "Questions are numbered rows; the Nia question carries a From Nia chip.",
   "A new section shows exactly what Dr Lee will see, each row linking to its source."
  ]
 },
 {
  "id": "P14",
  "title": "Your details",
  "group": "Sharing, identity and account",
  "files": [
   [
    "p14-your-details",
    "Read-only identity and held connection"
   ]
  ],
  "before": "O21 Details",
  "changes": [
   "Identity is shown as grouped read-only rows with a lock, not as text fields that look editable.",
   "The source of the identity is named, with how to correct it.",
   "The held connection becomes an amber card naming the portal and the date, with one clear action."
  ]
 },
 {
  "id": "P20",
  "title": "New medicine status",
  "group": "Medicines",
  "files": [
   [
    "p20-new-medicine",
    "Prescribed, approved, pharmacy preparing"
   ]
  ],
  "before": "O31 PAPatient",
  "changes": [
   "The status chain is a vertical tracker with an owner and a timestamp on every step.",
   "The current step states when the next update is expected.",
   "A human contact for the pharmacy sits under the tracker. Call Dr Lee's office stays one tap away (D1.23).",
   "Placeholders are replaced with the staging sample data (Nucala, Silver Ridge Medicare Part D)."
  ]
 },
 {
  "id": "P21",
  "title": "Intake review and completion",
  "group": "Visits and care",
  "files": [
   [
    "p21a-intake",
    "Prefilled intake and new answers"
   ],
   [
    "p21b-intake-sent",
    "Sent receipt"
   ]
  ],
  "before": "O38 Intake",
  "changes": [
   "Progress is a single card with a count and a bar.",
   "Prefilled sections are icon rows, each still openable to review.",
   "Clinic questions use the staging single-choice pills from Log symptoms.",
   "A new Sent receipt lists exactly which sections went to the clinic and when."
  ]
 },
 {
  "id": "P22",
  "title": "Visit note: plain language and original",
  "group": "Visits and care",
  "files": [
   [
    "p22a-visit-note",
    "Plain-language note"
   ],
   [
    "p22b-original-note",
    "Original-note tab"
   ]
  ],
  "before": "O41 VisitNote",
  "changes": [
   "The two versions use the staging segmented control.",
   "Date and clinic are shown as chips under the toggle, so the source is always visible.",
   "Next steps become a checklist.",
   "The original tab is designed, and says the plain-language version never replaces it."
  ]
 },
 {
  "id": "P24",
  "title": "Referral: choose a specialist",
  "group": "Visits and care",
  "files": [
   [
    "p24-referral",
    "Referred specialist options and booking"
   ]
  ],
  "before": "O43 Referral",
  "changes": [
   "The referral reason sits in a mint card attributed to Dr Lee.",
   "Each specialist is a card with clinic, distance or video, and the next opening as a chip.",
   "The earliest option gets the filled Book button; the others are outlined.",
   "Calling the office and the Nia shortcut combine into one row above the mic."
  ]
 },
 {
  "id": "P26",
  "title": "Record sharing: scope and method",
  "group": "Sharing, identity and account",
  "files": [
   [
    "p26-share-record",
    "Sharing configuration"
   ]
  ],
  "before": "O47 Handoff",
  "changes": [
   "The two methods are equal icon tiles with a selected state.",
   "Content choices are a grouped toggle list in the staging settings style.",
   "Symptoms you logged is clearly marked as including what you told Nia, and is off by default.",
   "Expiry, view-only and revoke rules sit in one note above the action."
  ]
 },
 {
  "id": "P27",
  "title": "Active record share (QR)",
  "group": "Sharing, identity and account",
  "files": [
   [
    "p27-share-qr",
    "QR active, who opened it, stop sharing"
   ]
  ],
  "before": "O48 HandoffQR",
  "changes": [
   "The QR code sits in a card with View-only and Sample code chips.",
   "Expiry and open count become two stat tiles.",
   "Access history uses icon rows.",
   "Stop sharing is a quiet destructive button pinned at the bottom."
  ]
 },
 {
  "id": "P28",
  "title": "Same-medicine question",
  "group": "Medicines",
  "files": [
   [
    "p28-same-medicine",
    "Same, different or not now"
   ]
  ],
  "before": "O51 SameItem",
  "changes": [
   "The two source entries are equal cards, labelled From your provider and From your plan.",
   "Choices are ranked: filled Same medicine, outlined Different medicines, text Not now.",
   "The note explains that the answer only changes Myra's view, never Dr Lee's."
  ]
 },
 {
  "id": "P29",
  "title": "Medicine entry: source detail",
  "group": "Medicines",
  "files": [
   [
    "p29-entry-detail",
    "Merged entry and original source versions"
   ]
  ],
  "before": "O52 EntryDetail",
  "changes": [
   "The header card shows both source chips on the merged entry.",
   "Each source is a row with its own wording, date and type.",
   "The confirmation and the Change link sit together on a mint footer.",
   "The unmatched raw entry keeps its original text in a code block."
  ]
 },
 {
  "id": "P30",
  "title": "Dose disagreement and review status",
  "group": "Medicines",
  "files": [
   [
    "p30a-dose-check",
    "Which dose?"
   ],
   [
    "p30b-dose-routed",
    "Routed to Dr Lee"
   ]
  ],
  "before": "O53 DoseCheck",
  "changes": [
   "Ask Dr Lee to check stays the first and main choice, with the 2-business-day promise under it.",
   "Patient choice, Neither and Not now follow in a clear order.",
   "The routed state uses the same status tracker as P20, including the escalation step.",
   "Copy explains outcomes and never advises on dosing."
  ]
 },
 {
  "id": "P31",
  "title": "Identity mismatch: records held",
  "group": "Sharing, identity and account",
  "files": [
   [
    "p31-records-held",
    "Held-record explanation and recovery"
   ]
  ],
  "before": "O55 IdentityHeld",
  "changes": [
   "A calm lock badge on the task gradient replaces the warning triangle.",
   "The account identity sits in a grouped card for easy comparison.",
   "Check my details leads; Try again and calling the office sit side by side.",
   "Says plainly that no one can add the held records to the account."
  ]
 },
 {
  "id": "C01",
  "title": "Clinician sign-in",
  "group": "Clinician and admin",
  "files": [
   [
    "c01-clinician-sign-in",
    "Organization sign-in and sample clinician"
   ]
  ],
  "before": "O12 DoctorSignIn",
  "changes": [
   "The solid dark-green slab becomes the staging gradient panel with three value rows.",
   "The sign-in form uses staging inputs and the primary green.",
   "The Dr Lee route carries the Sample data chip used across the clinician staging app."
  ]
 },
 {
  "id": "A01",
  "title": "Super-admin review queue",
  "group": "Clinician and admin",
  "files": [
   [
    "a01-admin-review",
    "Open, waiting and resolved filters"
   ]
  ],
  "before": "O57 AdminReview",
  "changes": [
   "The black sidebar becomes the white clinician-staging navigation with a mint active item.",
   "Filters use the segmented control; four stat tiles summarise the queue.",
   "The table keeps record IDs only, with role-appropriate actions on each row.",
   "The rule that operations never decide clinical questions stays visible."
  ]
 },
 {
  "id": "X02",
  "title": "Lock-screen notification (specification)",
  "group": "External",
  "files": [
   [
    "x02-lock-screen",
    "Privacy-safe external update"
   ]
  ],
  "before": "O40 Lock",
  "changes": [
   "Specification only: the app is named Avinia HCS with the Avinia mark as its icon.",
   "Copy stays neutral: You have an update. Open Avinia to see it.",
   "Deep links: visit note, lab result with your doctor, and Nia flu-shot outreach, each opening behind sign-in."
  ]
 }
];
