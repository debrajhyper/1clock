import '../css/analog_clock.css';

function Analog({ time }: Clock) {
    const { hours, minutes, seconds } = time

    return (
        <div className="analog">
            <div className="circle"></div>
            <div className="shape">
                <div className="triangle"></div>
            </div>
            <div className="analog_clock">
                <div className="hour_hand" style={{ transform: `rotateZ(${hours * 30}deg)` }} />
                <div className="min_hand" style={{ transform: `rotateZ(${minutes * 6}deg)` }} />
                <div className="sec_hand" style={{ transform: `rotateZ(${seconds * 6}deg)` }} />
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
            </div>
        </div>
    )
}

export default Analog