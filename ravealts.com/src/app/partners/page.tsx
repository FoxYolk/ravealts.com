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
  ChevronDown,
  Star,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Partners() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
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
                    RaveAlts Partners
                  </h1>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 px-4 py-2"
                  title="Home"
                >
                  Home
                </Link>
                <Link
                  href="/media"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 px-4 py-2"
                  title="View Media"
                >
                  Media
                </Link>
                <a
                  href="https://discord.gg/syqY7ZNAKM"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 w-10 h-10"
                  title="Join our Discord"
                >
                  <FaDiscord className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
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
              2025 RaveAlts Partners
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-200">
              Rise Client
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark animate-gradient-x">
                {" "}
                The best Minecraft cheat
              </span>
            </h1>

            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Dominate your opponents with state-of-the-art bypasses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <a
                href="https://riseclient.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl hover:shadow-primary/25 h-11 px-8 py-6 gap-2 group animate-glow"
              >
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Buy Now - $35
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#features"
            className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-colors duration-200 group"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Rise?
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Bypass popular servers like Hypixel, Cubecraft, BlocksMC flawlessly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-slide-in-left">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Zap className="w-6 h-6 text-green-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-green-500 transition-colors">Constant Updates</CardTitle>
                <CardDescription>
                  Regular updates to stay ahead of anticheats
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-fade-in-up animation-delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Globe className="w-6 h-6 text-blue-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-blue-500 transition-colors">All Minecraft Versions</CardTitle>
                <CardDescription>
                  Supports 1.8 to 1.19.4 and beyond
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-slide-in-right">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:animate-pulse">
                  <Shield className="w-6 h-6 text-purple-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-purple-500 transition-colors">State-of-the-art Bypasses</CardTitle>
                <CardDescription>
                  Advanced bypass technology for major servers
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-muted">
              Rise client has been in the market since 2019
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card text-center animate-scale-in">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Users className="w-6 h-6 text-primary group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-primary transition-colors">15,000+ users</CardTitle>
                <CardDescription>
                  Satisfied customers over 4 years
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card text-center animate-scale-in animation-delay-200">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Zap className="w-6 h-6 text-green-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-green-500 transition-colors">99.9% uptime</CardTitle>
                <CardDescription>
                  Reliable platform performance
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card text-center animate-scale-in animation-delay-400">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4 mx-auto group-hover:animate-pulse">
                  <Star className="w-6 h-6 text-yellow-500 group-hover:animate-bounce" />
                </div>
                <CardTitle className="group-hover:text-yellow-500 transition-colors">90% positive feedback</CardTitle>
                <CardDescription>
                  Happy customers worldwide
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary-dark/10 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 w-32 h-32 bg-primary/5 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-primary-dark/5 rounded-full animate-float animation-delay-2000"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
                Ready to Dominate?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Join 15,000+ satisfied customers and get Rise for just $35
              </p>
              <a
                href="https://riseclient.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl hover:shadow-primary/25 h-11 px-8 py-6 gap-2 group animate-glow animate-fade-in-up animation-delay-400"
              >
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Buy Rise Now - $29
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted">
            <p>&copy; riseclient.com - All rights reserved. Designed by &quot;wqnder.&quot; and Developed by ryuzaki911.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
