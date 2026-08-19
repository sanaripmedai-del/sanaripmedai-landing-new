---
name: supabase
description: Expert skill for Supabase PostgreSQL database, authentication, real-time analytics, edge functions, and MCP integration.
---

# Supabase Agent Skill

## Project Configuration
- **Project Ref**: `dquqrhckdyeehxvkjwjk`
- **URL**: `https://dquqrhckdyeehxvkjwjk.supabase.co`
- **Tables**:
  - `public.leads`: CRM leads submitted from landing page forms.
  - `public.analytics_visits`: Centralized analytics visit events.

## Best Practices
1. Use REST API or `@supabase/supabase-js` for browser client interactions.
2. Enable Row Level Security (RLS) on all public tables.
3. Use Supabase MCP tools (`list_tables`, `execute_sql`, `apply_migration`) for database management.
