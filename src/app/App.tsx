import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ClockArea from '../components/ClockArea';
import Footer from '../components/Footer';
import GlobeArea from '../components/GlobeArea';
import './App.css';

function App() {
  const [time, setTime] = useState({
    hours: 60,
    minutes: 60,
    seconds: 60,
  })
  const [day, setDay] = useState('');

  const [timeFormatted, setTimeFormatted] = useState(false);
  const [isDigital, setIsDigital] = useState(false);

  function dayFormatter(number: number) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number]
  }

  useEffect(() => {
    const date = new Date();
    function getClock() {
      const date = new Date();
      setTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      })
    }

    setDay(
      dayFormatter(date.getDay())
    )

    const intervalId = setInterval(() => {
      getClock()
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  useEffect(() => {
    document.title = `${isDigital ? 'Digital' : 'Analog'} - 1clock`
  }, [isDigital])

  return (
    <div className="App">
      <Navbar timeFormatted={timeFormatted} setTimeFormatted={setTimeFormatted} isDigital={isDigital} setIsDigital={setIsDigital} />
      <div className='grid md:grid-cols-2 gap-0 h-[inherit] border-0'>
        <div className='h-[inherit]'>
          <ClockArea isDigital={isDigital} time={time} timeFormatted={timeFormatted} day={day} />
        </div>
        <GlobeArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;