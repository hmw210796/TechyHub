function HeaderBar(props) {
  function closeHeaderHandler() {
    props.onClose();
  }

  return (
    <div className="w-full bg-blue-900 max-h-15 px-3 py-2 lg:px-40">
      <div className="flex justify-between">
        <div className="flex flex-row space-x-3 text-white">
          <h2 className="text-sm md:text-md font-semibold">
            We are now hosting events with Zoom Webinars!
          </h2>
          <a href="#" className="font-bold underline text-sm md:text-md">
            Find out more
          </a>
        </div>
        <button onClick={closeHeaderHandler} className="text-white">
          x
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
