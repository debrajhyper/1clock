type Clock = {
    time: {
        hours: number,
        minutes: number,
        seconds: number,
    },
    timeFormatted: boolean
}

// type Clock = {
//     time: String
// }

type SwitchPeriod = {
    timeFormatted: boolean,
    setTimeFormatted: ChangeEvent<HTMLInputElement>
}

type SwitchType = {
    isDigital: boolean,
    setIsDigital: ChangeEvent<HTMLInputElement>
}