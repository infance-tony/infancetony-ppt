interface ScreenshotPlaceholderProps {
  label: string;
  className?: string;
}

export function ScreenshotPlaceholder({ label, className = "" }: ScreenshotPlaceholderProps) {
  return (
    <div className={`relative bg-black/40 backdrop-blur-sm border-2 border-purple-500/30 rounded-lg overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
      <div className="relative flex items-center justify-center h-full min-h-[300px] p-8">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-2 border-purple-400/50 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-cyan-400 rounded opacity-50" />
          </div>
          <p className="text-gray-400 tracking-wider">{label}</p>
        </div>
      </div>
    </div>
  );
}
