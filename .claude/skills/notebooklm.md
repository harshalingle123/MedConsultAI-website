---
name: notebooklm
description: Complete API for Google NotebookLM - full programmatic access including features not in the web UI. Create notebooks, add sources, generate all artifact types, download in multiple formats. Activates on explicit /notebooklm or intent like "create a podcast about X"
source: https://github.com/teng-lin/notebooklm-py
---

# NotebookLM Automation

This skill provides complete programmatic access to Google NotebookLM — including capabilities not exposed in the web UI. Create notebooks, manage sources (URLs, YouTube, PDFs, audio, video, images), chat with content, and generate multiple artifact types.

## Installation (runtime not yet installed)

Skill definition is installed. To actually run commands, install the runtime:

```bash
pip install notebooklm-py
pip install "notebooklm-py[browser]"
playwright install chromium
notebooklm login   # Google OAuth
notebooklm list    # Verify auth
```

## Activation

**Explicit:** `/notebooklm` or tool name mention
**Intent detection:** Requests like "create a podcast about [topic]," "summarize these URLs," "generate a quiz," "turn this into audio"

## Autonomy Rules

**Run automatically:** status checks, auth diagnostics, listing commands, chat queries, context setting, artifact/source waiting (in subagent context)

**Ask before running:** destructive operations (`delete`), long-running generation, downloads, chat with `--save-as-note`, history saves

## Key Commands

| Task | Command |
|------|---------|
| Create notebook | `notebooklm create "Title"` |
| Add sources | `notebooklm source add [URL/file/YouTube]` |
| Chat | `notebooklm ask "question"` |
| Generate podcast | `notebooklm generate audio "instructions"` |
| Generate video | `notebooklm generate video "instructions"` |
| Generate quiz | `notebooklm generate quiz` |
| Download artifact | `notebooklm download [type] ./output` |
| Check status | `notebooklm artifact list` |
| Wait for completion | `notebooklm artifact wait [artifact_id]` |

## Generation Types

| Type | Command | Format |
|------|---------|--------|
| Podcast | `generate audio` | .mp3 |
| Video | `generate video` | .mp4 |
| Slide Deck | `generate slide-deck` | .pdf / .pptx |
| Infographic | `generate infographic` | .png |
| Report | `generate report` | .md |
| Quiz | `generate quiz` | .json/.md/.html |
| Flashcards | `generate flashcards` | .json/.md/.html |
| Mind Map | `generate mind-map` | .json |
| Data Table | `generate data-table` | .csv |

## Capabilities Beyond Web UI

- Batch downloads of all artifacts
- Quiz/flashcard export in multiple formats
- Mind map hierarchical JSON extraction
- Slide deck as editable .pptx
- Individual slide revision with natural language
- Source fulltext retrieval (indexed content)
- Save chat answers or conversation history as notes
- Programmatic sharing management

## Processing Times & Timeouts

| Operation | Duration | Timeout |
|-----------|----------|---------|
| Source processing | 30s–10 min | 600s |
| Audio generation | 10–20 min | 1200s |
| Video generation | 15–45 min | 2700s |
| Deep research | 15–30+ min | 1800s |

For long operations, spawn a background subagent with `artifact wait` + automatic download on completion.

## Authentication Env Vars

- `NOTEBOOKLM_HOME` – custom config directory
- `NOTEBOOKLM_PROFILE` – named profile
- `NOTEBOOKLM_AUTH_JSON` – inline auth (no file writes)

Parallel agents should use explicit notebook IDs (`-n` flag) rather than shared context files.

## Common Workflows

**Research to Podcast:** create notebook → add sources → wait for processing → `generate audio` → download

**Bulk Import with Waiting:** add multiple sources with `--json` to capture IDs → subagent waits for all sources → proceed with chat/generation

**Deep Web Research:** create notebook → start research with `--mode deep --no-wait` → subagent waits and imports sources automatically

## Error Handling

| Error | Action |
|-------|--------|
| Auth/cookie error | `notebooklm auth check` then `notebooklm login` |
| "No notebook context" | Use `-n <id>` or `notebooklm use <id>` |
| Rate limiting | Wait 5–10 min, retry |
| Download fails | Check `artifact list` for status |
| Invalid ID | Run `notebooklm list` to verify |

Exit codes: 0 (success), 1 (error), 2 (timeout).

## Limitations

**Unreliable (rate-limit prone):** audio, video, quiz, flashcard, infographic, slide deck generation
**Reliable:** notebooks, sources, chat, mind-map, reports, data-table

Workaround: check status after 5–10 min, retry, or fall back to the web UI.

## Language

Language is a **global** setting:

```bash
notebooklm language list           # 80+ languages
notebooklm language get
notebooklm language set zh_Hans
notebooklm generate audio --language ja  # per-command override
```

## JSON Output

Use `--json` for machine-readable results. Keys: `id`, `source_id`, `task_id`, `status` (sources: processing/ready/error; artifacts: pending/in_progress/completed).

Use `SourceFulltext.find_citation_context()` to locate source passages for citations.

## Troubleshooting

```bash
notebooklm status              # auth & context
notebooklm auth check          # diagnose
notebooklm auth check --test   # full network validation
notebooklm doctor              # health check
notebooklm doctor --fix        # auto-fix
notebooklm --version
```

## Note

Unofficial — uses undocumented Google APIs that may change without warning. Pin to specific release tags, never main branch.
