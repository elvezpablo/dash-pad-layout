import { ReactNode } from 'react';

type Props = {
  name?: string;
  children: ReactNode;
};

export default function Pad({ children, name = 'Pad' }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="border border-gray-400 rounded p-3 bg-red-600/30">
        {name}
      </div>
      {children}
    </div>
  );
}
