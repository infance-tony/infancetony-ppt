import { ArrowDown, Shield, Code, Server, Database, CheckCircle } from 'lucide-react';

export function FrontendFlowDiagram() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {/* Frontend Request */}
        <div className="p-6 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl text-purple-200 mb-2">Frontend Request</h4>
            <p className="text-sm text-gray-300">(with JWT Token)</p>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />

        {/* Security Filter */}
        <div className="p-6 rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-yellow-400" />
            <h4 className="text-xl text-yellow-200">Security Filter</h4>
          </div>
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <p className="text-sm text-gray-300">Validate JWT Token</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <p className="text-sm text-gray-300">Check User Role</p>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }} />

        {/* REST Controller */}
        <div className="p-6 rounded-xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Code className="w-6 h-6 text-blue-400" />
            <h4 className="text-xl text-blue-200">REST Controller</h4>
          </div>
          <div className="grid grid-cols-2 gap-2 text-center text-sm text-gray-300">
            <div className="px-3 py-2 rounded-lg bg-blue-500/20">
              <span>AuthController</span>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/20">
              <span>JobController</span>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/20">
              <span>ApplicationController</span>
            </div>
            <div className="px-3 py-2 rounded-lg bg-blue-500/20">
              <span>UserController</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />

        {/* Service Layer */}
        <div className="p-6 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Server className="w-6 h-6 text-purple-400" />
            <h4 className="text-xl text-purple-200">Service Layer</h4>
          </div>
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <p className="text-sm text-gray-300">Business Logic</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              <p className="text-sm text-gray-300">Data Validation</p>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />

        {/* Repository Layer */}
        <div className="p-6 rounded-xl border-2 border-pink-500/50 bg-gradient-to-br from-pink-500/20 to-pink-500/5 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Database className="w-6 h-6 text-pink-400" />
            <h4 className="text-xl text-pink-200">Repository Layer</h4>
          </div>
          <div className="space-y-2 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              <p className="text-sm text-gray-300">JPA Queries</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-400"></span>
              <p className="text-sm text-gray-300">Database Operations</p>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }} />

        {/* MySQL Database */}
        <div className="p-6 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <div className="text-center mb-4">
            <h4 className="text-xl text-green-200 mb-3">MySQL Database</h4>
          </div>
          <div className="inline-block w-full">
            <div className="p-4 rounded-lg border border-green-500/30 bg-green-500/10 backdrop-blur-sm">
              <h5 className="text-green-300 mb-3 text-center">Tables:</h5>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>users</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>jobs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>applications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>resumes</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
                  <span>messages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
