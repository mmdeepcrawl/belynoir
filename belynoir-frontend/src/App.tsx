import React, {lazy, Suspense} from 'react';
import './App.css';
import AuthenticatedPage from "./Pages/authenticatedPage";
import {useSelector} from "react-redux";
import {RootState} from "./Store/store";
import Locale from "./LanguageProvider";
import {IntlProvider} from "react-intl";
import flatten from "flat";

const SignInPage = lazy(() => import('./Pages/signInPage'))


const App = () => {
    const isAuthenticated  = useSelector((state: RootState) => state.auth.isAuthenticated);

    const currentLocale: string = navigator.language
    const currentAppLocale = new Locale(currentLocale);

    return (
        <IntlProvider
            locale={currentLocale}
            messages={flatten(currentAppLocale.getLocaleMessages())}
            >
          <Suspense fallback={<div>Loading...</div>}>
              {isAuthenticated ? <AuthenticatedPage /> : <SignInPage />}
          </Suspense>
        </IntlProvider>
    );
}

export default App;
