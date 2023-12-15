import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { ReactComponent as Info } from '../icons/info.svg'
import icon from '../icons/clock.png'
import { LINKEDIN_URL, WEBSITE_DESCRIPTION, WEBSITE_DESIGNED_BY, WEBSITE_NAME } from '../constant/constant'

const glassmorphismStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50 %',
    backdropFilter: 'blur(15px)',
    boxShadow: '0 25px 45px 5px rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    color: 'white'
}

function Footer() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="fixed top-[90%] left-[5%] w-[min-content] h-[min-content]">
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-full bg-black/20 p-2 text-md font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-9 focus-visible:ring-white/75"
                >
                    <Info />
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[200]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center select-none">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel style={glassmorphismStyle} className="z-[200] w-full max-w-md transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="font-['Mukta'] text-5xl font-extrabold text-white/40 leading-6 flex items-center"
                                    >
                                        <img src={icon} alt='icon' className="w-10 -mr-4" />
                                        {WEBSITE_NAME}
                                    </Dialog.Title>
                                    <div className="mt-4">
                                        <div>
                                            <p className="text-sm">
                                                {WEBSITE_DESCRIPTION}
                                            </p>
                                            <p className='mt-2 text-sm font-bold text-white/40 tracking-wide'>
                                                Designed by
                                                <h3 className='text-xl text-white'>
                                                    <a className='outline-0' href={LINKEDIN_URL} target='_blank' rel="noreferrer">
                                                        {WEBSITE_DESIGNED_BY}
                                                    </a>
                                                </h3>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-10">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Footer