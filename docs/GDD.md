# Crane — first-pass GDD

Status: design hypothesis, prototype first. Source: Game Ideas Planning (conversation 6aa70669-0724-83ea-8d1a-5398e0350b84), continued 14 September 2026. Controls below are proposed prototype mappings, not locked design decisions.

## Fantasy and identity
Move heavy things with terrifying precision.

Momentum, anticipation, and spectacle. Swing is initially a hazard and eventually a tool for skilled placement.

## Design pillars
Tiny control set. Physical mastery rather than stat upgrades. Readable cause and effect. A disaster should usually create another problem instead of stopping play. Skill progression is new situation → struggle → understand → master → harder situation. No skill trees, rarity tiers, or arbitrary balance bonuses.

## Core loop
Observe the situation, act with the core tool/body, read the physical response, correct or recover, complete the objective, and retry for a cleaner approach. Restart is always a deliberate option, never the default consequence of a small mistake.

## Proposed controls
A/D rotate, W/S trolley, Up/Down winch, Space hook/release; R explicitly restarts. If a planar prototype omits rotation, disclose that reduction and retain trolley/winch mastery.

## First standalone HTML vertical slice
A small construction yard with a pickup pad, one suspended load, an obstacle, and a placement pad. Pick up the block, clear the obstacle, then settle and release it accurately.

Gravity-driven pendulum motion under an accelerating suspension point; cable length affects swing behavior. Hoisting should not erase lateral velocity. Load collision and release remain physical. Show cable, hook, target footprint, and enough depth/height information for fair control.

Desktop keyboard and pointer first. Make a self-contained index.html with embedded CSS and JavaScript, procedural visuals, no CDN, no installation, and no required network requests. Render with Canvas or native browser graphics. Use a fixed simulation step, bounded frame catch-up, and clear input state on focus loss. Physics may be simplified but must remain consistent and disclosed.

## Success and recovery
The released load must rest inside the target at low velocity for a dwell interval. Verify a fast trolley move induces swing, countersteering can damp it, a dropped block persists and can be hooked again, and placement cannot succeed while flying through the target.

## Mastery and replay hypothesis
First 30 seconds: cause and arrest a swing. Ten hours: anticipate motion and place while moving. Long-term hypothesis: geometry, load shape, and readable wind deepen the same four controls.

## Beyond the prototype
Wind is readable and optional after baseline motion works. Long beams, panels, and containers change rotational behavior. Later multi-point rigging and large construction scenes; defer weather systems, many cranes, and destructive megaprojects.

## Main risk
Overdamping removes mastery; chaotic or unreadable oscillation removes trust. Tune acceleration, damping, camera, and placement tolerance together.

## Presentation and accessibility
Readable shapes and silhouettes before decorative assets. Persistent short controls and objective text. Show interaction eligibility before input. Do not rely on color alone. Provide restart and pause, reduced camera shake, and a useful window-size response. Sound is optional; do not block play on autoplay permission.

## Validation gate
A new player should start interacting within 30 seconds. Run an entire successful objective, intentionally cause a recoverable mistake, and complete after recovery. Record automated browser checks separately from manual feel testing. Ask playtesters what caused their failure, whether correction felt possible, and whether they wanted another attempt. Choose the next milestone from this evidence rather than adding content automatically.

## Implemented M1 — 14 September 2026
The first prototype uses a fixed side elevation. A/D trolley, W/S or arrows winch, Space hook/release, P pause, R restart; pointer controls mirror these actions. Crane rotation is deliberately omitted. Pickup begins with the hook in reach of a resting concrete block. A 150 px obstacle separates it from a 125 px target footprint.

The load is a translating 52 px square with gravity, low air drag, inelastic ground/barrier contacts, and a unilateral cable constraint driven by trolley acceleration. Shortening the cable changes radial velocity without zeroing lateral velocity. The rendered cable attaches to the top of the block; its effective physics length measures to the mass center. There is no angular rigid-body physics, cable wrapping, rope collision, or wind. Contacts take precedence over cable extension during an obstructed pull. These simplifications are prototype boundaries.

Acceptance requires the released block fully within the footprint, on the yard floor, below 7 px/s continuously for 1.5 seconds. Successful placement freezes the yard and presents time and release count. A restart is optional. No camera shake or audio is used. The next milestone is external human testing of control feel and recovery readability before adding content.
