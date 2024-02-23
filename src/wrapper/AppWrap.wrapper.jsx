import { NavigationDots, SocialMedia } from "../components";

export const AppWrap = ({ Component, idName, classNames = "" }) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app_flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2023 Joseph</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };
