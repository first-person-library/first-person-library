import { OFFICIAL_NAME, OFFICIAL_EMAIL } from '../../../constants/officialInfo';

export default function Footer() {
  const CURRENT_YEAR = 2023;

  return (
    <footer className="hidden lg:block bg-bright-gray dark:bg-dark-point text-dusty-black dark:text-dusty-gray lg:py-14 xl:py-[70px] text-center">
      <section>
        <p className="p-5 text-xl font-bold">{OFFICIAL_NAME}</p>
        <p className="lg:p-[2px] xl:p-1">
          <span className="font-bold">Contact</span> {OFFICIAL_EMAIL}
        </p>
        <p className="lg:p-[2px] xl:p-1">
          <span className="font-bold">Copyright</span>
          {` © ${CURRENT_YEAR}
          ${OFFICIAL_NAME} All rights reserved`}
        </p>
      </section>
    </footer>
  );
}
