import '../css/suspense_loading.css'

function SuspenseLoading() {
    return (
        <section className='loader text-center w-full h-full flex justify-center items-center border-0'>
            <div className="progress"></div>
        </section>
    )
}

export default SuspenseLoading