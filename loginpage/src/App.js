import { useEffect } from 'react';
import './App.css';
import Registration from './components/Registration';

function App() {

  // useEffect(()=>{
  //   const element = document.documentElement;
  //   if(element.requestFullscreen){
  //     element.requestFullscreen()
  //   }else if(element.mozRequestFullscreen){
  //     element.mozRequestFullscreen();
  //   }else if(element.webkitRequestFullScreen){
  //     element.webkitRequestFullScreen()
  //   }else if(element.msRequestFullscreen){
  //     element.msRequestFullscreen()
  //   }
  // },[])

  return (
    <div className="App">
      <Registration/>
    </div>
  );
}

export default App;
