import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import "./App.css"
import Header from "./components/common/header/Header"
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
            {/* <Route /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
