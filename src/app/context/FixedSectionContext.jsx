'use client'

import { createContext, useContext, useState } from 'react';

const FixedSectionContext = createContext();

export const FixedSectionProvider = ({ children }) => {
    const [isFixed, setIsFixed] = useState(false);

    return (
        <FixedSectionContext.Provider value={{ isFixed, setIsFixed }}>
            {children}
        </FixedSectionContext.Provider>
    );
};

export const useFixedSection = () => {
    return useContext(FixedSectionContext);
};
