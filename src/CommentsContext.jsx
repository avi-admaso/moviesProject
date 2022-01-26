import React from "react";
export const TheContext=React.createContext();
 const theComments=[{theName: "dani",text: "hi",views: 7,},{theName: "avi",text: "good morning",views: 9,},
 {theName: "eliyahu",text: "good  night",views: 17,},{theName: "david",text: "hello",views: 89,}];
function NewContext({ children }) {
  return (
    <TheContext.Provider value={theComments}>
      {children}
      </TheContext.Provider>
  );
}
export default NewContext;
