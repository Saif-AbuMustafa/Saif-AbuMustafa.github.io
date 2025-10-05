import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-primary-50 py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-soft border border-gray-200 mb-8">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">
                Trusted by 250+ financial institutions
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-navy leading-tight mb-6">
              AI-Powered Keyboard Intelligence for{' '}
              <span className="text-primary-blue">Financial Workflows</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Secure, compliant AI shortcuts that reduce financial operation costs by 68% while maintaining bank-grade security and full audit compliance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button size="lg" className="text-lg px-8">
                Start Free Trial
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button variant="secondary" size="lg" className="text-lg px-8">
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                View Security Features
              </Button>
            </div>

            {/* Metric Highlights */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-navy">68%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-navy">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-navy">2.3s</div>
                <div className="text-sm text-gray-600">Avg. Setup</div>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="relative floating">
            <Card className="p-8 shadow-large border-0">
              {/* Dashboard Mockup */}
              <div className="bg-primary-navy rounded-lg p-6 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 bg-error-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <div className="text-sm opacity-75">AI Keys Dashboard</div>
                </div>
                
                {/* Mock Data Grid */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-primary-800 rounded p-3">
                    <div className="text-primary-200">Active Shortcuts</div>
                    <div className="text-xl font-bold">142</div>
                  </div>
                  <div className="bg-primary-800 rounded p-3">
                    <div className="text-primary-200">Time Saved</div>
                    <div className="text-xl font-bold">3.2h</div>
                  </div>
                  <div className="bg-primary-800 rounded p-3 col-span-2">
                    <div className="text-primary-200">Recent Activity</div>
                    <div className="text-xs mt-2 space-y-1">
                      <div className="flex justify-between">
                        <span>Payment processed</span>
                        <span className="text-success-400">✓</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compliance check</span>
                        <span className="text-success-400">✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Security Badge */}
              <div className="absolute -top-4 -right-4 bg-success-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-medium">
                PCI DSS Certified
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
