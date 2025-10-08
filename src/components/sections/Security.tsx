import { Shield, FileText, Lock, RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Security = () => {
  const { t } = useTranslation();
  
  const securityFeatures = [
    {
      title: t('security.encryption.title', 'Encrypted in transit and at rest'),
      description: t('security.encryption.desc', 'End-to-end encryption protects your data at every stage'),
      icon: Lock
    },
    {
      title: t('security.compliance.title', 'KYC/AML workflows aligned with GCC practices'),
      description: t('security.compliance.desc', 'Full compliance with regional financial regulations'),
      icon: FileText
    },
    {
      title: t('security.access.title', 'Access controls and auditability'),
      description: t('security.access.desc', 'Comprehensive logging and monitoring of all activities'),
      icon: Shield
    },
    {
      title: t('security.reviews.title', 'Independent reviews and continuous improvement'),
      description: t('security.reviews.desc', 'Regular security assessments and updates'),
      icon: RefreshCw
    }
  ];

  return (
    <section id="security" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="max-w-2xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                {t('security.heading', 'Bank-grade security')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                {t('security.subheading', 'Your money and data are protected with enterprise-level security')}
              </p>
            </div>
            
            <div className="space-y-8 pt-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-5 fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-gray-100">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-gray-900 text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization */}
          <div className="relative fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 lg:p-16 shadow-2xl">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="font-bold text-2xl text-white">{t('security.architecture', 'Security Status')}</div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10">
                  <span className="font-semibold text-white text-lg">{t('security.status.encryption', 'Encryption')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10">
                  <span className="font-semibold text-white text-lg">{t('security.status.compliance', 'Compliance')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Active</span>
                  </div>
                </div>
                <div className="flex justify-between items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-5 border border-white/10">
                  <span className="font-semibold text-white text-lg">{t('security.status.audit', 'Monitoring')}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-medium">Active</span>
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
