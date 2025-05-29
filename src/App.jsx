import WeatherApp from "./components/WeatherApp"
import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Greeting from './components/Greeting'
import MapList from './components/MapList'
import Person from './components/Person'
import Weather from './components/Weather'
import UserSatus from './components/UserSatus'
import TodoList from "./components/TodoList"




const App = () => {
  return (
    <div>
        <Header />
        <MainContent />
        <Greeting timeOfDay = 'morning' />
        <MapList />
        <Person name= 'Peter' age= '30' product= 'iphine' price='200' />
        <Weather temperature= '30' />
        <UserSatus isLogin= {true} isAdmin= {false} />
        <TodoList/>
        <Footer />
        
      {/* <WeatherApp /> */}
    
      
    
    </div>
  )
}

export default App