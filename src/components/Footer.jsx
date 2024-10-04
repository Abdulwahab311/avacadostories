function Footer() {
    return (
        <>
            <div className="max-w-[1200px] mx-auto px-9 py-[50px] grid grid-rows-1 lg:grid-cols-3  gap-6">

                <div className='text-left '>
                    <h1 className='text-2xl font-bold pb-3'>New Business Inquiries </h1>
                    <p className=''>+972 52-298-8712</p>
                    <p> hello@avocadostories.com</p>
                </div>


                <div className='text-left'>
                    <h1 className='text-2xl font-bold pb-3'>Jobs & Internships</h1>
                    <p>hr@avocadostories.com</p>
                </div>

                <div className='text-left'>
                    <h1 className='text-2xl font-bold pb-3'> Find Us</h1>
                    <div className='flex gap-6'>
                        <div>Behancein</div>
                        <div>Linked</div>
                        <div>Instagram</div>
                    </div>
                </div>

                {/* <div className='text-left flex mx-[300px]'></div>
        <div>All rights reserved 2024</div>
        <div>Privacy</div> */}


            </div>
        </>
    )
}

export default Footer
