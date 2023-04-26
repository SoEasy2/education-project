import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}
const Component: React.FC<PortalProps> = ({ children, element = document.body }) => (
    createPortal(children, element)
);
const Portal = React.memo(Component);

export { Portal };
