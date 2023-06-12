
import React from "react";

export default function Footer() {
  return (
    <>
      <InfoFooter></InfoFooter>
      <footer className="left-0 bottom-0 w-full bg-red-700 text-white text-center md:text-2xl md:p-2 p-0 text-lg">
        © 2023 Kjaas.com | All rights reserved
      </footer>
    </>
  );
}

function InfoFooter() {
  return (
    <>
      <div className="md:grid md:grid-cols-2 flex-row bg-blue-700 ">
        <div className="grid md:justify-end justify-center text-white md:mr-4">
          <div className="flex justify-center">
            <h1 className="md:text-4xl md:m-3 text-2xl">Contact Us</h1>
          </div>
          <div className="flex justify-center text-center">
            <h1 className="md:text-2xl md:m-3 text-xl m-4">
              📍Address:964 Park Hill Circle, Aurora IL-60502
            </h1>
            
          </div>
          <div className="flex justify-center">
            <h1 className="md:text-2xl md:m-3 text-xl my-2">📞+1-331-707-3924</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="md:text-2xl md:m-3 md:mb-10 text-xl my-2">
              📧singhjyoti.13579@gmail.com
            </h1>
          </div>
        </div>
        <div className="grid md:justify-start justify-center text-white border-t-4 border-black md:border-t-0 md:mt-0 mt-6 md:ml-36">
        <div className="flex justify-center">
        <h1 className="md:text-4xl  text-2xl mt-3">Map</h1>  
        </div>
        
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.7017088653147!2d-88.25233782330506!3d41.77008867216867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880efa210ca59c2f%3A0x4af22c468444fa6!2s964%20Park%20Hill%20Cir%2C%20Aurora%2C%20IL%2060502!5e0!3m2!1sen!2sus!4v1686024001449!5m2!1sen!2sus"
              width="600"
              height="450"
              className="border-8 border-black w-[40vh] m-4 h-[25vh] rounded-3xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
