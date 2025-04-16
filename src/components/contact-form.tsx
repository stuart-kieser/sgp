export default function Contactform() {
  return (
    <div className="w-full p-6  shadow-lg rounded-lg text-left pl-10 pt-10 flex justify-center">
      <form className="w-[70%] flex flex-col justify-center">
        <div>
          <label className="block text-accent font-medium mb-2">Name:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-accent font-medium mb-2">Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-accent font-medium mb-2">
            Number:
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-accent font-medium mb-2">
            Ask us:
          </label>
          <textarea
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>
        <button
          className="w-full bg-orange-600 mt-3 p-2 rounded-full text-white hover:bg-orange-500 active:scale-95"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
