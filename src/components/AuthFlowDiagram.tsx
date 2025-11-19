import { ArrowDown, Lock, Key, Shield } from 'lucide-react';

export function AuthFlowDiagram() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Authentication Flow (Login) */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h4 className="text-2xl text-gradient-purple-cyan mb-2">Authentication Flow</h4>
          <p className="text-gray-400 text-sm">User Login Process</p>
        </div>

        {/* Login Request */}
        <div className="p-5 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-6 h-6 text-purple-400" />
            <h5 className="text-lg text-purple-200">Login Request</h5>
          </div>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-purple-300">
            <pre>{`POST /api/auth/login
{
  email: "john@email.com",
  password: "pass123"
}`}</pre>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" />

        {/* AuthController */}
        <div className="p-5 rounded-xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-blue-200 mb-2">AuthController</h5>
          <p className="text-gray-300 text-sm font-mono">login()</p>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }} />

        {/* AuthService */}
        <div className="p-5 rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-cyan-200 mb-3">AuthService</h5>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">1.</span>
              <span>Find user by email</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">2.</span>
              <span>Check password with BCrypt</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-cyan-400 mt-0.5">3.</span>
              <span>If valid, generate JWT</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />

        {/* JwtService */}
        <div className="p-5 rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Key className="w-6 h-6 text-yellow-400" />
            <h5 className="text-lg text-yellow-200">JwtService</h5>
          </div>
          <div className="space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>Create claims</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>Set expiration (24hrs)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>Sign with secret key</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span>Return token string</span>
            </div>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />

        {/* Response */}
        <div className="p-5 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-green-400" />
            <h5 className="text-lg text-green-200">Auth Response</h5>
          </div>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-green-300">
            <pre>{`{
  "token": "eyJhbGc...",
  "user": {
    "id": 3,
    "name": "John Doe",
    "email": "john@...",
    "role": "STUDENT"
  }
}`}</pre>
          </div>
        </div>
      </div>

      {/* Data Retrieval Flow (GET Jobs) */}
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h4 className="text-2xl text-gradient-purple-cyan mb-2">Data Retrieval Flow</h4>
          <p className="text-gray-400 text-sm">Fetching Jobs with Filters</p>
        </div>

        {/* GET Request */}
        <div className="p-5 rounded-xl border-2 border-purple-500/50 bg-gradient-to-br from-purple-500/20 to-purple-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-purple-200 mb-3">GET Request</h5>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-purple-300">
            <pre>{`GET /api/jobs?
  location=NewYork&
  type=FULL_TIME

Headers: {
  Authorization: Bearer <TOKEN>
}`}</pre>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" />

        {/* Security Filters */}
        <div className="p-5 rounded-xl border-2 border-yellow-500/50 bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-yellow-200 mb-2">Security Filters</h5>
          <p className="text-green-300 text-sm">✓ JWT validated</p>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.1s' }} />

        {/* JobController */}
        <div className="p-5 rounded-xl border-2 border-blue-500/50 bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-blue-200 mb-2">JobController</h5>
          <div className="space-y-1 text-sm text-gray-300">
            <p className="font-mono">getAllJobs()</p>
            <p className="text-xs">• Extract query params</p>
            <p className="text-xs">• Call service</p>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.2s' }} />

        {/* JobService */}
        <div className="p-5 rounded-xl border-2 border-cyan-500/50 bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-cyan-200 mb-2">JobService</h5>
          <div className="space-y-1 text-sm text-gray-300">
            <p className="font-mono">searchJobs()</p>
            <p className="text-xs">• Build filter criteria</p>
            <p className="text-xs">• Call repository</p>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.3s' }} />

        {/* JobRepository */}
        <div className="p-5 rounded-xl border-2 border-pink-500/50 bg-gradient-to-br from-pink-500/20 to-pink-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-pink-200 mb-2">JobRepository</h5>
          <p className="text-gray-300 text-sm font-mono">findByLocationAndJobType()</p>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.4s' }} />

        {/* SQL Query */}
        <div className="p-5 rounded-xl border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/20 to-orange-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-orange-200 mb-3">Hibernate/JPA</h5>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-orange-300">
            <pre>{`SELECT * FROM jobs
WHERE location = 'NewYork'
AND job_type = 'FULL_TIME'
AND status = 'OPEN'`}</pre>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.5s' }} />

        {/* Database */}
        <div className="p-5 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-green-200 mb-2">MySQL Database</h5>
          <div className="space-y-1 text-sm text-gray-300">
            <p>• Executes query</p>
            <p>• Returns 15 rows</p>
          </div>
        </div>

        <ArrowDown className="w-6 h-6 mx-auto text-cyan-400 animate-bounce" style={{ animationDelay: '0.6s' }} />

        {/* JSON Response */}
        <div className="p-5 rounded-xl border-2 border-green-500/50 bg-gradient-to-br from-green-500/20 to-green-500/5 backdrop-blur-sm">
          <h5 className="text-lg text-green-200 mb-3">JSON Response</h5>
          <div className="bg-black/40 p-3 rounded-lg font-mono text-xs text-green-300">
            <pre>{`[
  {
    "id": 1,
    "title": "Developer",
    "location": "NewYork",
    "jobType": "FULL_TIME",
    "salary": "$80k-100k"
  },
  ...
]`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}