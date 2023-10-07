import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Bookus() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [isError, setError] = useState(false);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      const button = document.getElementById('submit-btn');
      if(button != null){
        button.style.display = 'none';
      }
      event.preventDefault();
      const target = event.target as typeof event.target & {
        fullName: { value: string };
        location: { value: string };
        email:    { value: string };
        hours:    { value: string };
        phone:    { value: string };
        data:     { value: string };
      };
  
      const dataBody = {
        name: target.fullName.value,
        location: target.location.value,
        hours: target.hours.value,
        email: target.email.value,
        phone: target.phone.value,
        data: target.data.value
      };
      //call to the Netlify Function you created`
      const result = await fetch(  "/.netlify/functions/thankyou", {
        method: "POST",
        body: JSON.stringify(dataBody),
      });
      if(result.status == 200){
        setIsFormModalOpen(true)
      } else {
        setError(true)
      }
    };

      if(isFormModalOpen){
        return <h2 id="books"className="text-center text-customSecondary text-5xl p-5"> Thank You!</h2>
      }

      if(isError){
        return <h2 id="books" className="text-center text-customSecondary text-5xl p-5"> Sorry, we had trouble with submitting the form.</h2>
      }

      if(!isError && !isFormModalOpen){
        return <section>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  exit={{ opacity: 0 }}
                >
                <h2 id="books" className=" text-center text-customSecondary text-5xl p-5">BOOK US</h2>
                <div className="max-w-2xl mx-auto">
                    <form  netlify
                            netlify-honeypot="bot-field"
                            name="booking-request"
                            method="POST"
                            onSubmit={handleSubmit}
                            className="bg-customPrimary shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <p class="hidden">
                          <label>
                            Don’t fill this out if you’re human: <input name="bot-field" />
                          </label>
                      </p>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="name">
                          Name*
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="name"
                          required
                          name="fullName"
                          type="text"
                          placeholder="Jose Manuel"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="phone">
                          Phone*
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="phone"
                          required
                          name="phone"
                          type="text"
                          placeholder="(555) 555-5555"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="johndoe@example.com"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="location">
                          Location*
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="location"
                          name="location"
                          required
                          type="text"
                          placeholder="123 Main St, City, State"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="hours">
                          Hours to Book*
                        </label>
                        <input
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="hours"
                          name="hours"
                          type="text"
                          required
                          placeholder="Preferred booking hours"
                        />
                      </div>
                      <div className="mb-4">
                        <label className="block text-customDarkBgTransparent text-sm font-bold mb-2" htmlFor="hours">
                          More Information
                        </label>
                        <textarea
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-customDarkBgTransparent leading-tight focus:outline-none focus:shadow-outline"
                          id="data"
                          name="data"
                          placeholder="Anything else you want to say"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          id="submit-btn"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          type="submit"
                        >
                          Submit 
                        </button>
                        
                      </div>
                    </form>
                  </div>
                </motion.div>
              </section>
            }
}