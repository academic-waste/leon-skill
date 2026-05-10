# Leon Skill MVP

This repository contains a Codex skill that answers questions using Leon-inspired public frameworks with citations to source videos.

Current MVP coverage:

- Cross-topic maps
  - frameworks
  - values
  - tactics
  - voice calibration
- 根学 / Root Theory
  - 灵根学
  - 浮根学
  - 动根学
- Wealth and freedom
  - MultiFIRE
  - money as a tool
  - first bucket of capital
  - assets and cash flow
  - walk away ability
  - investing in yourself
- Worldview
  - success and happiness
  - life meaning
  - conscious choice
  - death awareness
  - desire and identity
  - everyday joy
- Travel and life experiences
  - Bangkok Songkran
  - Chiang Mai lantern festival
  - Bali cooking, farm, and nature stays
  - Cappadocia hot air balloon and horseback sunset
  - Nepal EBC hiking
  - New Zealand Hobbiton and glowworm cave experiences
  - London Christmas lights
  - Zermatt skiing
  - Kumano Kodo evidence boundary

The skill does not impersonate Leon. It answers based on curated evidence cards and cites public YouTube sources with timestamps.

## Install

Copy the `leon` folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R leon ~/.codex/skills/leon
```

Then start a new Codex conversation and ask:

```text
请使用 $leon，用 Leon 的根学分析：我应该扎根一个城市，还是继续流动？
```

Or:

```text
请使用 $leon，基于 Leon 的财富自由观点回答：我应该先买房还是先投资自己？
```

## Test Evidence Search

From the repo root:

```bash
node leon/scripts/search_evidence.mjs 根学
node leon/scripts/search_evidence.mjs 财富自由
node leon/scripts/search_evidence.mjs 第一桶金
node leon/scripts/search_evidence.mjs 人生意义
node leon/scripts/search_evidence.mjs 幸福
node leon/scripts/search_evidence.mjs 清迈
node leon/scripts/search_evidence.mjs 卡帕多奇亚
node leon/scripts/search_evidence.mjs 熊野古道
```

## Files

- `leon/SKILL.md`: skill instructions
- `leon/references/leon-frameworks.md`: cross-topic thinking frameworks
- `leon/references/leon-values.md`: recurring values and worldview priorities
- `leon/references/leon-tactics.md`: practical tactics and exercises
- `leon/references/leon-voice.md`: voice calibration for softer, less tactical answers
- `leon/references/leon-root-theory.md`: Root Theory reference
- `leon/references/leon-wealth-freedom.md`: wealth and freedom reference
- `leon/references/leon-worldview.md`: success, happiness, and life meaning reference
- `leon/references/leon-experiences.md`: travel and life-experience recommendations
- `leon/references/evidence.jsonl`: machine-readable evidence cards
- `leon/references/evidence-index.md`: readable evidence index
- `leon/scripts/search_evidence.mjs`: simple local evidence search

## Notes

The original transcripts and working files are not included in this repository. This MVP shares only the usable skill, evidence summaries, source links, and timestamps.
