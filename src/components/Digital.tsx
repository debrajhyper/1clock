import '../css/digital_clock.css';
import { motion } from "framer-motion";
import { useClockStore } from '../db/store';
import { AM, EN_US, PM } from '../constant/constant';
import SuspenseLoading from './SuspenseLoading';

function Digital() {
    const time = useClockStore(state => state.time)
    const timeFormatted = useClockStore(state => state.timeFormatted)
    const clockLoading = useClockStore(state => state.clockLoading)
    const { hours, minutes, seconds } = time

    const convertToTwoDigit = (number: number) => {
        return number.toLocaleString(EN_US, { minimumIntegerDigits: 2 })
    }

    const period = hours >= 12 ? PM : AM;
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const formattedTime = timeFormatted
        ? `${convertToTwoDigit(adjustedHours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)} ${period}`
        : `${convertToTwoDigit(hours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)}`;

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.4, 0.2, 1],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
            className="digital_clock">
            {
                clockLoading ? <SuspenseLoading /> : <span className='digits'>{formattedTime}</span>
            }
        </motion.section>
    )
}

export default Digital