---
name: skill-creator
description: "Create/update AgentSkills. Use when: designing, structuring, or packaging skills with scripts, references, and assets."
---

# Skill Creator

## Structure

```
skill-name/
├── SKILL.md (required)
│   ├── YAML frontmatter: name, description
│   └── Markdown body
└── (optional) scripts/, references/, assets/
```

## Principles

- **Concise**: Only add what Codex doesn't know
- **Progressive disclosure**: Metadata → SKILL.md → references/
- **Avoid duplication**: SKILL.md OR references, not both

## Description (Critical!)

Frontmatter `description` is the **only** thing Codex reads to trigger. Include all "when to use" info:

```yaml
description: "Comprehensive doc editing. Use when: (1) creating docs, (2) modifying content, (3) tracked changes, (4) adding comments"
```

## SKILL.md Guidelines

- Keep < 500 lines
- Use imperative/infinitive form
- Move details to `references/` if long

## Creation Steps

1. Understand concrete examples
2. Plan reusable contents (scripts/refs/assets)
3. Initialize: `scripts/init_skill.py <name> --path skills/`
4. Edit SKILL.md and add resources
5. Package: `scripts/package_skill.py <path>`

## Avoid

- README.md, INSTALLATION_GUIDE.md, etc.
- Auxiliary documentation
- Duplicate info between SKILL.md and references/
