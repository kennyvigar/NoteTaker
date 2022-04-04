import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";

function App() {
  return (
    <div>
      <Header />
      <MainPage className="mainPage"></MainPage>
      <Footer />
    </div>
  );
}

export default App;
