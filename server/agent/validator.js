// Allowed component whitelist

const ALLOWED_COMPONENTS = [
  "Button",
  "Card",
  "Input",
  "Table",
  "Modal",
  "Navbar",
  "Sidebar",
  "Chart"
];

// Validate generated code

export function validateComponents(code) {

  for (let component of ALLOWED_COMPONENTS) {
    // allowed — do nothing
  }

  // Extract component names from code
  const usedComponents = code.match(
    /<([A-Z][A-Za-z0-9]*)/g
  ) || [];

  const cleaned = usedComponents.map(c =>
    c.replace("<", "")
  );

  for (let comp of cleaned) {
    if (!ALLOWED_COMPONENTS.includes(comp)) {
      throw new Error(
        `Invalid component detected: ${comp}`
      );
    }
  }

  return true;
}
