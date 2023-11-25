import '../css/digital_clock.css';

function Digital({ time, timeFormatted }: Clock) {
    const { hours, minutes, seconds } = time

    const convertToTwoDigit = (number: number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    const period = hours >= 12 ? 'PM' : 'AM';
    const adjustedHours = hours > 12 ? hours - 12 : hours;
    const formattedTime = timeFormatted
        ? `${convertToTwoDigit(adjustedHours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)} ${period}`
        : `${convertToTwoDigit(hours)}:${convertToTwoDigit(minutes)}:${convertToTwoDigit(seconds)}`;

    return (
        <div className="digital">
            <p>{formattedTime}</p>
        </div>
    )
}

export default Digital