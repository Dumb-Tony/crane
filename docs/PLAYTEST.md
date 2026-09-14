# Playtest log

## 14 September 2026 — first playable candidate
Automated Node.js v24.19.0 simulation checks execute the exact inline production script with a minimal DOM stub at 120 Hz. Run `node tests/physics.cjs`. Browser checks are pending deployment.

- Full success: hook; hoist 2.5 s; trolley right 3.85 s; coast 3 s; lower 2.5 s; wait 5 s; release. Accepted at simulation time 18.517 s, center x=895.373, after the full rest dwell.
- Recovery: hook, lift 1 s, release with upward velocity, observe ballistic fall and persistent block at floor y=494, lower hook, rehook, then complete the same route successfully.
- Fast trolley acceleration induces more than 25 px lateral cable deflection; winching preserves lateral motion.
- A 0.2 s rightward corrective pulse after the tested swing setup reduced measured swing energy from 13983.82 to 10775.77 (about 23%) versus waiting for the same interval.
- A fast airborne target pass never starts dwell. An attached resting block cannot win. Released rest for 1.4 s cannot win; continuing beyond 1.5 s can.
- Pause freezes the complete simulation state; resume continues; reset clears motion, time, and input.
- Barrier blocks a low crossing. A 60-second alternating-input stress sequence remains finite and above the floor.

A failed early route landed just outside the pad and correctly failed acceptance. The release test originally checked falling too soon: a rising load correctly continues upward before falling. The test now allows its ballistic arc.

These are deterministic scripted input replays and state fixtures, not manual feel testing. External human testing remains necessary. Questions: Can a new player hook within 30 seconds? Can they explain a swing? Can they recover a drop without restarting? Is the small countersteer understandable? Does the final placement feel earned?

## Browser validation and layout refinement
The deployed game and `tests/browser.html` were checked in Codex's Chromium-based in-app browser. The browser harness passed complete success and recovery routes, visible success overlay, actual restart-button and keyboard-hook handlers, pause/resume, focus loss, and responsive iframe widths of 390, 768, and 1100 px with no horizontal page overflow. Both game and harness console checks returned no warnings or errors. Initial screenshot inspection showed controls too far below the yard on short screens; the canvas now caps its height and preserves world aspect ratio with letterboxing. The refined deployment (ce1bf34) was reloaded and the complete browser harness passed again; the screenshot confirmed the controls fit below the yard on the tested short desktop viewport.

Local file navigation was blocked by browser URL policy; browser testing used the public HTTPS deployment. The offline file itself remains self-contained. No manual human control-feel session or physical touchscreen test has occurred. Small screens prioritize control accessibility over fine placement visibility. Pointer capture cleanup is implemented; multi-touch behavior is not independently verified.

Additional physics regression: the longer cable has a slower quarter swing than the short cable (120 vs 360 px), preserving the gravity-driven period relationship.

After invoking the browser viewport override, the browser log reported one unattributed MutationObserver TypeError. Neither the game nor test harness uses MutationObserver; no exception was captured by the in-game error listener and all route/layout checks still passed. Its source was not established, so this is retained as a browser-tooling limitation rather than omitted. Responsive width coverage comes from the harness iframe checks, not a verified physical phone screenshot.

