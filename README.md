# Crane

A standalone side-view crane game about momentum and accurate placement.

## Play
[Play Crane](https://dumb-tony.github.io/crane/) — public GitHub Pages deployment. You can also open `index.html` directly in a desktop browser. No installation, build, assets, or network is required for the downloaded game.

A/D move the trolley. W/S or Up/Down operate the winch. Space hooks or releases when the hook is within the dashed pickup ring. P pauses; R restarts. Pointer controls are also available.

Hook the concrete block, lift above the striped barrier, cross the yard, lower into the right-hand footprint, and release. The entire block must rest on the floor inside the footprint below 7 px/s for 1.5 seconds. Drops remain recoverable.

## Implementation and tests
Self-contained Canvas presentation, fixed 120 Hz physics, bounded catch-up, automatic pause on focus loss. This first slice is planar: no crane rotation, load rotation, wind, cable wrapping, or breakage. The cable is a unilateral point-mass constraint; the block uses axis-aligned collision. Low air damping leaves swing correction meaningful.

Run `node tests/physics.cjs` for deterministic tests of the exact embedded game script, including complete success and recovery routes. These are automated input replays, not human feel testing. See `docs/PLAYTEST.md` for evidence and limitations and `docs/GDD.md` for design.

