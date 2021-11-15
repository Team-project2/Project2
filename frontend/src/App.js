import {BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home"
import  AboutUs from "./components/AboutUs"
import Books from "./components/Books"
import Header from "./components/Header"
import Book from './components/Book';
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/about"
        render={() => {
          return <AboutUs  myName="name" arr={[1, 2, 3]} />;
        }}
      />
      <Route exact path="/books" component={Books} />
      <Route exact path="/book/:id" component={Book} />
    </div>
    //</BrowserRouter>
  );
}

export default App;
