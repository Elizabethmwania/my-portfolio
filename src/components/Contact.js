import React from 'react';
import { ChatIcon } from '@heroicons/react/solid';
const Contact = () => {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode (data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/",{
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message Sent!") )
        .catch((error) => alert(error) );
    }

    return (
        <section id="contact" className="relative text-gray-400 bg-gray-900 body-font" >
            <div className="container px-5 py-10 mx-auto text-center">
                <ChatIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
                Let's Talk
                </h1>
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d90256.46989614451!2d36.80476501014542!3d-1.2880827889894189!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d89586303f%3A0x249cb113a045ce9c!2sKRA%20Offices!5e0!3m2!1sen!2ske!4v1668174135269!5m2!1sen!2ske"
                />
                <div className="bg-gray-300 relative flex flex-wrap py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        Haille Sellasie Ave. <br />
                        Times Tower-Nairobi,Kenya
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
                <form
                netlify
                name="contact"
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                    Hire Me
                </h2>
                <p className="leading-relaxed mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                    suscipit officia aspernatur veritatis. Asperiores, aliquid?
                </p>
                <div className="relative mb-4">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;