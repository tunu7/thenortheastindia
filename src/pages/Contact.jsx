const Contact = () => (
  <section className="px-4 py-10 max-w-xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
    <form className="space-y-4">
      <input type="text" placeholder="Your Name" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
      <input type="email" placeholder="Your Email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
      <textarea placeholder="Your Message" className="w-full border rounded px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-black"></textarea>
      <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition">Send</button>
    </form>
  </section>
);

export default Contact;
