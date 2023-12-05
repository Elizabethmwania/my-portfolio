import React, { useState } from 'react';
import { ChatIcon } from '@heroicons/react/solid';
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', { name, email, message });
      
        fetch('/api/submitForm', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
              console.log("Not okay");
            }
            return response.json();
            
          })
          .then((data) => {
            console.log('Server response:', data);
            alert('Message Sent!');
          })
          .catch((error) => {
            console.error('Form submission error:', error);
            alert('Form submission failed. Please check the console for details.');
          });
      }
      

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await fetch('/api/submitForm', {
    //             method: 'POST',
    //             headers: {
    //               'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ name, email, message }),
              
    //     })
    //     if (response.ok){
    //         alert("Message sent Successfully");
    //         setName(""); 
    //         setEmail("");
    //         setMessage("");
    //     }else {
    //         console.error('Form submission failed');
    //         alert ("Failed to send message.")
    //     }
        
    // } catch (error){
    //     console.error('Error: ', error);
    //     alert("An error occurred whie sending message.")
    //     setName(""); 
    //     setEmail("");
    //     setMessage("");
    // }
    // }

    return (
        <section id="contact" className="relative text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center">
                <ChatIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-orange-600 mb-12">
                Contact
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                    Thinking of an idea? We can turn it into reality. 
                    <br/>Lets interact 😊
                </p>
                </div>
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                    width="100%"
                    height="100%"
                    title="map"
                    className="absolute inset-0"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    loading = 'lazy'
                    style={{ filter: "opacity(0.7)" }}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3988.851421862121!2d36.839816424965626!3d-1.2614216487265717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1701767969099!5m2!1sen!2ske"
                />
                <div className="bg-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        Muthaiga Square. <br />
                        Nairobi,Kenya
                    </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        CONTACT
                    </h2>
                    <a className="text-indigo-400 leading-relaxed">
                        mwania.m.elizabeth@email.com
                    </a>
                    <p className="leading-relaxed">+254 794 319 208</p>
                    </div>
                </div>
                </div>
                <form onSubmit={handleSubmit}
                style={{padding:20}}
                className="bg-gray-800 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <p className="leading-relaxed mb-5">
                    Lets chat for more!
                </p>
                <div className="relative mb-4">
                <input type="hidden" name="form-name" value="contact" />
                    <label htmlFor="name" className="leading-7 text-sm text-orange-600">
                    Name
                    </label>
                    <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-orange-600">
                    Email
                    </label>
                    <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                    htmlFor="message"
                    className="leading-7 text-sm text-orange-600">
                    Message
                    </label>
                    <textarea
                    required
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-gray-600 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
                    Submit
                </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;