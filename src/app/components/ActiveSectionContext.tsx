"use client";

import { createContext, useContext, useMemo, useState } from "react";

type ActiveSectionContextValue = {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextValue | null>(
  null
);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<string>("home");

  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
    }),
    [activeSection]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    throw new Error(
      "useActiveSection must be used within an ActiveSectionProvider"
    );
  }

  return context;
}
