import React from 'react';
import { QrCode, Shield, CheckCircle, Smartphone } from 'lucide-react';

const QRVerification: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Business Verification
            </h2>
            <p className="text-xl text-gray-600">
              Scan our QR code to verify our business authenticity and connect with us instantly
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-purple-600 mx-auto rounded-full mt-6"></div>
          </div>

          {/* QR Code Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* QR Code */}
            <div className="flex justify-center">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border-4 border-cream-100">
                <div className="w-64 h-64 bg-gradient-to-br from-teal-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                  {/* QR Code Placeholder */}
                  <div className="text-center">
                    <QrCode className="w-32 h-32 text-gray-400 mx-auto mb-4" />
                    <p className="text-sm text-gray-500">Scan to Connect</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700 mb-2">HAGAMUS CLOTHING & FABRICS</p>
                  <p className="text-xs text-gray-500">WhatsApp Business | Email | Verification</p>
                </div>
              </div>
            </div>

            {/* Information */}
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Verify & Connect
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Use your smartphone to scan our QR code and instantly access our verified business information, 
                  WhatsApp Business chat, and contact details.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-teal-600" />,
                    title: "Business Verification",
                    description: "Confirm our authentic business registration"
                  },
                  {
                    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
                    title: "WhatsApp Business",
                    description: "Direct chat for quick inquiries and orders"
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-green-600" />,
                    title: "Contact Information",
                    description: "Access all our verified contact details"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-cream-50 rounded-lg hover:bg-cream-100 transition-colors duration-300">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email Verification */}
              <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl p-6 border border-cream-200">
                <h4 className="font-semibold text-gray-900 mb-3">Verified Email Addresses:</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">halimagarba@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-gray-700">hagamus@gmail.com</span>
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

export default QRVerification;