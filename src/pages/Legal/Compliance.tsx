import { Navigation } from "@/components/layout/Navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Compliance"
        subtitle="Keys Pay Regulatory Compliance"
        description="Our commitment to regulatory compliance and security standards"
      />
      
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                Regulatory Framework
                <Badge variant="outline">UAE Compliant</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Keys Pay operates under the regulatory framework of the United Arab Emirates and adheres to international compliance standards to ensure the highest level of security and transparency for our users.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">UAE Regulatory Bodies</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Central Bank of the UAE (CBUAE)</li>
                    <li>• Virtual Assets Regulatory Authority (VARA)</li>
                    <li>• Securities and Commodities Authority (SCA)</li>
                    <li>• Financial Intelligence Unit (FIU)</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">International Standards</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Financial Action Task Force (FATF)</li>
                    <li>• Basel Committee Guidelines</li>
                    <li>• ISO 27001 Security Standards</li>
                    <li>• PCI DSS Compliance</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Anti-Money Laundering (AML)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Keys Pay implements comprehensive AML policies and procedures to prevent money laundering and terrorist financing activities.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">AML Measures Include:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Comprehensive customer due diligence (CDD) procedures</li>
                    <li>Enhanced due diligence (EDD) for high-risk customers</li>
                    <li>Ongoing monitoring of customer transactions</li>
                    <li>Suspicious activity reporting (SAR) to relevant authorities</li>
                    <li>Regular staff training on AML compliance</li>
                    <li>Independent AML compliance audits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Know Your Customer (KYC)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our KYC procedures ensure proper customer identification and verification in accordance with UAE regulations and international best practices.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Individual Customers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Government-issued photo ID verification</li>
                      <li>• Proof of address documentation</li>
                      <li>• Biometric verification (where applicable)</li>
                      <li>• Source of funds verification</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Business Customers</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Corporate registration documents</li>
                      <li>• Beneficial ownership identification</li>
                      <li>• Business activity verification</li>
                      <li>• Financial statements and records</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Protection & Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Keys Pay is committed to protecting customer data in accordance with UAE data protection laws and international privacy standards.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Data Protection Measures:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>End-to-end encryption of sensitive data</li>
                    <li>Secure data storage and transmission protocols</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Regular security audits and penetration testing</li>
                    <li>Data minimization and retention policies</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Virtual Asset Compliance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  As a platform dealing with virtual assets, Keys Pay adheres to VARA regulations and international cryptocurrency compliance standards.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Virtual Asset Controls:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>VARA licensing and regulatory compliance</li>
                    <li>Blockchain transaction monitoring</li>
                    <li>Travel Rule implementation for transfers</li>
                    <li>Sanctions screening and compliance</li>
                    <li>Cold storage security measures</li>
                    <li>Regular compliance reporting to authorities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Keys Pay maintains a comprehensive risk management framework to identify, assess, and mitigate operational and compliance risks.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Risk Assessment</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Customer risk profiling</li>
                      <li>• Transaction risk scoring</li>
                      <li>• Geographic risk analysis</li>
                      <li>• Product and service risk evaluation</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Risk Mitigation</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Transaction limits and controls</li>
                      <li>• Enhanced monitoring systems</li>
                      <li>• Regular policy updates</li>
                      <li>• Staff training and awareness</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audit & Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Keys Pay undergoes regular internal and external audits to ensure ongoing compliance with all applicable regulations and standards.
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Compliance Monitoring:</h4>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Independent compliance audits</li>
                    <li>Regular regulatory reporting</li>
                    <li>Internal compliance monitoring</li>
                    <li>Third-party security assessments</li>
                    <li>Continuous improvement programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Compliance Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                For compliance-related inquiries or to report compliance concerns:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>📧 <span className="font-medium">Email:</span> compliance@aikeys.ai</p>
                <p>📧 <span className="font-medium">AML Officer:</span> aml@aikeys.ai</p>
                <p>📍 <span className="font-medium">Address:</span> Dubai, United Arab Emirates</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}