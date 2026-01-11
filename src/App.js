// import './App.css';
// import { FormComponents } from './components/form components/FormComponents';
// import { Calculator } from './components/Calculator/calculator';
// import Project1 from './components/Project1/Project1';
// function App() {
//   return (
//     <div className="App">
//       <h1>hello world</h1>
//       <h2>This is first day demo lecture for React js </h2>
//       <FormComponents />
//       <Calculator/>
//       <Project1/>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { InputPage } from "./pages/InputPage/InputPage";
import { CurrencyPage } from "./pages/CurrencyPage/CurrencyPage";
function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>This is first day demo lecture for React js</h2>

      {/* <InputComponent />
      <FirstComponent />
      <CalculateAge />
      <FormComponents />
      <Project1 /> */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/currency" element = {<CurrencyPage />} />
      </Routes>
    </div>
  );
}

export default App;
