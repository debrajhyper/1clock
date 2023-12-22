import '../css/analog_clock.css';
import { motion } from "framer-motion";
import { useClockStore } from '../db/store';
import SuspenseLoading from './SuspenseLoading';

function Analog() {
    const time = useClockStore(state => state.time)
    const clockLoading = useClockStore(state => state.clockLoading)
    const { hours, minutes, seconds } = time

    return (
        <motion.section
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
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
            className="analog_clock">
            {
                clockLoading
                    ? <SuspenseLoading />
                    : (
                        <>
                            <div className="hour_hand" style={{ transform: `rotateZ(${hours * 30}deg)` }} />
                            <div className="min_hand" style={{ transform: `rotateZ(${minutes * 6}deg)` }} />
                            <div className="sec_hand" style={{ transform: `rotateZ(${seconds * 6}deg)` }} />
                        </>
                    )
            }
            <span className="twelve">12</span>
            <span className="stick one"></span>
            <span className="stick two"></span>
            <span className="three">3</span>
            <span className="stick four"></span>
            <span className="stick five"></span>
            <span className="six">6</span>
            <span className="stick seven"></span>
            <span className="stick eight"></span>
            <span className="nine">9</span>
            <span className="stick ten"></span>
            <span className="stick eleven"></span>
        </motion.section>
    )
}

export default Analog