import { ReactNode, useState } from 'react';

type Props = {
  name?: string;
  children: ReactNode;
};

export default function Generator({ name = 'Generator', children }: Props) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <div
        className={`sm:col-span-2 md:col-span-1 border border-gray-400 rounded p-3 `}
      >
        <div className="flex justify-between">
          <div className={`${isExpanded && 'h-[200px]'}`}>{name}</div>
          <button
            onClick={() => setExpanded(!isExpanded)}
            className="text-sm border px-3 border-gray-600 rounded h-6"
          >
            {isExpanded ? 'collapse' : 'expand'}
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
