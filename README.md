# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## مهاجرت و بهینه‌سازی CSS با Tailwind

- جایگزینی CSS Modules با کلاس‌های Tailwind در کامپوننت‌ها:
  - `src/components/navigation.tsx`، `src/components/layout.tsx` و `src/components/why-button.tsx` بازنویسی شدند و فایل‌های `*.module.css` حذف شد.
  - `src/App.tsx` به‌روزرسانی شد و `src/App.css` حذف گردید؛ تمام استایل‌ها با کلاس‌های Tailwind اعمال می‌شوند.

- پیکربندی تولید (Production) برای حداقل‌سازی CSS:
  - PostCSS: افزوده شدن PurgeCSS فقط در محیط تولید (`postcss.config.cjs`).
  - Vite: فعال‌سازی minify مبتنی بر Lightning CSS و نام‌گذاری خروجی CSS به صورت `.min.css` (`vite.config.ts`).

- نحوه اجرای تولید و دریافت خروجی‌ها:
  - نصب وابستگی‌ها: `pnpm install`
  - بیلد تولیدی: `pnpm build`
  - خروجی‌ها در مسیر `dist/` قرار می‌گیرند؛ فایل‌های CSS با پسوند `.min.css` در `dist/assets/` تولید می‌شوند.

- تست UI قبل و بعد از تغییرات:
  - اجرای توسعه: `pnpm dev` و مشاهده در `http://localhost:5174/`.
  - بررسی سازگاری در اندازه‌های مختلف نمایشگر و مرورگرهای هدف.

- نکات سازگاری و نگه‌داری:
  - استایل‌ها بر مبنای متغیرهای تم (`--color-*`) باقی مانده‌اند؛ Tailwind با مقادیر دلخواه (arbitrary values) از آن‌ها استفاده می‌کند.
  - برای افزودن کامپوننت‌های جدید، ترجیحاً از کلاس‌های Tailwind استفاده کنید تا نیاز به CSS سفارشی کاهش یابد.
# React + TypeScript + Vite
