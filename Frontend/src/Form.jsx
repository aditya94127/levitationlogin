import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const [country, setCountry] = useState('');
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [geolocationStatus, setGeolocationStatus] = useState('Not Captured');
  const [geolocation, setGeolocation] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleFilesChange = (e) => {
    if(files.type==pdf||files.type===png){
      const selectedFiles = Array.from(e.target.files)
      setFiles(selectedFiles);
  };
    }
        

  const handleGeolocationCapture = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocationStatus('Captured');
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error(error);
          setGeolocationStatus('Error');
        }
      );
    } else {
      setGeolocationStatus('Not Supported');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-slate-100">
    
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
    <h2 className="text-2xl font-bold  mb-4">DETAILS:</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-bold mb-1">Name:</label>
        <input
          type="text"
          id="name"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-1">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Phone" className="block font-bold mb-1">Phone:</label>
        <input
          type="tel"
          id="Phone"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Address" className="block font-bold mb-1">Address Line 1:</label>
        <input
          type="text"
          id="addressline 1"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={addressLine1}
          onChange={(e) => setAddressLine1(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Address" className="block font-bold mb-1">Address Line 2:</label>
        <input
          type="text"
          id="addressline 2"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={addressLine2}
          onChange={(e) => setAddressLine2(e.target.value)}
          required
        />
      </div>
      <div className='flex items-center mb-4'>
      <div className="w-1/2 mr-2">
        <label htmlFor="City" className="block font-bold mb-1">City:</label>
        <input
          type="text"
          id="city"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        </div>
        <div className="w-1/2 ml-2">
        <label htmlFor="State" className="block font-bold mb-1">State:</label>
        <input
          type="text"
          id="state"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
      
         </div>
    </div>
    <div className='flex items-center mb-4'>
      <div className="w-1/2 mr-2">
        <label htmlFor="PinCode" className="block font-bold mb-1">Pin Code:</label>
        <input
          type="text"
          id="pincode"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          required
        />
      </div>
      <div className="w-1/2 ml-2">
        <label htmlFor="Country" className="block font-bold mb-1">Country:</label>
        <input
          type="text"
          id="Country"
          className="w-full border border-gray-300 rounded px-3 py-2"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </div>
      </div>
      <div className='flex items-center mb-4'>
      <div className="w-1/2 mr-2">
          <label htmlFor="file" className="block font-bold mb-1">Upload File (PNG or PDF):</label>
          <input className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full full file:border-0 ml-2
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 rounded-tl-full rounded-bl-full"
            type="file"
            id="file"
            accept=".png, .pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <div className="w-1/2 ml-2">
          <label htmlFor="files" className="block font-bold mb-1">Upload Files (PNG or PDF):</label>
          <input className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full full file:border-0 ml-2
            file:text-sm file:font-semibold
            file:bg-violet-50 file:text-violet-700
            hover:file:bg-violet-100 rounded-tl-full rounded-bl-full"
            type="file" 
            id="files"
            accept=".png, .pdf"
            multiple
            onChange={handleFilesChange}
            required
          />
        </div>
        </div>
        <div className="mb-4">
          <button
            type="button"
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleGeolocationCapture}
          >
            Capture Geolocation 
          </button>
          {geolocation && (
                <div className="bg-cyan-200 p-4 mt-4 rounded">
                  <h4>Captured Location:</h4>
                  <p>Latitude: {geolocation.latitude}</p>
                  <p>Longitude: {geolocation.longitude}</p>
                </div>
              )}
        </div>
        <button
          type="submit"
          class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 w-full"
        >
          Submit
        </button>
      </form>
      {formSubmitted && <p className="mt-4">Form submitted successfully!</p>}
      </div>
  );
};

export default Form;
