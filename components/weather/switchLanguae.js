// import ReactCountryFlag from "react-country-flag";
import Link from 'next-translate/Link';
import useTranslation from 'next-translate/useTranslation';

export default function SwitchLanguage(){
  return(
    <>
      <Link href="/weather" lang="en">
        English
        {/* <ReactCountryFlag countryCode="US" /> */}
      </Link>
      <span> | </span>
      <Link href="/weather" lang="vi">
        Vietnamese
        {/* <ReactCountryFlag countryCode="VI" /> */}
      </Link>
    </>
  );
}