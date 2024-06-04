import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import './Bootstrap/css/bootstrap.min.css'
const Home = lazy(() => import("./Components/Authentication/Home"))
function App() {
  return (
    <Suspense fallback={() => <div>Loading ....</div>}>
      <Router>
        <Routes>
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
