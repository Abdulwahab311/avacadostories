function ContactUs() {
  return (
    <>
        <div className='pb-6 '>
                <h1 className='font-bold text-[32px] text-center px-10 pt-5 md:font-bold md:text-[74px] md:px-70 '>Engage your audience with fresh visual marketing!</h1>

                    <div className="flex justify-center items-center pt-20">
                        <div className="w-60 h-60 rounded-full bg-transparent border-4 border-green-400 pt-[100px]">
                        <hi className=' text-3xl justify-center items-center px-8 '>Contact Us  </hi>
                        </div>
                    </div>
        </div>

        <h1 className='text-2xl text-left font-bold px-[50px] p-8 lg:text-center'>Interested in working together?
        Great! Just fill out the form below :)</h1>

    <form className="max-w-md mx-auto">

            <input type="tel" id="phone" name="phone" className="w-full py-2  " placeholder="Name" />
            <hr className="border-t-2 border-gray-400 my-4"></hr>

            <input type="tel" id="phone" name="phone" className="w-full py-2  " placeholder="Email" />
            <hr className="border-t-2 border-gray-400 my-4"></hr>


            <input type="tel" id="phone" name="phone" className="w-full py-2  " placeholder="Phone Number tahir plz" />
            <hr className="border-t-2 border-gray-400 my-4"></hr>

            <input type="tel" id="phone" name="phone" className="w-full py-2  " placeholder="Briefly describe your project" />
            <hr className="border-t-2 border-gray-400 my-4"></hr>

        <div className="mb-4 flex justify-end">
            <button type="submit" className=" text-green-500 font-medium rounded ">Submit</button>
        </div>
        
    </form>

    

    </>
  )
}

export default ContactUs
