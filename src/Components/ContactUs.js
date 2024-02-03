import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input type="text" className="border border-black p-2 m-2" placeholder="name"/>
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message"
        />
        <button className="border border-black p-2 m-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
