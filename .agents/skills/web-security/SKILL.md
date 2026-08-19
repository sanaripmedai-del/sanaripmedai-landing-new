---
name: web-security
description: Production Web Application Security & Hardening standard. Implements OWASP Top 10 defenses, Content Security Policy (CSP), anti-XSS, anti-CSRF, rate limiting, input sanitization, secure headers, and sensitive data protection.
---

# Web Security & Cyberattack Hardening Skill

## 1. Security Headers Standard
Every production web application must implement strict security headers:
- `Content-Security-Policy`: Restricts allowed scripts, styles, images, and API connections.
- `X-Content-Type-Options: nosniff`: Prevents MIME-sniffing attacks.
- `X-Frame-Options: DENY`: Prevents Clickjacking attacks.
- `Strict-Transport-Security (HSTS)`: Enforces HTTPS everywhere.
- `Referrer-Policy: strict-origin-when-cross-origin`: Minimizes referrer data leaks.
- `Permissions-Policy`: Restricts unused browser features (camera, microphone, geolocation) unless explicitly allowed.

## 2. Input Sanitization & Anti-XSS
- Sanitize all user inputs (chat queries, lead form fields) before rendering or processing.
- Avoid dangerous APIs (`dangerouslySetInnerHTML`) without strict DOMPurify sanitization.
- Escape HTML entities in dynamically rendered strings.

## 3. Rate Limiting & Anti-Abuse
- Limit incoming client API requests (e.g. max 30 requests per minute per IP for chat & vision).
- Prevent automated form spam via honeypot fields and debounce/throttle mechanisms.

## 4. API & Data Protection
- Never expose private backend keys or database secrets in client bundles.
- Ensure Supabase / Postgres tables use Row Level Security (RLS).
