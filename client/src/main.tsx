import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import i18n from "./i18n";

// Set initial HTML lang attribute
document.documentElement.lang = i18n.language;

// Update HTML lang attribute when language changes
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
});

createRoot(document.getElementById("root")!).render(<App />);
