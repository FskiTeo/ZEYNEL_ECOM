import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Products from './Pages/Products';
import Login from './Pages/Login';

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}


function App() {
  return (
    
      <BrowserRouter>
        <nav className="flex items-center h-14 px-4 border-b gap-4 sticky top-0 bg-white">
          <Link className="flex items-center gap-2 text-lg font-semibold" to="/">
            ZEYNEL ECOM
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Link className="font-medium underline underline-offset-2 transition-colors hover:text-gray-900" to="/">
              Home
            </Link>
            <Link className="font-medium underline underline-offset-2 transition-colors hover:text-gray-900" to="/products">
              Products
            </Link>
            <Link className="font-medium underline underline-offset-2 transition-colors hover:text-gray-900" to="/login">
              Login
            </Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/products' Component={Products}/>
          <Route path='/login' Component={Login}/>
        </Routes>
        <footer className="w-full py-6 bg-gray-100 border-t md:py-12 dark:bg-gray-200 flex justify-center">
        <div className="container grid md:grid-cols-2 md:items-center md:gap-4 lg:gap-8 xl:gap-10">
          <div className="flex flex-col gap-2 text-sm md:flex-row md:justify-between md:gap-4 lg:text-base">
            <div className="space-y-1">
              <p className="font-semibold">ZEYNEL ECOM</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Projet pour un prof incroyable !</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Liens utiles</p>
              <ul className="list-disc list-inside">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-sm md:flex-row md:justify-between md:gap-4 lg:text-base">
            <div className="space-y-1">
              <p className="font-semibold">Nous contacter</p>
              <p>EPSI Lille</p>
              <p>2 Rue Alphonse Colas</p>
              <p>59000, Lille, France</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold">Nous retrouver</p>
              <ul className="flex gap-2">
                <li>
                  <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                    <span className="sr-only">Facebook</span>
                    <FacebookIcon className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                    <span className="sr-only">Twitter</span>
                    <TwitterIcon className="w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      </BrowserRouter>

  );
}

export default App;
