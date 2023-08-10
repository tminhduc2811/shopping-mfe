const Footer = () => {
  return (
    <div className="bg-[#020203] w-full flex items-center justify-center">
      <div className="max-w-screen-xl flex flex-col gap-3 w-full mx-8 my-12">
        <div className="flex flex-wrap gap-4 justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-white font-medium text-3xl">
              Sign Up To Our Newsletter
            </h2>
            <p className="text-white text-sm font-thin">
              Be the first to hear about the latest offers.
            </p>
          </div>
          <div className="flex gap-4">
            <input
              type="text"
              name="Your Email"
              placeholder="Your Email"
              className="bg-[#020203] border border-white p-3 placeholder:text-white rounded-md w-64 h-12"
            />
            <button className="bg-blue-600 px-6 h-12 text-white rounded-full text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
