# Leon Skill MVP

This repository contains a portable AI skill that answers questions using Leon-inspired public frameworks with citations to source videos. The same `leon/` folder is intended to work in Codex, Claude Code, and ChatGPT web Skills.

Current MVP coverage:

- Cross-topic maps
  - frameworks
  - values
  - tactics
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
- Investing and real estate
  - stock/fund principles
  - broad index fund framing
  - RSU and concentration risk
  - real-estate leverage
  - mortgage and rate-regime thinking
  - house hacking as a local case pattern
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

You do not need different packages for different tools. Use the same `leon/` folder and place it in the skill directory for your client.

### Codex

Copy the `leon` folder into your Codex skills directory:

```bash
mkdir -p ~/.codex/skills
cp -R leon ~/.codex/skills/leon
```

Restart Codex, then ask:

```text
请使用 $leon，用 Leon 的根学分析：我应该扎根一个城市，还是继续流动？
```

Or:

```text
请使用 $leon，基于 Leon 的财富自由观点回答：我应该先买房还是先投资自己？
```

### Claude Code

For a personal skill available across projects:

```bash
mkdir -p ~/.claude/skills
cp -R leon ~/.claude/skills/leon
```

For a project skill shared with a repo:

```bash
mkdir -p .claude/skills
cp -R leon .claude/skills/leon
```

Start or restart Claude Code, then ask naturally or invoke the skill directly:

```text
/leon 用根学分析：我应该扎根一个城市，还是继续流动？
```

The skill includes Claude Code-compatible script instructions using `${CLAUDE_SKILL_DIR}`, so bundled scripts can be found no matter where the skill is installed.

### ChatGPT Web Skills

ChatGPT web Skills may not run local Node scripts. This skill therefore includes `leon/references/chatgpt-quick-evidence.md` as a no-script evidence map.

To upload:

1. Create a zip whose root contains `SKILL.md`:
   ```bash
   cd leon
   zip -r ../leon-skill.zip . -x "*.DS_Store"
   cd ..
   ```
2. In ChatGPT web, open `Profile -> Skills`.
3. Create a new skill and upload `leon-skill.zip`.
4. Ask ChatGPT to use the Leon skill.

Make sure the uploaded skill root contains `SKILL.md`, `references/`, `scripts/`, and `agents/`. If you zip the whole repository instead of the `leon` skill contents, ChatGPT may not detect the skill correctly.

## Test Evidence Search

From the repo root, Codex and Claude Code can test evidence search with:

```bash
node leon/scripts/search_evidence.mjs 根学
node leon/scripts/search_evidence.mjs 财富自由
node leon/scripts/search_evidence.mjs 第一桶金
node leon/scripts/search_evidence.mjs 指数基金
node leon/scripts/search_evidence.mjs 房地产 杠杆
node leon/scripts/search_evidence.mjs RSU 集中风险
node leon/scripts/search_evidence.mjs 人生意义
node leon/scripts/search_evidence.mjs 幸福
node leon/scripts/search_evidence.mjs 清迈
node leon/scripts/search_evidence.mjs 卡帕多奇亚
node leon/scripts/search_evidence.mjs 熊野古道
```

From an installed Claude Code skill, the equivalent path is:

```bash
node "${CLAUDE_SKILL_DIR}/scripts/search_evidence.mjs" 根学
```

If script execution is unavailable, read `leon/references/chatgpt-quick-evidence.md` and the relevant topic reference instead.

## Files

- `leon/SKILL.md`: skill instructions
- `leon/references/chatgpt-quick-evidence.md`: compact no-script evidence map for ChatGPT web
- `leon/references/leon-frameworks.md`: cross-topic thinking frameworks
- `leon/references/leon-values.md`: recurring values and worldview priorities
- `leon/references/leon-tactics.md`: practical tactics and exercises
- `leon/references/leon-root-theory.md`: Root Theory reference
- `leon/references/leon-wealth-freedom.md`: wealth and freedom reference
- `leon/references/leon-investing-real-estate.md`: investing, stocks/funds, real-estate, leverage, and house-hacking reference
- `leon/references/leon-worldview.md`: success, happiness, and life meaning reference
- `leon/references/leon-experiences.md`: travel and life-experience recommendations
- `leon/references/evidence.jsonl`: machine-readable evidence cards
- `leon/references/evidence-index.md`: readable evidence index
- `leon/scripts/search_evidence.mjs`: simple local evidence search

## Notes

The original transcripts and working files are not included in this repository. This MVP shares only the usable skill, evidence summaries, source links, and timestamps.
