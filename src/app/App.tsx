import { useEffect, useState } from 'react';
import './App.css';
import Analog from '../components/Analog';
import Digital from '../components/Digital';
import Navbar from '../components/Navbar';

function App() {
  const [time, setTime] = useState({
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  })

  const [timeFormatted, setTimeFormatted] = useState(false);
  const [isDigital, setIsDigital] = useState(false);

  useEffect(() => {
    function getClock() {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      })
    }

    const intervalId = setInterval(() => {
      getClock()
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  console.log('out ->', time)

  return (
    <div className="App">
      <Navbar timeFormatted={timeFormatted} setTimeFormatted={setTimeFormatted} isDigital={isDigital} setIsDigital={setIsDigital}/>
      <main className='clock_area z-50'>
        {
          isDigital ? <Digital time={time} timeFormatted={timeFormatted} /> : <Analog />
        }
      </main>
    </div>
  );
}

export default App;
