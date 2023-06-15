const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="hidden md:block bg-bright-gray text-dusty-black text-center dark:text-dusty-gray md:py-14 xl:py-[70px] font-noto-sans">
      <section>
        <p className="md:p-2 xl:p-5 text-xl font-bold">일인칭서재</p>
        <p className="md:p-[2px] xl:p-1">
          <span className="font-bold">Contact</span>{' '}
          firstpersonlibrary@gmail.com
        </p>
        <p className="md:p-[2px] xl:p-1">
          <span className="font-bold">Copyright</span> © {currentYear}{' '}
          일인칭서재 All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
