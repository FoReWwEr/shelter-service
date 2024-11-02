import { ReactNode } from "react";

interface ContainerComponentProps {
  children: ReactNode;
}

export const ContainerComponent: React.FC<ContainerComponentProps> = ({ children }) => {
  return (
    <div style={{ maxWidth: '1400px', margin: '0 auto', marginBottom: '24px', width: '100%'}}>{children}</div>
  );
}