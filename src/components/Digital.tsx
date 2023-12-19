import '../css/digital_clock.css';
import { useClockStore } from '../db/store';
import { AM, EN_US, PM } from '../constant/constant';
import SuspenseLoading from './SuspenseLoading';

function Digital() {
    const time = useClockStore(state => state.time)
    const timeFormatted = useClockStore(state => state.timeFormatted)
    const clockLoading = useClockStore(state => state.clockLoading)
    const { hours, minutes, seconds } = time

    const convertToTwoDigit = (number: number) => {
        return number.toLocaleString(EN_US, {
            minimumIntegerDigits: 2
        })
    }

    const period = hours >= 12 ? PM : AM;
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const formattedTime = timeFormatted
        ? `${convertToTwoDigit(adjustedHours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)} ${period}`
        : `${convertToTwoDigit(hours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)}`;

    return (
        <section className="digital_clock">
            {
                clockLoading ? <SuspenseLoading /> : <p className='digits'>{formattedTime}</p>
            }
        </section>
    )
}

export default Digital