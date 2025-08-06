import React from 'react';
interface FeatureHighlightProps {
  icon: ReactNode;
  title: string;
  description: string;
}
export function FeatureHighlight({
  icon,
  title,
  description
}: FeatureHighlightProps) {
  return <div className="bg-black bg-opacity-50 border border-gray-800 rounded-lg p-6 hover:border-[#00AEEF] transition-colors group">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-200 group-hover:text-[#00AEEF] transition-colors">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>;
}