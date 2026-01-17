import React from 'react'
import Navbar from '/src/components/Common/Navbar'
import Work from '/src/components/Home/Work'
import Stripes from '/src/components/Home/Stripes'
//import Clients from '/src/components/About/Clients'
import img from '/src/assets/Ship5.mp4'
import Button from '/src/components/Common/Button'
import Footer from '/src/components/Common/Footer'

import Marquees from '/src/components/Home/Marquees'
import Marquees2 from '/src/components/Home/Marquees2'
import LogoDesclaimer from '/src/components/Home/CRmarquees'
import Contact from '../components/Home/Contact'

function Home() {
  return (
    <div className='min-h-screen  w-[100%] font-[Parkinsans] bg-[#F2F0EA]  '>
      <Navbar />
      <Work />
      {/* <div className='mx-auto w-[100%] mt-25 font-bold text-5xl text-center text-zinc-800   rounded-full'>
        9M solutions
      </div>
      <div className='mx-auto w-[100%] mt-5 font-bold text-3xl text-center text-zinc-800   rounded-full'>
        Your Compass to Maritime Innovation.
      </div>
      <div className='flex gap-[5vw] px-[5vw] mt-[5vw]'>

        <p >
          9M solutions Pte Ltd, established in 2023, specializes in providing top-notch technical services to global clients in the maritime industry.
          Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
          <br />
          <br />
          With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
          <br />
          <br />
          As part of our continued expansion, we established 9M Solutions Pte. Ltd. in 2023. Based in Singapore, this subsidiary focuses on advanced training, e-learning, and Competency Learning Management System (CLMS) services, empowering seafarers across diverse shipping companies.
          With a commitment to excellence and innovation, 9M solutions Pte. Ltd. remains a trusted partner in driving operational success and professional growth in the maritime industry.

        </p>
        <img className='w-[40vw] h-[30vw] object-cover rounded' src={img} alt="img" />
      </div>
      <div className=' ml-[5vw] mt-[1vw]'>
        <Button content="know more" width="15vw" link="/aboutus" />
      </div> */}

      <div className="mx-auto w-full mt-16 px-4 sm:px-6 lg:px-12">

        {/* 🔹 Heading */}
        <div className="text-center tracking-tighter font-['golu']  font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-800">
          9M SOLUTIONS
        </div>

        {/* 🔹 Subheading */}
        <div className="text-center font-semibold text-lg sm:text-2xl mt-4 text-zinc-700">
          Your Compass to Maritime Innovation
        </div>



        {/* 🔹 Main Content Section: Stacks on small, row on large */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10 items-center">
          {/* 🔸 Image */}
          {/* <img
            className="w-full text-center w-md lg:w-[50%] h-auto object-cover rounded shadow-lg"
            src={img}
            alt="9M solutions"
          /> */}
         <video 
  src={img}
  autoPlay 
  loop 
  muted
  preload="none"
  fetchP fetchpriority="low"
  className="w-full text-center md:w-[50%] h-auto object-cover rounded shadow-lg"
/>

          {/* 🔸 Paragraph Text */}
          <p className="text-zinc-800 text-center lg:text-left leading-relaxed text-sm sm:text-base lg:w-1/2">
            9M solutions Pte Ltd, established in 2023, specializes in providing top-notch technical services to global clients in the maritime industry.
            Our highly skilled consultants conduct thorough audits of ships, systems, and Owners/Operators offices, offering independent assessments aligned with industry standards.
            <br /><br />
            With extensive experience, our consultants perform fleet-wide navigation audits for Oil Tankers, Gas Carriers, large container ships, and bulk carrier Owners. This allows us to provide valuable feedback to improve performance. Clients have praised the effectiveness of our audits, highlighting our meticulous approach and attention to detail.
            <br /><br />
            Based in Singapore, our company focuses on advanced training, e-learning, and Competency Learning Management System (CLMS) services, empowering seafarers across diverse shipping companies.
            With a commitment to excellence and innovation, 9M solutions Pte. Ltd. remains a trusted partner in driving operational success and professional growth in the maritime industry.
          </p>


        </div>

        {/* 🔹 CTA Button */}
        <div className="mt-8 w-full flex justify-center">
          <Button content="Know more" width="12rem" link="/aboutus" />
        </div>

      </div>


      <div className='mx-auto w-[100%] mt-25 tracking-widest font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Clients
      </div>
      <Marquees />
      <LogoDesclaimer />


      <hr />
      <div className='mx-auto w-[100%] tracking-widest mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
      Our Services
      </div>
      < p className='text-center my-5'>9M solution Pte Ltd has been a prominent player in the industry since 2023, providing marine-related technical services to a global clientele. Whether you’re a Dry Fleet or Tanker Fleet operator, at 9M solutionsMarine, we tailor our solutions to your unique fleet needs. Our dedicated team of Subject Matter Experts is driven by the goal of optimizing your fleet’s performance.</p>
      {/* <Clients /> */}

      {/* <div className='mx-auto w-[100%] tracking-widest mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Services
      </div> */}

      <Marquees2 />

      {/* <div className='mx-auto tracking-widest w-[100%] mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Our Stats
      </div> */}
      {/* 
      <Stripes /> */}

       <div className="mt-8 w-full flex justify-center">
            <Button content="Know more" width="12rem" link="/services" />
        </div>

      <div className='mx-auto w-[100%] text-left pl-[2vw] mt-25 font-bold text-3xl text-center text-zinc-800 hover:text-zinc-500  rounded-full'>
        Contact-us
      </div>
      <Contact />
      <Footer />
    </div>
  )
}

export default Home