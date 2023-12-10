import Analog from "./Analog"
import Digital from "./Digital"
import '../css/clock_area.css'

type ClockAreaProps = {
    isDigital: boolean,
    time: Clock['time'],
    timeFormatted: Clock['timeFormatted'],
    day: Clock['day']
}

function ClockArea({ isDigital, time, timeFormatted, day }: ClockAreaProps) {
    return (
        <main className="clock_area border-0">
            <div className={isDigital ? 'digital' : 'analog'}>
                <div className="circle"></div>
                <div className="shape">
                    <div className="triangle"></div>
                </div>
                {
                    isDigital ? <Digital time={time} timeFormatted={timeFormatted} day={day} /> : <Analog time={time} />
                }
            </div>
        </main>
    )
}

export default ClockArea