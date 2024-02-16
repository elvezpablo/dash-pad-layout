import { useState } from 'react';

type Props = {
  name?: string;
};

export default function Generator({ name = 'Container' }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className={`border flex justify-between border-gray-400 rounded p-3 bg-blue-600/10 `}
    >
      <div className={`${isExpanded && 'h-[200px]'}`}>{name}</div>
      <button
        onClick={() => setExpanded(!isExpanded)}
        className="text-sm border px-3 border-gray-600 rounded h-6"
      >
        {isExpanded ? 'collapse' : 'expand'}
      </button>
    </div>
  );
}
