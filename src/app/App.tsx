import { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { useClockStore } from '../db/store';
import { getCountryTime } from '../db/store';
import { ANALOG, DIGITAL, EMPTY_STRING, WEBSITE_META_NAME, WEBSITE_NAME } from '../constant/constant';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuspenseLoading from '../components/SuspenseLoading';

const ClockArea = lazy(() => import('../components/ClockArea'));
const GlobeArea = lazy(() => import('../components/GlobeArea'));
const TimeZoneList = lazy(() => import('../components/TimeZoneList'));

function App() {
  const isDigital = useClockStore(state => state.isDigital)
  const selectedTimeZone = useClockStore(state => state.selectedTimeZone)
  const updateTime = useClockStore(state => state.updateTime)
  const toggleClockLoading = useClockStore(state => state.toggleClockLoading)

  useEffect(() => {
    function runClock() {
      if (selectedTimeZone?.zoneName !== EMPTY_STRING) {
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
  }, [selectedTimeZone, toggleClockLoading, updateTime])

  useEffect(() => {
    if (selectedTimeZone?.zoneName !== EMPTY_STRING) {
      toggleClockLoading()
      updateTime(getCountryTime(selectedTimeZone))
      setTimeout(() => {
        toggleClockLoading()
      }, 0);
    }
  }, [selectedTimeZone, toggleClockLoading, updateTime])

  useEffect(() => {
    document.title = `${isDigital ? DIGITAL : ANALOG} | ${WEBSITE_NAME} - ${WEBSITE_META_NAME}`
  }, [isDigital])

  return (
    <div className="App">
      <Navbar />
      <div className='grid md:grid-cols-2 gap-0 h-[inherit] border-0'>
        <div className='sm:h-[inherit] h-[80vh] flex flex-col justify-between align-middle items-center border-0'>
          <Suspense fallback={<SuspenseLoading />}>
            <ClockArea />
            <TimeZoneList />
          </Suspense>
        </div>
        <Suspense fallback={<SuspenseLoading />}>
          <GlobeArea />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App;