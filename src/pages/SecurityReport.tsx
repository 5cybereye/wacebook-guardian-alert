
import { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const SecurityReport = () => {
  useEffect(() => {
    // Update page title for Facebook theme
    document.title = 'Facebook Security - Report Submitted';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Facebook Header */}
      <div className="bg-blue-600 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-white">facebook</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-20">
        <Card className="w-full max-w-2xl shadow-lg border-gray-200">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Security Report Submitted Successfully
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Thank you for contacting Facebook Security. We take security concerns 
                seriously and are committed to protecting our users from potential 
                threats and unauthorized access attempts.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-6">
                <h3 className="font-semibold text-blue-800 mb-2">What happens next?</h3>
                <ul className="text-sm text-blue-700 space-y-1 text-left">
                  <li>• Our security team will review your report within 24-48 hours</li>
                  <li>• You may receive follow-up questions via email</li>
                  <li>• We'll notify you once the investigation is complete</li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Report ID: SR-{Date.now().toString().slice(-8)}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  For urgent security matters, please contact us immediately through 
                  our official channels.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="/"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition-colors duration-200"
              >
                Return to Facebook
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 border-t border-gray-200 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600">
          <p>© 2025 Meta Platforms, Inc.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="hover:text-blue-600">Terms of Service</a>
            <a href="#" className="hover:text-blue-600">Help Center</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityReport;
