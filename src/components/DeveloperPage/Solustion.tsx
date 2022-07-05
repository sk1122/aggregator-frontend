const Solustion = () => {
  return (
    <>
      <div className="my-12 flex justify-between rounded-xl  bg-[#242426] p-10 text-white">
        {/* section left */}
        <div className="w-[60%] space-y-4">
          <div className="flex space-x-4">
            <div>project 1</div>
            <div className="rounded-full bg-white px-4 text-black">live</div>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sit
            nisi enim optio obcaecati labore, eveniet eaque eius hic asperiores
            laborum minus velit? Tempore recusandae et dolorum! Corporis cumque
            accusantium exercitationem cupiditate debitis expedita ipsa, aliquam
            nostrum eum adipisci ea!
          </div>
        </div>
        {/* right part */}
        <div className="flex w-[40%] items-center justify-end">
          <button>
            <img src="/Arrow.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Solustion;
