import { useOfficialInfo } from '../../contexts/OfficialInfoContext';

export default function Footer() {
  const CURRENT_YEAR = 2023;
  const { officialName, officialEmail } = useOfficialInfo();

  return (
    <footer className="hidden md:block bg-bright-gray text-dusty-black text-center dark:text-dusty-gray md:py-14 xl:py-[70px] font-noto-sans">
      <section>
        <p className="md:p-2 xl:p-5 text-xl font-bold">{officialName}</p>
        <p className="md:p-[2px] xl:p-1">
          <span className="font-bold">Contact</span> {officialEmail}
        </p>
        <p className="md:p-[2px] xl:p-1">
          <span className="font-bold">Copyright</span>
          {` © ${CURRENT_YEAR}
          ${officialName} All rights reserved`}
        </p>
      </section>
    </footer>
  );
}
