import { ReactNode, createContext, useContext } from 'react';

type OfficialInfoContextType = {
  officialName: string;
  officialEmail: string;
};

type OfficialInfoProviderProps = {
  children: ReactNode;
};

const OfficialInfoContext = createContext<OfficialInfoContextType>({
  officialName: '일인칭서재',
  officialEmail: 'firstpersonlibrary@gmail.com',
});

export function OfficialInfoProvider({ children }: OfficialInfoProviderProps) {
  return (
    <OfficialInfoContext.Provider
      value={{
        officialName: '일인칭서재',
        officialEmail: 'firstpersonlibrary@gmail.com',
      }}
    >
      {children}
    </OfficialInfoContext.Provider>
  );
}

export const useOfficialInfo = () => useContext(OfficialInfoContext);
