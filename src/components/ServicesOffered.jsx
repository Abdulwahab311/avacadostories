function ServicesOffered() {
    return (
        <div className='max-w-1200 bg-mybg text-white'>
            <h1 className=' invisible sm:visible bg-clip-text text-8xl font-bold text-mycolor text-center'>We do</h1>

            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-7 font-bold'>

            <div>
                    <img className='pb-8' src="image/services-offered/PitchDeckDesign.svg" alt="Pitch Deck Design Image"></img>
                    <h1 className='w-24'>Pitch Deck Design </h1>
                </div>

                <div>
                    <img className='pb-8' src="image/services-offered/BrandingAdvertising.svg" alt="Branding & Advertising Image"></img>
                    <h1 className='w-24'>Branding & Advertising</h1>
                </div>

                <div>
                    <img className='pb-8' src="image/services-offered/WebAppDesign.svg" alt="Web & App Design Image"></img>
                    <h1 className='w-24'>Web & App Design</h1>
                </div>

                <div>
                    <img className='pb-8' src="image/services-offered/ContentMarketing.svg" alt="Content & Marketing Image"></img>
                    <h1 className='w-24'>Content & Marketing</h1>
                </div>
                <div>
                    <img className='pb-8' src="image/services-offered/VideoMotion.svg" alt="Video & Motion Design Image"></img>
                    <h1 className='w-28'>Video & Motion Design</h1>
                </div>

            </div>
        </div>
    )
}

export default ServicesOffered