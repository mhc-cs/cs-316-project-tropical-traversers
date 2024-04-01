import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./loginform";


export default function Page() {
    return (
      <>
       <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
      </>
    );
  }