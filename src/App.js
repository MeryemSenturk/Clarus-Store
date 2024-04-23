

import AuthProvider from "./contexts/AuthProvider";
import ProductProvider from "./contexts/ProductProvider";
import AppRouter from "./router/AppRouter";




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
