import { LucideIcon } from 'lucide-react';

interface GlassCardProps {
  icon: LucideIcon;
  title?: string;
  description: string;
  className?: string;
}

export function GlassCard({ icon: Icon, title, description, className = "" }: GlassCardProps) {
  return (
    <div className={`glass-card p-8 rounded-xl backdrop-blur-md bg-white/5 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 flex flex-col h-full ${className}`}>
      <div className="w-16 h-16 mb-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center border border-purple-400/30 flex-shrink-0">
        <Icon className="w-8 h-8 text-purple-300" />
      </div>
      {title && <h3 className="text-white mb-3 text-lg">{title}</h3>}
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}