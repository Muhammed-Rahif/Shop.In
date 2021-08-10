import React, { createContext, useState } from "react";

export const SearchProductContext = createContext(null);

function Contexts({ children }) {
  const [searchProduct, setSearchProduct] = useState("");

  return (
    <SearchProductContext.Provider value={{ searchProduct, setSearchProduct }}>
      {children}
    </SearchProductContext.Provider>
  );
}

export default Contexts;
