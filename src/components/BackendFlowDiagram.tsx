import { ArrowDown, CheckCircle, XCircle } from 'lucide-react';

export function BackendFlowDiagram() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Request Flow */}
      <div className="space-y-6">
        {/* Frontend Request */}
        <div className="p-6 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl text-purple-200 mb-2">Frontend Request</h4>
            <p className="text-sm text-gray-300 font-mono">POST /api/applications</p>
            <p className="text-xs text-gray-400 mt-2">Headers: Authorization: Bearer &lt;token&gt;</p>
            <p className="text-xs text-gray-400">Body: {`{ jobId: 5, resumeUrl: "...", coverLetter: "..." }`}</p>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />

        {/* Tomcat Server */}
        <div className="p-6 rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 backdrop-blur-sm">
          <div className="text-center">
            <h4 className="text-xl text-cyan-200 mb-2">Tomcat Server</h4>
            <p className="text-sm text-gray-300">Port 8080</p>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }} />

        {/* Security Filter Chain */}
        <div className="p-6 rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-yellow-200 mb-4 text-center">Security Filter Chain</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm">Step 1: CORS Filter</p>
                <p className="text-gray-400 text-xs">Check origin allowed</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm">Step 2: JWT Filter</p>
                <p className="text-gray-400 text-xs">Extract & validate token, check expiration, load user</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-white text-sm">Step 3: Authorization</p>
                <p className="text-gray-400 text-xs">Check user role/permissions</p>
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />

        {/* Token Validation Decision */}
        <div className="grid grid-cols-2 gap-6">
          <div className="p-4 rounded-xl border-2 border-red-500/50 bg-gradient-to-br from-red-500/20 to-red-500/5 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <XCircle className="w-6 h-6 text-red-400" />
              <h4 className="text-lg text-red-200">Token Invalid</h4>
            </div>
            <p className="text-center text-sm text-gray-300">Return 401 Unauthorized</p>
          </div>
          <div className="p-4 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <h4 className="text-lg text-green-200">Token Valid</h4>
            </div>
            <p className="text-center text-sm text-gray-300">Continue to Controller</p>
          </div>
        </div>

        <div className="flex justify-end">
          <ArrowDown className="w-8 h-8 text-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />
        </div>

        {/* Controller Layer */}
        <div className="p-6 rounded-xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-blue-200 mb-3 text-center">Controller Layer</h4>
          <div className="text-center space-y-2">
            <p className="text-white text-sm">ApplicationController</p>
            <p className="text-gray-300 text-xs font-mono">@PostMapping createApplication()</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs">Validate input</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs">Get user from JWT</span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs">Call service</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }} />

        {/* Service Layer */}
        <div className="p-6 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-purple-200 mb-3 text-center">Service Layer</h4>
          <div className="text-center space-y-2">
            <p className="text-white text-sm mb-3">ApplicationService - Business Logic</p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-200">
                1. Check if already applied
              </div>
              <div className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-200">
                2. Verify job exists
              </div>
              <div className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-200">
                3. Verify job is still open
              </div>
              <div className="px-3 py-2 rounded-lg bg-purple-500/20 text-purple-200">
                4. Create application
              </div>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.5s' }} />

        {/* Repository Layer */}
        <div className="p-6 rounded-xl border-2 border-pink-500/50 bg-gradient-to-br from-pink-500/20 to-pink-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-pink-200 mb-3 text-center">Repository Layer</h4>
          <div className="text-center space-y-2">
            <p className="text-white text-sm">ApplicationRepository</p>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-xs font-mono">save()</span>
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-xs font-mono">findById()</span>
              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-200 text-xs font-mono">findByStudentId()</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.6s' }} />

        {/* JPA/Hibernate */}
        <div className="p-6 rounded-xl border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-orange-200 mb-3 text-center">JPA/Hibernate</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              <span>Convert entity to SQL statement</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              <span>Manage transaction</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400"></span>
              <span>Map result back to entity</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.7s' }} />

        {/* MySQL Database */}
        <div className="p-6 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-green-200 mb-3 text-center">MySQL Database (Port 3306)</h4>
          <div className="bg-black/40 p-4 rounded-lg font-mono text-xs text-green-300 overflow-x-auto">
            <pre>{`INSERT INTO applications (
  student_id,
  job_id,
  resume_url,
  cover_letter,
  status,
  applied_date
) VALUES (
  3, 5, '...pdf',
  'I am...',
  'PENDING',
  NOW()
);

✓ Record inserted
✓ ID generated: 42`}</pre>
          </div>
        </div>

        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <ArrowDown className="w-5 h-5 text-cyan-400 rotate-180" />
            <span className="text-cyan-200 text-sm">Response flows back up through all layers</span>
            <ArrowDown className="w-5 h-5 text-cyan-400 rotate-180" />
          </div>
        </div>

        {/* Final Response */}
        <div className="p-6 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <h4 className="text-xl text-green-200 mb-3 text-center">HTTP Response to Frontend</h4>
          <div className="bg-black/40 p-4 rounded-lg font-mono text-xs text-green-300 overflow-x-auto">
            <pre>{`Status: 201 Created
Body: {
  "id": 42,
  "studentId": 3,
  "jobId": 5,
  "resumeUrl": "/uploads/...",
  "coverLetter": "I am...",
  "status": "PENDING",
  "appliedDate": "2025-11-18..."
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}