import '../css/clock_area.css'
import { useClockStore } from "../db/store"
import Analog from "./Analog"
import Digital from "./Digital"


function ClockArea() {
    const isDigital = useClockStore(state => state.isDigital)

    return (
        <main className="clock_area border-0">
            <div className={isDigital ? 'digital' : 'analog'}>
                <div className="circle"></div>
                <div className="shape">
                    <div className="triangle"></div>
                </div>
                {
                    isDigital ? <Digital /> : <Analog />
                }
            </div>
        </main>
    )
}

export default ClockArea