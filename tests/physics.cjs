// Deterministic physics tests use the exact inline production script with a minimal DOM stub.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const html=fs.readFileSync('index.html','utf8');
const elements=new Map();function el(s){if(!elements.has(s))elements.set(s,{style:{},querySelector:el,getContext:()=>({}),addEventListener(){}});return elements.get(s)}
const sandbox={document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){}},requestAnimationFrame(){},console};vm.createContext(sandbox);vm.runInContext(html.match(/<script>([\s\S]*?)<\/script>/)[1]+`;globalThis.api={reset,step,hookAction,togglePause,keys,get s(){return state}}`,sandbox);const a=sandbox.api;
function run(sec,keys=[]){a.keys.clear();keys.forEach(k=>a.keys.add(k));for(let i=0;i<Math.round(sec*120);i++)a.step();a.keys.clear()}
function test(name,f){a.reset();f();console.log('PASS',name)}
function route(){run(2.5,['w']);run(3.85,['d']);run(3);assert(a.s.load.x>590&&a.s.load.y<344);run(2.5,['s']);run(5);a.hookAction();run(3);assert(a.s.won);}
test('full success route from initial pickup',()=>{a.hookAction();route();console.log('Placement',a.s.time.toFixed(3),a.s.load.x.toFixed(3))});
test('physical drop, persistence, rehook and full success after recovery',()=>{a.hookAction();run(1,['w']);a.hookAction();const y=a.s.load.y;run(.5);assert(a.s.load.y>y);run(2);assert.equal(a.s.load.y,494);run(1,['s']);assert.equal(a.s.drops,1);a.hookAction();assert(a.s.attached);route()});
test('fast trolley motion creates swing; hoisting preserves lateral motion',()=>{a.hookAction();run(2.5,['w']);run(.8,['d']);assert(Math.abs(a.s.load.x-a.s.trolley)>25);let vx=a.s.load.vx;run(1/120,['w']);assert(Math.abs(a.s.load.vx)>Math.abs(vx)*.8)});
function energy(){let b=a.s.load,dx=b.x-a.s.trolley,l=a.s.length;return .5*(b.vx-a.s.tv)**2+680*(l-Math.sqrt(Math.max(0,l*l-dx*dx)))}
function swing(pulse){a.reset();a.hookAction();run(2.5,['w']);run(.8,['d']);run(.9);run(.2,pulse?['d']:[]);run(1);return energy()}
let passive=swing(false),active=swing(true);console.log('Damping comparison',passive,active);
test('countersteer toward load reduces swing energy',()=>assert(active<passive));
test('airborne fast pass through target cannot win',()=>{Object.assign(a.s.load,{x:830,y:460,vx:350,vy:-160});run(.2);assert.equal(a.s.dwell,0);assert(!a.s.won)});
test('resting attached block cannot win; released block needs entire dwell',()=>{Object.assign(a.s.load,{x:870,y:494,vx:0,vy:0});a.s.trolley=870;a.s.length=414;a.s.attached=true;run(2);assert(!a.s.won);a.hookAction();run(1.4);assert(!a.s.won);run(.2);assert(a.s.won)});
test('pause freezes time and motion; resume and reset clear controls',()=>{a.hookAction();run(.5,['d']);a.togglePause();let snapshot=JSON.stringify(a.s);run(2);assert.equal(JSON.stringify(a.s),snapshot);a.togglePause();run(.1);assert(a.s.time>.5);a.reset();assert.equal(a.s.time,0);assert.equal(a.keys.size,0);assert.equal(a.s.load.x,190)});
test('barrier collision and 60-second stressed simulation stay finite and recoverable',()=>{a.hookAction();run(2.5,['d']);assert(a.s.load.x<=439);for(let i=0;i<60;i++)run(1,[i%2?'a':'d',i%3?'w':'s']);for(let b of [a.s.load,a.s.hook])for(let p of ['x','y','vx','vy'])assert(Number.isFinite(b[p]));assert(a.s.load.y<=494)});

