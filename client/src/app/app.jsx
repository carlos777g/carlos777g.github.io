import { AppRouter } from "./providers/router";
import { applyRandomTheme } from "@/shared/lib/theme/random-theme";
import { useDynamicFavicon } from "@/shared/lib/hooks/use-dynamic-favicon";

import "./index.css";

const INITIAL_THEME_HEX = applyRandomTheme();
const App = () => {
  useDynamicFavicon(INITIAL_THEME_HEX);
  return <AppRouter />;
};

export default App;
