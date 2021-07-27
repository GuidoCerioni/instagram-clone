import { useEffect, useContext } from 'react';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import Timeline from '../components/timeline';

export default function Dashboard() {
  useEffect(() => {
    document.title = 'InstagramClone';
  }, []);

  return (
    <>
      <Header />
      <div className="bg-gray-background">
        <div
          className="flex justify-center container
        px-5 mx-auto max-w-screen-lg h-full"
        >
          <div className="max-w-615">
            <Timeline />
          </div>
          <div className="w-72 ml-8 hidden lg:block">
            <div className="fixed w-72">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
/*
      <nav className="">
        <ul className=""_9Rlzb">
          <li className="">
            <a
              className=""
              href="https://about.instagram.com/"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              About
            </a>
          </li>
          <li className="">
            <a className="" href="https://help.instagram.com/">
              Help
            </a>
          </li>
          <li className="">
            <a className="" href="https://about.instagram.com/blog/">
              Press
            </a>
          </li>
          <li className="">
            <a
              className=""
              href="https://developers.facebook.com/docs/instagram"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              API
            </a>
          </li>
          <li className="">
            <a className="" href="/about/jobs/">
              Jobs
            </a>
          </li>
          <li className="">
            <a className="" href="/legal/privacy/">
              Privacy
            </a>
          </li>
          <li className="">
            <a className=""_vfM2" href="/legal/terms/">
              Terms
            </a>
          </li>
          <li className="">
            <a className="" href="/explore/locations/">
              Locations
            </a>
          </li>
          <li className="">
            <a className="" href="/directory/profiles/">
              Top Accounts
            </a>
          </li>
          <li className="">
            <a className="" href="/directory/hashtags/">
              Hashtags
            </a>
          </li>
          <li className="">
            <span className=""     tN4Ei l93RR">
              Language
              <select aria-label="Switch Display Language" className="">
                <option value="af">Afrikaans</option>
                <option value="cs">Čeština</option>
                <option value="da">Dansk</option>
                <option value="de">Deutsch</option>
                <option value="el">Ελληνικά</option>
                <option value="en">English</option>
                <option value="en-gb">English (UK)</option>
                <option value="es">Español (España)</option>
                <option value="es-la">Español</option>
                <option value="fi">Suomi</option>
                <option value="fr">Français</option>
                <option value="id">Bahasa Indonesia</option>
                <option value="it">Italiano</option>
                <option value="ja">日本語</option>
                <option value="ko">한국어</option>
                <option value="ms">Bahasa Melayu</option>
                <option value="nb">Norsk</option>
                <option value="nl">Nederlands</option>
                <option value="pl">Polski</option>
                <option value="pt-br">Português (Brasil)</option>
                <option value="pt">Português (Portugal)</option>
                <option value="ru">Русский</option>
                <option value="sv">Svenska</option>
                <option value="th">ภาษาไทย</option>
                <option value="tl">Filipino</option>
                <option value="tr">Türkçe</option>
                <option value="zh-cn">中文(简体)</option>
                <option value="zh-tw">中文(台灣)</option>
                <option value="bn">বাংলা</option>
                <option value="gu">ગુજરાતી</option>
                <option value="hi">हिन्दी</option>
                <option value="hr">Hrvatski</option>
                <option value="hu">Magyar</option>
                <option value="kn">ಕನ್ನಡ</option>
                <option value="ml">മലയാളം</option>
                <option value="mr">मराठी</option>
                <option value="ne">नेपाली</option>
                <option value="pa">ਪੰਜਾਬੀ</option>
                <option value="si">සිංහල</option>
                <option value="sk">Slovenčina</option>
                <option value="ta">தமிழ்</option>
                <option value="te">తెలుగు</option>
                <option value="vi">Tiếng Việt</option>
                <option value="zh-hk">中文(香港)</option>
                <option value="bg">Български</option>
                <option value="fr-ca">Français (Canada)</option>
                <option value="ro">Română</option>
                <option value="sr">Српски</option>
                <option value="uk">Українська</option>
              </select>
            </span>
          </li>
        </ul>
      </nav>
      <span class="DINPA">© 2021 Instagram from Facebook</span> */
