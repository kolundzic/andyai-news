# Pack Launcher Spec v0.1

**Status:** draft-active  
**Scope:** local/web launcher concept for canonical ZIP-based repo upgrade execution  
**Repo:** andyai.news  
**Purpose:** Define the future launcher that allows a user to choose a numbered UDARAC and execute the corresponding ZIP/apply-script workflow with minimal manual work.

--------------------

## Core idea

The launcher exists to reduce the current workflow to a simple operator action:

1. choose repo
2. choose numbered UDARAC
3. confirm
4. execute
5. watch PASS/FAIL result

The launcher should already know:

- which ZIP belongs to the chosen UDARAC
- which apply script belongs to it
- which repo directory is the target
- which commit message, tag, and release title are expected
- which files are in scope
- which areas must remain untouched

In short:

**the human chooses the strike, the system carries the weight.**

--------------------

## Canonical rule

**1 UDARAC = 1 ZIP = 1 APPLY SCRIPT = 1 COMMIT = 1 TAG = 1 RELEASE**

The launcher is not a new workflow.
It is a higher-level activation layer for the same workflow.

--------------------

## Operator experience

The ideal operator experience is:

- open launcher
- select repo
- see ordered strike list
- select one strike number
- see scope summary
- press execute
- receive result:
  - PASS
  - FAIL
  - rollback guidance if needed

Final emotional goal:

**TAP-TAP and almost done.**

--------------------

## Launcher responsibilities

The launcher should:

- read a strike registry
- show UDARAC number, name, and description
- show target repo path
- show ZIP file name
- show apply script name
- show commit message
- show tag
- show release title
- show protected files/areas
- verify repo cleanliness before execution
- trigger the apply script
- stream logs
- return final PASS/FAIL

--------------------

## Inputs the launcher needs

For each strike, the launcher should know at minimum:

- strike_number
- strike_slug
- repo_name
- repo_dir
- zip_file
- zip_path
- pack_root
- script_file
- script_path
- commit_message
- tag_name
- release_title
- scope_files
- protected_areas
- expected_result
- release_notes_file

--------------------

## Suggested registry structure

Example conceptual schema:

```json
{
  "repo_name": "andyai-news",
  "repo_dir": "~/Documents/Projects/andyai-news",
  "strikes": [
    {
      "strike_number": 17,
      "strike_slug": "public-reading-rhythm-micro-pass",
      "zip_file": "andyai-news-v0.1-public-reading-rhythm-micro-pass-r1.zip",
      "script_file": "apply-andyai-news-public-reading-rhythm-micro-pass.sh",
      "commit_message": "feat: refine public reading rhythm",
      "tag_name": "v0.1-public-reading-rhythm-micro-pass-r1",
      "release_title": "andyai.news v0.1 — Public Reading Rhythm Micro Pass"
    }
  ]
}
```

--------------------

## Suggested modes

### Mode 1 — Local desktop launcher
Best for:
- speed
- direct filesystem access
- one-button apply
- lower complexity

Possible stack:
- Python + simple GUI
- Electron
- lightweight webview wrapper
- local FastAPI + browser UI

### Mode 2 — Web dashboard
Best for:
- centralized project oversight
- remote operator workflows
- multi-project visibility
- future Vercel/hosted interface

Likely requirement:
- local bridge/agent still needed for filesystem + git execution

**Current recommendation:** start local first, web later.

--------------------

## Recommended first version

Start with a **local launcher**.

Why:

- simplest path
- direct access to `~/Documents/Projects`
- direct access to `~/Downloads`
- easiest to control
- easiest to debug
- easiest to evolve into a web-backed dashboard later

--------------------

## Suggested first-screen layout

1. Repo selector
2. Strike list table
3. Scope summary panel
4. Protected areas panel
5. Execute button
6. Live log panel
7. Final PASS/FAIL result box

--------------------

## Safety rules

The launcher must never skip:

- repo existence check
- git repo verification
- clean working tree check
- ZIP existence check
- PACK_ROOT verification
- release notes verification

If any of these fail:

**execution stops immediately.**

--------------------

## Why this matters

The launcher turns the current canonical workflow into something even more repeatable.

Today:
- human downloads ZIP and script
- human runs the script

Later:
- human selects strike number
- launcher does the rest

This does not replace the canon.
It operationalizes it.

--------------------

## Canonical summary

**The Pack Launcher is the future control panel for the existing ZIP/apply-script canon.**
It should make the workflow easier, faster, and harder to misuse without changing its core logic.
