'use client'
import { LuUsers } from "react-icons/lu";
import { useState } from 'react';

interface Client {
  clientName: string;
  address: string;
  phone: string;
  email: string;
  propertyAddress: string;
  propertyType: string;
  contractType: string;
  land: string;
  house: string;
}

export default function Clients() {
  const [clients, setClients] = useState<Client[]>([
    {
      clientName: '',
      address: '',
      phone: '',
      email: '',
      propertyAddress: '',
      propertyType: '',
      contractType: '',
      land: '',
      house: '',
    },
  ]);

  // Handle input change with proper typing for event and index
  const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const updatedClients = [...clients];
    updatedClients[index] = {
      ...updatedClients[index],
      [name]: value,
    };
    setClients(updatedClients);
  };

  // Add new client input fields
  const addClient = () => {
    setClients([
      ...clients,
      {
        clientName: '',
        address: '',
        phone: '',
        email: '',
        propertyAddress: '',
        propertyType: '',
        contractType: '',
        land: '',
        house: '',
      },
    ]);
  };

  // Remove client input fields
  const removeClient = (index: number) => {
    const updatedClients = clients.filter((_, i) => i !== index);
    setClients(updatedClients);
  };

  return (
    <div className="flex items-center justify-center px-8">
      <div className="container mx-auto ">
        {/* Add button placed in the top-right corner */}
       

        {clients.map((client, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md mb-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-700 flex justify-center items-center gap-2">
                <LuUsers /> Client {index + 1}
              </h2>
              <div className="flex justify-end mb-4">
          <button
            onClick={addClient}
            className="border-2 border-solid border-[#E2E4E9]  px-4 py-2 rounded-lg shadow-md transition duration-300"
          >
            + Add Client
          </button>
        </div>

            </div>
            {/* Labels and inputs */}
             {/* main-div */}
            <div className="flex flex-col gap-4">
               {/* first-div */}
               <div className="flex gap-4">
                {/* input-1 */}
                <div className="flex flex-col gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Client name</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px] ">
             <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="fred Van Urk"
                className="input-style focus:outline-none "
                
              />
             </div>
              </div>

               {/* input-2 */}
               <div className="flex flex-col  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Address</label>
              <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
              <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="Leichhart, NSW 2024"
                className="input-style"
              />
              </div>
              </div>

               {/* input-3 */}
               <div className="flex flex-col font-normal  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">phone</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
             <input 
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="0403705106"
                className="input-style"
              />
             </div>
              </div>
               </div>

                {/* second-div */}
                <div className="flex gap-4">
                {/* input-1 */}
                <div className="flex flex-col gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Email</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
             <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="fred@ppig.com.au"
                className="input-style"
              />
             </div>
              </div>

               {/* input-2 */}
               <div className="flex flex-col  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Property Address</label>
              <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
              <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="Moore Creek, Tamworth"
                className="input-style"
              />
              </div>
              </div>

               {/* input-3 */}
               <div className="flex flex-col font-normal  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Property Type</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
             <input 
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="Duplex"
                className="input-style"
              />
             </div>
              </div>
               </div>

                {/* third-div */}
                <div className="flex gap-4">
                {/* input-1 */}
                <div className="flex flex-col gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Contract Type</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
             <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="Split Contract"
                className="input-style"
              />
             </div>
              </div>

               {/* input-2 */}
               <div className="flex flex-col  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">Land</label>
              <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
              <input
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="$ 269,000"
                className="input-style"
              />
              </div>
              </div>

               {/* input-3 */}
               <div className="flex flex-col font-normal  gap-1 text-[12px]">
              <label htmlFor={`clientName-${index}`} className="text-md text-[12px]">House</label>
             <div className="border-2 border-solid border-[#E2E4E9] rounded-lg p-2 w-[215px]">
             <input 
                id={`clientName-${index}`}
                type="text"
                name="clientName"
                value={client.clientName}
                onChange={(e) => handleChange(index, e)}
                placeholder="$ 697,5000"
                className="input-style"
              />
             </div>
              </div>
               </div>
              
             

              
            </div>

            {/* //Remove button for each client */}
            {/* <div className="flex justify-end mt-4">
              <button
                onClick={() => removeClient(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
              >
                Remove Client
              </button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
