import React from 'react';

export const Tabs = ({ children, ...props }) => <div {...props}>{children}</div>;
export const TabsContent = ({ children, ...props }) => <div {...props}>{children}</div>;
export const TabsList = ({ children, ...props }) => <div {...props}>{children}</div>;
export const TabsTrigger = ({ children, ...props }) => <button {...props}>{children}</button>;
