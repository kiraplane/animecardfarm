import { sources } from './sources';
import type { UnitNameWatch, UnitRoleRanking } from './types';

export const unitRoleRankings: UnitRoleRanking[] = [
  {
    slug: 'main-carry',
    role: 'Main Carry',
    tier: 'Recommended',
    earlyValue: 'High',
    longTermValue: 'High',
    rerollCost: 'High',
    bestFor: ['Story waves', 'Boss pressure', 'First serious traits'],
    decision:
      'Build one main carry before spreading trait shards and stat rerolls across the whole squad.',
    buildNotes: [
      'Prioritize the unit that clears waves without needing constant replacement.',
      'Give the carry your first serious trait or stat reroll attempt.',
      'Stop upgrading filler once the carry can push the next reward breakpoint.',
    ],
    avoid:
      'Do not spend Perfect Cubes on a unit just because it is your first pull.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'boss-damage',
    role: 'Boss Damage',
    tier: 'Recommended',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Boss waves', 'Madora checks', 'Late wave cleanup'],
    decision:
      'Keep a boss-focused damage slot ready once normal waves stop being the only problem; Madora/Madara-style burn or burst units are the current watch target.',
    buildNotes: [
      'Look for strong single-target output or burst windows.',
      'Pair boss damage with control so it has time to work.',
      'Upgrade after your main carry is stable.',
    ],
    avoid:
      'Do not make boss damage your first investment if basic wave clears still fail.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'control',
    role: 'Control',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'High',
    rerollCost: 'Low',
    bestFor: ['Wave stalls', 'Crowded lanes', 'Co-op support'],
    decision:
      'Use control when enemies reach the end before your damage units can finish the lane.',
    buildNotes: [
      'Control is strongest when it protects a carry, not when it replaces one.',
      'Avoid over-upgrading control before damage is solved.',
      'Check whether the mode rewards faster clears or safer clears.',
    ],
    avoid:
      'Do not chase perfect control traits on a unit that only appears in easy stages.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'economy',
    role: 'Economy',
    tier: 'Situational',
    earlyValue: 'Medium',
    longTermValue: 'Medium',
    rerollCost: 'Low',
    bestFor: ['Gold flow', 'Upgrade tempo', 'Long wave modes'],
    decision:
      'Economy units matter when they convert into earlier upgrades, but they are not a substitute for damage.',
    buildNotes: [
      'Use economy units like Fastwagon only if they help you place or upgrade the carry sooner.',
      'Cut economy investment when a boss or leak becomes the real wall.',
      'Treat economy traits as account-stage tools.',
    ],
    avoid:
      'Do not keep an economy unit on the field if the lane is already leaking.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'support',
    role: 'Support',
    tier: 'Situational',
    earlyValue: 'Low',
    longTermValue: 'High',
    rerollCost: 'Medium',
    bestFor: ['Carry buffs', 'Team scaling', 'Co-op clears'],
    decision:
      'Support gets better after you know which carry, mode, or lane setup it is improving; Shinks-style buffs should not replace your first carry.',
    buildNotes: [
      'Build support around a proven carry.',
      'Prefer repeatable buffs over flashy effects you cannot trigger reliably.',
      'Save premium rerolls until support value is visible in harder stages.',
    ],
    avoid:
      'Do not upgrade support first if it only improves weak starter damage.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'starter-filler',
    role: 'Starter Filler',
    tier: 'Data Pending',
    earlyValue: 'Low',
    longTermValue: 'Low',
    rerollCost: 'Low',
    bestFor: ['Opening waves', 'Temporary slots', 'Learning placement'],
    decision:
      'Use filler to start playing, then replace it as soon as your codes and summons produce a better role.',
    buildNotes: [
      'Keep upgrades minimal unless the unit unlocks a real stage breakpoint.',
      'Use filler to test maps and lane pressure.',
      'Retire it before spending scarce rerolls.',
    ],
    avoid: 'Do not confuse early availability with long-term priority.',
    sourceConfidence: 'medium',
  },
];

export const recommendedRoles = unitRoleRankings.filter(
  (entry) => entry.tier === 'Recommended'
);

const topTierSources = [
  sources.beebomTierList.label,
  sources.pocketTacticsTierList.label,
  sources.proGameGuidesTierList.label,
  sources.destructoidTierList.label,
  sources.sportskeedaTierList.label,
  sources.chainplayTierList.label,
  sources.gamesGgTierList.label,
];

export const unitNameWatchlist: UnitNameWatch[] = [
  {
    slug: 'gometa-ssj4',
    name: 'Gometa (SSJ4)',
    aliases: ['Gogeta', 'Gometa', 'Gometa SSJ4'],
    consensus: 'Top carry signal',
    roleFit: ['Main Carry', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Treat Gometa as a keeper-carry candidate when you can support the evolution path and trait cost.',
    evidence:
      'Multiple current competitor tier lists place Gometa/Gogeta variants in the highest group, usually as a premium damage unit rather than a cheap starter answer.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'madora-gunbai',
    name: 'Madora (Gunbai)',
    aliases: ['Madara', 'Madora', 'Madara Gunbai'],
    consensus: 'Top boss and burn signal',
    roleFit: ['Boss Damage', 'Main Carry'],
    priority: 'Recommended',
    decision:
      'Use Madora/Madara as the main named-unit answer for players asking about boss damage, burn, meteors, or Ninja Village progression.',
    evidence:
      'Competitor pages repeatedly rank Madora/Gunbai near the top and describe it around strong damage, burn or boss utility, so it is strong enough to watch before spending premium rerolls elsewhere.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'woo-shadow',
    name: 'Woo (Shadow)',
    aliases: ['Woo', 'Sung Jin-Woo', 'Shadow'],
    consensus: 'Top carry signal',
    roleFit: ['Main Carry', 'Boss Damage'],
    priority: 'Recommended',
    decision:
      'Build Woo as a late-scaling carry candidate only after checking whether your account can actually field and upgrade the unit.',
    evidence:
      'Several current lists keep Woo/Shadow in the top group, but the value depends on access and investment rather than early availability.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'puppeteer-transcendent',
    name: 'Puppeteer (Transcendent)',
    aliases: ['Puppeteer', 'Puppeteer Transcendent'],
    consensus: 'High-end damage and control signal',
    roleFit: ['Main Carry', 'Control'],
    priority: 'Recommended',
    decision:
      'Keep Puppeteer on the premium-target list, especially when you need durable damage or control rather than a pure farming unit.',
    evidence:
      'Competitors consistently treat Puppeteer variants as a high-value unit, with role descriptions leaning toward tanky damage, aggro, or hard-stage utility.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'shanron-omega',
    name: 'Shanron (Omega)',
    aliases: ['Shanron', 'Shenron', 'Omega'],
    consensus: 'Late utility signal',
    roleFit: ['Boss Damage', 'Support', 'Control'],
    priority: 'Situational',
    decision:
      'Keep Shanron as a strong late-game target, but do not let it delay a simpler carry if your current wall is early wave clear.',
    evidence:
      'The main agreement is that Shanron/Omega is valuable; the practical disagreement is whether it should be chased before cheaper carry or boss-damage upgrades.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'shinks-emperor',
    name: 'Shinks (Emperor)',
    aliases: ['Shinks', 'Shanks', 'Emperor'],
    consensus: 'Support value with ranking disagreement',
    roleFit: ['Support', 'Control'],
    priority: 'Situational',
    decision:
      'Use Shinks when your squad already has damage worth buffing; avoid treating support value as a replacement for a carry.',
    evidence:
      'Some competitors value Shinks highly for support, while others rank it lower when judging raw damage, so the safe interpretation is support-first rather than universal top carry.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
  {
    slug: 'fastwagon',
    name: 'Fastwagon',
    aliases: ['Speedwagon', 'Fastwagon'],
    consensus: 'Economy role, not DPS',
    roleFit: ['Economy'],
    priority: 'Situational',
    decision:
      'Use Fastwagon when money acceleration changes placement or upgrade timing, then cut back if damage becomes the real wall.',
    evidence:
      'Competitor rankings split because some judge Fastwagon as economy value and others judge combat output. That makes it a role pick, not a universal meta carry.',
    sourceLabels: topTierSources,
    sourceConfidence: 'medium',
  },
];
