import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extend from Next.js' core Web Vitals configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable the rule globally
      "react/no-unescaped-entities": "off", // Disable the `react/no-unescaped-entities` rule
    },
  },
];

export default eslintConfig;
