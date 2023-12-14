export default function getCountryTime(timeZone: TimeZone) {
    const { zoneName, gmtOffset } = timeZone;
    let setTime = {
        hours: 60,
        minutes: 60,
        seconds: 60,
    }

    // Check if the user's browser timezone matches the provided timezone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (userTimeZone === zoneName || userTimeZone === 'Asia/Calcutta') {
        const options: Intl.DateTimeFormatOptions = {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: zoneName,
        };

        const currentDate = new Date();
        const currentTime = currentDate.toLocaleTimeString('en-US', options);
        console.log('currentTime -> ', currentTime);
        const [hours, minutes, seconds] = currentTime.split(':');

        setTime = {
            hours: parseInt(hours, 10),
            minutes: parseInt(minutes, 10),
            seconds: parseInt(seconds, 10),
        }
        return setTime
    }

    // Calculate the current time in the target timezone
    const currentDate = new Date();
    const utc = currentDate.getTime() + currentDate.getTimezoneOffset() * 60000;
    const countryTime = new Date(utc + gmtOffset * 60000);

    const options: Intl.DateTimeFormatOptions = {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: zoneName,
    };

    const formattedTime = countryTime.toLocaleTimeString('en-US', options);
    console.log('formattedTime -> ', formattedTime);
    // Extracting hours, minutes, and seconds from the formatted time
    const [hours, minutes, seconds] = formattedTime.split(':');

    setTime = {
        hours: parseInt(hours, 10),
        minutes: parseInt(minutes, 10),
        seconds: parseInt(seconds, 10),
    };

    return setTime
}