import { AppRouter } from "./providers/router";
import { applyRandomTheme } from "@/shared/lib/theme/random-theme";
import "./index.css";

applyRandomTheme();
const App = () => {
  // useEffect(() => {
  //   applyRandomTheme();
  // }, []); 
  return <AppRouter />;
};

export default App;
