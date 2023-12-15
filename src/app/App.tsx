import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ClockArea from '../components/ClockArea';
import Footer from '../components/Footer';
import GlobeArea from '../components/GlobeArea';
import './App.css';
import TimeZoneList from '../components/TimeZoneList';
import { useClockStore } from '../db/store';
import getCountryTime from '../text';

function App() {
  // const [time, setTime] = useState({
  //   hours: 60,
  //   minutes: 60,
  //   seconds: 60,
  // })
  // const [day, setDay] = useState('');

  // const [timeFormatted, setTimeFormatted] = useState(false);
  // const [isDigital, setIsDigital] = useState(false);
  const updateTime = useClockStore(state => state.updateTime)
  const updateDay = useClockStore(state => state.updateDay)
  const isDigital = useClockStore(state => state.isDigital)
  const countryTimezones = useClockStore(state => state.countryTimezones)
  const selectedTimeZone = useClockStore(state => state.selectedTimeZone)
  const time = useClockStore(state => state.time)
  // console.log(countryTimezones, selectedTimeZone)

  useEffect(() => {
    const date = new Date();
    function getClock() {
      if (selectedTimeZone?.zoneName !== '') {
        updateTime(getCountryTime(selectedTimeZone))
      } else {
        const date = new Date();
        updateTime({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds()
        })
      }
    }

    updateDay(date.getDay())

    const intervalId = setInterval(() => {
      getClock()
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimeZone, updateDay, updateTime])

  useEffect(() => {
    document.title = `${isDigital ? 'Digital' : 'Analog'} - 1clock`
  }, [isDigital])

  return (
    <div className="App">
      <Navbar />
      <div className='grid md:grid-cols-2 gap-0 h-[inherit] border-0'>
        <div className='sm:h-[inherit] h-[80vh] flex flex-col justify-between align-middle items-center border-0'>
          <ClockArea />
          <TimeZoneList />
        </div>
        <GlobeArea />
      </div>
      <Footer />
    </div>
  );
}

export default App;