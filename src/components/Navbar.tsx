import SwitchPeriod from "./SwitchPeriod"
import SwitchType from "./SwitchType"

type NavbarProps = {
    timeFormatted: SwitchPeriod['timeFormatted'],
    setTimeFormatted: SwitchPeriod['setTimeFormatted'],
    isDigital: SwitchType['isDigital'],
    setIsDigital: SwitchType['setIsDigital'],
}

function Navbar({ timeFormatted, setTimeFormatted, isDigital, setIsDigital }: NavbarProps) {
    return (
        <nav className="z-100 fixed w-full">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-12 items-center justify-end">
                    {
                        isDigital && <SwitchPeriod timeFormatted={timeFormatted} setTimeFormatted={setTimeFormatted} />
                    }
                    <SwitchType isDigital={isDigital} setIsDigital={setIsDigital} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar