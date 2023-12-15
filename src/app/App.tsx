import { useEffect } from 'react';
import './App.css';
import { useClockStore } from '../db/store';
import { getCountryTime } from '../db/store';
import { ANALOG, DIGITAL, STRING_EMPTY, WEBSITE_NAME } from '../constant/constant';
import Navbar from '../components/Navbar';
import ClockArea from '../components/ClockArea';
import GlobeArea from '../components/GlobeArea';
import TimeZoneList from '../components/TimeZoneList';
import Footer from '../components/Footer';

function App() {
  const isDigital = useClockStore(state => state.isDigital)
  const selectedTimeZone = useClockStore(state => state.selectedTimeZone)
  const updateTime = useClockStore(state => state.updateTime)

  useEffect(() => {
    function runClock() {
      if (selectedTimeZone?.zoneName !== STRING_EMPTY) {
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

    const intervalId = setInterval(() => {
      runClock()
    }, 1000);

    return () => clearInterval(intervalId);
  }, [selectedTimeZone, updateTime])

  useEffect(() => {
    document.title = `${isDigital ? DIGITAL : ANALOG} - ${WEBSITE_NAME}`
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