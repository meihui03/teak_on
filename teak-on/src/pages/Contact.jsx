function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        We'd love to hear from you! Fill out the form below or reach out to us directly.
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input type="email" className="w-full border border-gray-300 rounded p-2" />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea className="w-full border border-gray-300 rounded p-2" rows="5" />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
