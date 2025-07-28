
# 🛠️ Project Structure & Component Design Guide

This guide outlines conventions and best practices for building scalable, maintainable components and organizing a Next.js (App Router) project using TypeScript.


## 📦 Folder Structure

```
/app                        # Next.js App Router pages and layouts
  /dashboard                # Example route group
    layout.tsx
    page.tsx

/components                 # Reusable UI components
  /common                   # Generic UI (Button, Input, Modal)
  /layout                   # Layout-related components
  /scope                    # Component used only on single pages.

/hooks                      # All React/Next.js custom hooks
  useRichText.ts

/providers                      # State managements lib or Other providers
  store.ts
  RTQQueryProvider.ts
  ThemeProvider.ts

/lib                        # Shared libraries/utilities (with external dependencies)
  auth.ts                   # E.g., token parsing
  fetcher.ts                # Axios/fetch wrapper
  prisma.ts                 # Prisma client instance

/services                   # Business logic, separated by domain
  /auth
    login.ts
    logout.ts
    register.ts
    index.ts
  /user
    getUserProfile.ts
    updateUser.ts
    index.ts

/types                      # TypeScript types/interfaces
  auth.d.ts
  user.d.ts
  purchase.d.ts
  index.d.ts

/constants                  # Application-wide constants
  routes.ts
  roles.ts
  messages.ts

/utils                     # Generic helpers without external dependencies
  formatDate.ts
  debounce.ts

/middleware.ts              # Middleware logic (e.g., auth check)
.env.local                  # Environment variables
/tsconfig.json              # TypeScript configuration
/next.config.js             # Next.js configuration

```



## 🧩 Component Naming Convention

-   **File Name:** Used kebab-case for filenames.  
    Example: `my-best-component.tsx`
    
-   **Component Function Name:** Used PascalCase.  
    Example:
    
    ```tsx
    const MyBestComponent = () => {
      // states will be here
      // functions will be here
      // side effects (useEffect) will be here
      // scope component or mini component
    }
    
    ```
    

----------

## 🧱 Component Design

-   **Type Safety:** Always defined TypeScript types or interfaces for props.
    
-   **Structure inside the component:**
    
    ```tsx
    const MyComponent = ({ title }: Props) => {
      // 1. State hooks
      // 2. Functions/handlers
      // 3. useEffect or other hooks
      // 4. scope component or mini component
      // 5. Return JSX
    };
    
    ```
    
-   **Mini Components (Scoped only):**  
    If the component (e.g., `Card`) is used **only inside** `MyBestComponent`, defined it **within** the file:
    
    ```tsx
    const Card = () => (
      <div className="card">Card</div>
    );
    
    ```
----------

## ❗ Error Handling



