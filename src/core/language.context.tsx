/* eslint-disable react-refresh/only-export-components */
import React from 'react';

export interface ContextModel {
  languageState: 'en' | 'es';
  setLanguageState: (languageState: 'en' | 'es') => void;
}

export const LanguageContext = React.createContext<ContextModel | null>(null);

interface Props {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<Props> = props => {
  const { children } = props;

  const [languageState, setLanguageState] =
    React.useState<ContextModel['languageState']>('en');

  return (
    <LanguageContext.Provider value={{ languageState, setLanguageState }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = React.useContext(LanguageContext);
  if (context === null) {
    throw 'useLanguageContext: looks like you have forgotten to add the provider on top of the app';
  }

  return context;
};
