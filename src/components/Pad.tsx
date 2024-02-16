import { ReactNode, useState } from 'react';

type Props = {
  name?: string;
  children: ReactNode;
};

export default function Pad({ children, name = 'Pad' }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <div className="border flex justify-between border-gray-400 rounded p-3 bg-red-600/30">
        {name}
        <button
          onClick={() => setExpanded(!isExpanded)}
          className="text-sm border px-3 border-gray-600 rounded h-6"
        >
          {isExpanded ? 'collapse' : 'expand'}
        </button>
      </div>

      {isExpanded && children}
    </div>
  );
}
