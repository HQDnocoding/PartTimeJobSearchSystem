import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
// import { ToastContainer } from "react-toastify";
import Home from './components/Home/home';
import { ToastContainer } from 'react-toastify';
import Login from './components/Authenticate/Login';
import Register from './components/Authenticate/Register';
import JobPage from './components/JobPage/JobPage';
import ListCompany from './components/Company/ListCompany';
import About from './components/About/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/contact' element={<Home />} />
          <Route path='/job' element={<JobPage />} />
          <Route path='/company' element={<ListCompany />} />
          <Route path='/detail-company/:id' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forget-password' element={<Home />} />
          <Route path='/detail-job/:id' element={<Home />} />

        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
