import Image from "next/image";
import { FaDiscord, FaPlay, FaExternalLinkAlt } from "react-icons/fa";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ShoppingCart,
  ChevronDown,
  Video,
  Calendar,
  Eye,
} from "lucide-react";
import Link from "next/link";

export default function Media() {
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
                    RaveAlts Media
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
                  href="/partners"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 text-muted hover:text-primary hover:scale-110 px-4 py-2"
                  title="View Partners"
                >
                  Partners
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
              <Video className="w-4 h-4 animate-pulse" />
              Featured Content
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-200">
              RaveAlts
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark animate-gradient-x">
                {" "}
                Media Center
              </span>
            </h1>

            <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              Watch reviews, tutorials, and showcases from top content creators
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <a
                href="#videos"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 bg-primary text-white hover:bg-primary-dark hover:scale-105 hover:shadow-xl hover:shadow-primary/25 h-11 px-8 py-6 gap-2 group animate-glow"
              >
                <FaPlay className="w-5 h-5 group-hover:animate-bounce" />
                Watch Videos
              </a>
              <a
                href="https://rave.sellhub.cx/product/c/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg text-lg font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 border border-border bg-transparent hover:bg-secondary hover:scale-105 hover:shadow-lg h-11 px-8 py-6 gap-2 group"
                title="Having issues? Try our backup store at rave.mysellauth.com"
              >
                <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                Purchase Credits
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#videos"
            className="flex flex-col items-center gap-2 text-muted hover:text-primary transition-all duration-300 group"
          >
            <span className="text-sm font-medium group-hover:scale-110 transition-transform">Scroll Down</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 group-hover:animate-pulse transition-all duration-300" />
          </a>
        </div>
      </section>

      {/* Videos Section */}
      <section id="videos" className="py-20 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in-up">
              Featured Reviews & Content
            </h2>
            <p className="text-xl text-muted max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              See what content creators are saying about RaveAlts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Authie Video */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-slide-in-left overflow-hidden">
              <div className="relative">
                <div className="aspect-video relative custom-video-container">
                  <iframe
                    src="https://www.youtube.com/embed/vRaKz0oVFn8?start=116&rel=0&modestbranding=1&showinfo=0"
                    title="Authie RaveAlts Review"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <FaPlay className="w-3 h-3 inline mr-1" />
                  YouTube
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">Authie</CardTitle>
                    <CardDescription className="text-sm">Content Creator</CardDescription>
                  </div>
                </div>
                <CardDescription>
                  In-depth review of RaveAlts premium Minecraft accounts and services
                </CardDescription>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Review</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Recent</span>
                  </div>
                </div>
                <a
                  href="https://youtu.be/vRaKz0oVFn8?si=U6rTTuMQDjA5AP04&t=116"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 mt-3 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Watch on YouTube
                </a>
              </CardHeader>
            </Card>

            {/* widget347 Video */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-slide-in-right overflow-hidden">
              <div className="relative">
                <div className="aspect-video relative custom-video-container">
                  <iframe
                    src="https://www.youtube.com/embed/hK6FV43I6nU?start=8&rel=0&modestbranding=1&showinfo=0"
                    title="widget347 RaveAlts Review"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <FaPlay className="w-3 h-3 inline mr-1" />
                  YouTube
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">widget347</CardTitle>
                    <CardDescription className="text-sm">Content Creator</CardDescription>
                  </div>
                </div>
                <CardDescription>
                  Detailed showcase of RaveAlts features and account quality
                </CardDescription>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Showcase</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Recent</span>
                  </div>
                </div>
                <a
                  href="https://youtu.be/hK6FV43I6nU?si=ePfYyTuK1V_JlLJX&t=8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 mt-3 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Watch on YouTube
                </a>
              </CardHeader>
            </Card>

            {/* purrorcode Video */}
            <Card className="border-border/50 hover:border-primary/50 transition-all duration-300 interactive-card animate-fade-in-up animation-delay-400 overflow-hidden lg:col-span-2">
              <div className="relative">
                <div className="aspect-video relative custom-video-container">
                  <iframe
                    src="https://www.youtube.com/embed/APMkF25npoA?start=0&rel=0&modestbranding=1&showinfo=0"
                    title="purrorcode RaveAlts Review"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                  <FaPlay className="w-3 h-3 inline mr-1" />
                  YouTube
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">P</span>
                  </div>
                  <div>
                    <CardTitle className="text-lg">purrorcode</CardTitle>
                    <CardDescription className="text-sm">Content Creator</CardDescription>
                  </div>
                </div>
                <CardDescription>
                  Comprehensive tutorial and review of RaveAlts premium Minecraft accounts
                </CardDescription>
                <div className="flex items-center gap-4 mt-4 text-sm text-muted">
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    <span>Tutorial</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Recent</span>
                  </div>
                </div>
                <a
                  href="https://youtu.be/APMkF25npoA?si=f9HE0fDNJfDeZlgn&t=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-200 mt-3 text-sm font-medium"
                >
                  <FaExternalLinkAlt className="w-3 h-3" />
                  Watch on YouTube
                </a>
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
                Ready to Experience RaveAlts?
              </h2>
              <p className="text-xl text-muted mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
                Join thousands of satisfied customers and get your premium Minecraft accounts today
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
