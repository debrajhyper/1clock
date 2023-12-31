import { Switch } from '@headlessui/react'
import { useClockStore } from '../db/store'

function SwitchPeriod() {
    const timeFormatted = useClockStore(store => store.timeFormatted)
    const toggleTimeFormatted = useClockStore(store => store.toggleTimeFormatted)

    return (
        <Switch
            checked={timeFormatted}
            onChange={toggleTimeFormatted}
            title={timeFormatted ? "Switch to 24hrs" : "Switch to 12hrs"}
            className={`${timeFormatted ? 'bg-purple-700' : 'bg-purple-950'} m-2 relative inline-flex h-[29px] w-[61px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/62`}
        >
            <span
                aria-hidden="true"
                className={`${timeFormatted ? 'translate-x-8' : 'translate-x-0'}
                pointer-events-none translate-y-0 inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
        </Switch>
    )
}

export default SwitchPeriod