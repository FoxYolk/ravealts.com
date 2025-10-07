import Image from "next/image";
import { FaDiscord } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Users,
  ShoppingCart,
  Crown,
  Lock,
  Clock,
  ChevronDown,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Pill Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4">
        <div className="bg-card/70 backdrop-blur-xl border border-border/30 rounded-full shadow-2xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300">
          <div className="px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div>
                  <Image
                    src="/favicon.ico"
                    alt="RaveAlts Logo"
                    width={128}
                    height={128}
                    className="w-8 h-8 rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">
                    RaveAlts
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="/media"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 px-4 py-2"
                  title="View Media"
                >
                  Media
                </a>
                <a
                  href="/partners"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 px-4 py-2"
                  title="View Partners"
                >
                  Partners
                </a>
                <a
                  href="https://discord.gg/syqY7ZNAKM"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 w-10 h-10"
                  title="Join our Discord"
                >
                  <FaDiscord className="w-5 h-5" />
                </a>
                <a
                  href="https://rave.sellhub.cx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 shadow-lg shadow-primary/25 h-9 px-4 py-2 gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Shop Now
                </a>
                
                {/* Hidden Fallback Store */}
                <div className="relative group">
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/40 group-hover:bg-primary/60 transition-colors duration-200 cursor-pointer border border-border/20" title="Hover for fallback store"></div>
                  <div className="absolute right-0 top-0 transform translate-x-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto z-50">
                    <a
                      href="https://rave.mysellauth.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-xs font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-border/50 bg-background/95 backdrop-blur-sm hover:bg-secondary/50 text-muted hover:text-foreground shadow-xl h-8 px-3 gap-1 min-w-fit"
                      title="Fallback store"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      Alt Store
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-dark/5" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-primary-dark/10 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-primary-dark/40 rounded-full animate-float animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float animation-delay-2000"></div>
          <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-primary-dark/30 rounded-full animate-float animation-delay-3000"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
              <Crown className="w-4 h-4 animate-pulse" />
              Premium Minecraft Accounts - Only $0.08 Each!
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-200">
              Level Up Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark animate-gradient-x">
                {" "}
                Minecraft
              </span>
              <br />
              Experience
            </h1>

            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Get instant access to premium Minecraft accounts with full access
              to all features. Secure, reliable, and ready to use.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <a
                href="https://rave.sellhub.cx/product/c/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl hover:shadow-primary/25 h-11 px-8 py-6 gap-2 group animate-glow"
                title="Having issues? Try our backup store at rave.mysellauth.com"
              >
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Purchase Credits
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-secondary hover:scale-105 hover:shadow-lg h-11 px-8 py-6 gap-2 group"
              >
                <span className="group-hover:animate-pulse">Learn More</span>
              </a>
            </div>
            
          </div>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#features"
            className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-medium group-hover:scale-110 transition-transform">Scroll Down</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 group-hover:animate-pulse transition-all duration-300" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose RaveAlts?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Experience the best Minecraft accounts with unmatched quality and
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Shield className="w-6 h-6 text-primary group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">100% Secure</CardTitle>
                <CardDescription>
                  All accounts are verified and secure with full access to
                  Minecraft features
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in animation-delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Zap className="w-6 h-6 text-green-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-green-500 transition-colors">Instant Delivery</CardTitle>
                <CardDescription>
                  Get your accounts immediately after purchase - no waiting
                  required
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in animation-delay-400">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Users className="w-6 h-6 text-blue-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-blue-500 transition-colors">24/7 Support</CardTitle>
                <CardDescription>
                  Our dedicated support team is always ready to help you
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in animation-delay-600">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Crown className="w-6 h-6 text-purple-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-purple-500 transition-colors">Premium Quality</CardTitle>
                <CardDescription>
                  Only the highest quality accounts with full Minecraft access
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in animation-delay-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Lock className="w-6 h-6 text-orange-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-orange-500 transition-colors">Warranty</CardTitle>
                <CardDescription>
                  All accounts come with warranty protection for your peace of
                  mind
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-scale-in animation-delay-1000">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Clock className="w-6 h-6 text-pink-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-pink-500 transition-colors">Always Available</CardTitle>
                <CardDescription>
                  Large stock available 24/7 - never run out of accounts
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary-dark/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-dark/5 rounded-full animate-float animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Join thousands of satisfied customers and get your premium
                Minecraft accounts today
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
                <a
                  href="https://rave.sellhub.cx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl hover:shadow-primary/25 h-11 px-8 py-6 gap-2 group animate-glow"
                  title="Having issues? Try our backup store at rave.mysellauth.com"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                  Purchase Credits
                </a>
                <a
                  href="https://discord.gg/syqY7ZNAKM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-secondary hover:scale-105 hover:shadow-lg h-11 px-8 py-6 gap-2 group"
                >
                  <FaDiscord className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="group-hover:animate-pulse">Discord</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className=" text-center text-sm text-muted">
              <p>&copy; 2025 RaveAlts. All rights reserved. Site developed by <a href="https://github.com/venqoi" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark transition-colors duration-200 hover:underline">venqoi</a> and ravealts.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
