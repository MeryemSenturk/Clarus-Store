import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./contexts/AuthProvider";
import ProductProvider from "./contexts/ProductProvider"





function App() {
 
  return (
    <div>
      <AuthProvider>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
