import SwitchPeriod from "./SwitchPeriod"
import SwitchType from "./SwitchType"
import logo from '../icons/clock.png'

type NavbarProps = {
    timeFormatted: SwitchPeriod['timeFormatted'],
    setTimeFormatted: SwitchPeriod['setTimeFormatted'],
    isDigital: SwitchType['isDigital'],
    setIsDigital: SwitchType['setIsDigital'],
}

function Navbar({ timeFormatted, setTimeFormatted, isDigital, setIsDigital }: NavbarProps) {
    return (
        <nav className="z-[100] fixed w-full">
            <div className="relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between align-start items-start">
                <div className="pt-3 ml-8">
                    <a href="." className="flex justify-center items-center">
                        <img src={logo} alt='logo' className="w-7 -mr-3" />
                        <h3 className="font-['Mukta'] text-4xl font-extrabold text-white/30">1clock</h3>
                    </a>
                </div>
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