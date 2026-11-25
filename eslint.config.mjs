import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  {
    ignores: [".next/**", ".agents/**", "node_modules/**", "out/**"],
  },
  ...nextVitals,
  ...nextTs,
];

export default eslintConfig;
