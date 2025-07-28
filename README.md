
# 🛠 Project Structure & Component Design Guide

This document summarizes the conventions and best practices followed in building a scalable Next.js (App Router) project with TypeScript.
---

## 📂 Project Structure Overview

```
/app                  # Next.js pages and layouts (App Router)
/components           # Reusable UI components
  /common             # Generic UI (Button, Input, Modal)
  /layout             # Layout-related components
  /scope              # Page-specific components

/hooks                # Custom React hooks

/providers            # State management and context providers

/lib                  # Utilities with external dependencies (e.g. API clients)

/services             # Domain-specific business logic

/types                # TypeScript type declarations

/constants            # App-wide constants

/utils                # Generic helpers (no external deps)

/middleware.ts        # Middleware (e.g., auth checks)

.env.local            # Environment variables

/tsconfig.json        # TypeScript config

/next.config.js       # Next.js config
```

---

## 🧩 Component Conventions

* **File naming:** kebab-case (e.g., `my-best-component.tsx`)
* **Component naming:** PascalCase (e.g., `MyBestComponent`)
* **Component structure:**

```tsx
const MyComponent = ({ title }: Props) => {
  // 1. State hooks
  // 2. Handlers/functions
  // 3. Effects (useEffect)
  // 4. Scoped mini components
  // 5. JSX return
};
```

* **Mini components:** Scoped inside main component file if used only locally.

---

## ⚠️ Notes

  

* Types are strictly defined for all props and state.

* Error handling is implemented on pages where needed.

* Robots.txt is configured to block Google indexing (no SEO concerns for this assessment).

  

---

  

## 🔗 Live Preview

  

[https://rashed-10ms-assessment.vercel.app](https://rashed-10ms-assessment.vercel.app)

  
  

>  *Note:* I’m submitting the live URL because I’m not sure about the GitHub build version.

> No need to worry about search indexing — I’ve blocked all crawlers from indexing the site.

---

Thanks