import Solustion from './Solustion';

const Solustions = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="space-y-2 text-center  text-white">
          <h1 className="text-4xl font-extrabold lg:text-6xl">
            <span className="text-wagpay-primary">Solustions</span> on WagPay
          </h1>
          <p className="text-sm lg:text-2xl ">
            Wagpay s complete suite of cross-chain payment solutions
          </p>
        </div>
      </div>
      <div className="mx-auto flex w-[60%] justify-center">
        <div>
          <Solustion />
          <Solustion />
          <Solustion />
          <Solustion />
          <Solustion />
        </div>
      </div>
    </>
  );
};

export default Solustions;
