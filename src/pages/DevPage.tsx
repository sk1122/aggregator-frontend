import CTA from '@/components/DeveloperPage/CTA';
import Hero from '@/components/DeveloperPage/HeroSec';
import Solustions from '@/components/DeveloperPage/Solutions';
import Footer from '@/components/Footer';
import Support from '@/components/landing/support';
import Navbar from '@/components/Navbar';

const DevPage = () => {
  return (
    <>
      <div className="bg-wagpay-dark">
        <Navbar />
        <Hero />
        <CTA />
        <Solustions />
        <div className="mx-auto w-full text-white lg:w-[80%]">
          <Support />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DevPage;
