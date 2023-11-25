import { Switch } from '@headlessui/react'

function SwitchType({ isDigital, setIsDigital }: SwitchType) {
    return (
        <div className="py-16">
            <Switch
                checked={isDigital}
                onChange={setIsDigital}
                title={isDigital ? 'Switch to Analog Clock' : 'Switch to Digital Clock'}
                className={`${isDigital ? 'bg-purple-850' : 'bg-purple-1000'} m-2
                relative inline-flex h-[29px] w-[61px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/62`}
            >
                {/* <span className="sr-only"></span> */}
                <span
                    aria-hidden="true"
                    className={`${isDigital ? 'translate-x-8' : 'translate-x-0'}
                    pointer-events-none translate-y-0 inline-block h-[26px] w-[26px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    )
}

export default SwitchType