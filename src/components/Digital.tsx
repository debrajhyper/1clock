
function Digital({ time, timeFormatted }: Clock) {
    const { hours, minutes, seconds } = time

    const convertToTwoDigit = (number: number) => {
        return number.toLocaleString('en-US', {
            minimumIntegerDigits: 2
        })
    }

    // Determine AM/PM
    const period = hours >= 12 ? 'PM' : 'AM';

    // Adjust hours for 12-hour format
    const adjustedHours = hours > 12 ? hours - 12 : hours;

    // Display the result
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