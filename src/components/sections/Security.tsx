export const Security = () => {
  const securityFeatures = [
    {
      title: "Encrypted in transit and at rest",
      icon: "🔒"
    },
    {
      title: "KYC/AML workflows aligned with GCC practices",
      icon: "📋"
    },
    {
      title: "Access controls and auditability",
      icon: "🛡️"
    }
  ];

  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
              Security by design
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              الأمان في جوهر التصميم
            </p>
            
            <div className="space-y-6 mt-8">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 hover-lift">
                  <div className="text-2xl flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg">
                      {feature.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="relative fade-in-up">
            <div className="bg-white rounded-2xl p-8 shadow-large border-0 hover-lift">
              <div className="bg-gradient-to-br from-primary-navy to-primary-800 rounded-xl p-6 text-white">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🔐</div>
                  <div className="font-semibold text-lg">Security Architecture</div>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>Encryption Active</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>Compliance Check</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex justify-between items-center bg-primary-700 rounded-lg px-4 py-3">
                    <span>Audit Trail</span>
                    <div className="w-2 h-2 bg-success-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
