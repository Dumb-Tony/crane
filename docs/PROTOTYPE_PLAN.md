# Crane: first build milestone

## M0 — repository and design
Own Git repository, focused GDD, standalone browser entry point plan, playtest log, and sharing guide.

## M1 — playable core slice
1. Create index.html with embedded styles, code, controls, pause, and restart.
2. Implement the smallest readable scene: A small construction yard with a pickup pad, one suspended load, an obstacle, and a placement pad. Pick up the block, clear the obstacle, then settle and release it accurately.
3. Implement consistent physical response: Gravity-driven pendulum motion under an accelerating suspension point; cable length affects swing behavior. Hoisting should not erase lateral velocity. Load collision and release remain physical. Show cable, hook, target footprint, and enough depth/height information for fair control.
4. Add objective detection: The released load must rest inside the target at low velocity for a dwell interval. Verify a fast trolley move induces swing, countersteering can damp it, a dropped block persists and can be hooked again, and placement cannot succeed while flying through the target.
5. Complete a success route and a recovery route, and inspect browser errors and resizing.
6. Commit a playable baseline and document controls, known simplifications, and checks actually performed.

## Scope gate
No campaign, progression economy, networking, asset pipeline, or dependency-heavy framework. Do not substitute a generic movement demo for the central mechanic. If a feature is too risky, document the reduction and preserve the core hypothesis.

## Later sharing milestone
Use this repository's own remote and static hosting; follow the parent project's standing instructions when shipping. Keep published contents limited to this game. Record the verified public URL and commit in README. First request prepares for later external testing; never report a public link before deployment succeeds.
