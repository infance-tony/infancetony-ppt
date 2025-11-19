import { ArrowDown, Shield, Server, Layers, Database, Lock } from 'lucide-react';

export function DatabaseFlowDiagram() {
  const flowSteps = [
    {
      title: 'Frontend Request',
      subtitle: '(with JWT Token)',
      icon: Lock,
      color: 'purple',
      details: []
    },
    {
      title: 'Security Filter',
      subtitle: '',
      icon: Shield,
      color: 'cyan',
      details: [
        '• Validate JWT Token',
        '• Check User Role'
      ]
    },
    {
      title: 'REST Controller',
      subtitle: '',
      icon: Server,
      color: 'pink',
      details: [
        '• AuthController',
        '• JobController',
        '• ApplicationController',
        '• UserController'
      ]
    },
    {
      title: 'Service Layer',
      subtitle: '',
      icon: Layers,
      color: 'purple',
      details: [
        '• Business Logic',
        '• Data Validation'
      ]
    },
    {
      title: 'Repository Layer',
      subtitle: '',
      icon: Database,
      color: 'cyan',
      details: [
        '• JPA Queries',
        '• Database Operations'
      ]
    },
    {
      title: 'MySQL Database',
      subtitle: '',
      icon: Database,
      color: 'green',
      details: [
        'Tables:',
        '• users',
        '• jobs',
        '• applications',
        '• resumes',
        '• messages'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; bg: string; text: string; glow: string }> = {
      purple: {
        border: 'border-purple-500/30',
        bg: 'bg-purple-500/10',
        text: 'text-purple-300',
        glow: 'shadow-purple-500/20'
      },
      cyan: {
        border: 'border-cyan-500/30',
        bg: 'bg-cyan-500/10',
        text: 'text-cyan-300',
        glow: 'shadow-cyan-500/20'
      },
      pink: {
        border: 'border-pink-500/30',
        bg: 'bg-pink-500/10',
        text: 'text-pink-300',
        glow: 'shadow-pink-500/20'
      },
      green: {
        border: 'border-green-500/30',
        bg: 'bg-green-500/10',
        text: 'text-green-300',
        glow: 'shadow-green-500/20'
      }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-6">
        {flowSteps.map((step, index) => {
          const colorClasses = getColorClasses(step.color);
          return (
            <div key={index} className="relative">
              {/* Flow Step Card */}
              <div
                className={`relative p-6 rounded-xl border ${colorClasses.border} ${colorClasses.bg} backdrop-blur-sm hover:${colorClasses.glow} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${colorClasses.bg} border ${colorClasses.border} flex items-center justify-center flex-shrink-0`}>
                    <step.icon className={`w-6 h-6 ${colorClasses.text}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-xl ${colorClasses.text} mb-1`}>
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-gray-400 text-sm mb-2">{step.subtitle}</p>
                    )}
                    
                    {step.details.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {step.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow Between Steps */}
              {index < flowSteps.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="relative">
                    <ArrowDown className="w-6 h-6 text-purple-400/50 animate-bounce-slow" />
                    <div className="absolute inset-0 blur-sm">
                      <ArrowDown className="w-6 h-6 text-purple-400/30" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
