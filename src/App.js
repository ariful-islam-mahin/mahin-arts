import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderText from './components/HeaderText/HeaderText';
import HeaderMain from './components/HeaderMain/HeaderMain';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import FollowMe from './components/FollowMe/FollowMe';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App () {
  return (
    <div className="App">
      <HeaderText></HeaderText>
      <HeaderMain></HeaderMain>
      <div style={{maxWidth: "885px", margin: "0px auto"}}>
        <Posts></Posts>
        <About></About>
        <FollowMe></FollowMe>
        <Contact></Contact>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
