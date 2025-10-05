import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Play, GamepadIcon, Film, Mic, Users, Mail, ExternalLink, Crown, Zap, Menu, X } from 'lucide-react'
import './App.css'

// Import assets
import logo from './assets/Logo1.png'
import promo1 from './assets/promo1.png'
import promo2 from './assets/promo2.png'
import characterImage from './assets/ChatGPTImageSep10,2025,09_01_53PM.png'
import panel2 from './assets/panel2.png'
import panel5 from './assets/panel5.png'
import promoVideo from './assets/promoVideo1.mp4'
import panelVideo from './assets/panel2.mp4'
import newPromoVideo from './assets/new_promo_video.mp4'

function App() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isNewPromoVideoLoaded, setIsNewPromoVideoLoaded] = useState(false)

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Preload video
    const video = document.createElement('video')
    video.src = promoVideo
    video.onloadeddata = () => setIsVideoLoaded(true)

    const newVideo = document.createElement("video")
    newVideo.src = newPromoVideo
    newVideo.onloadeddata = () => setIsNewPromoVideoLoaded(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const games = [
    {
      title: "Universal Fortune: The Origin of Ent Black",
      description: "A revolutionary playable audio comic book that seamlessly blends third-person gameplay with cinematic video panels. Experience storytelling like never before.",
      image: promo1,
      platforms: ["Windows", "Nintendo", "PlayStation", "Xbox"],
      status: "In Development",
      featured: true
    },
    {
      title: "Children's Adventure Series",
      description: "Fun, educational games designed to spark imagination and learning in young minds.",
      image: panel5,
      platforms: ["Mobile", "PC"],
      status: "Available"
    },
    {
      title: "Puzzle Collection",
      description: "Mind-bending puzzles that challenge players with innovative mechanics and beautiful visuals.",
      image: panel2,
      platforms: ["Mobile", "PC", "Console"],
      status: "Available"
    },
    {
      title: "Horror Experiences",
      description: "Spine-chilling horror games that push the boundaries of fear and suspense.",
      image: promo2,
      platforms: ["PC", "Console"],
      status: "Coming Soon"
    }
  ]

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Motion Capture Studio",
      description: "Professional mocap services for games, films, and digital content creation."
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Commercial Production",
      description: "High-quality commercial and promotional video production services."
    },
    {
      icon: <GamepadIcon className="w-8 h-8" />,
      title: "Animation Services",
      description: "2D and 3D animation for games, commercials, and entertainment media."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Development Contracting",
      description: "Expert game development and digital media consulting services."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Worst Entertainment Team" className="h-12 w-12" />
            <span className="text-xl font-bold gradient-text">WET</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('games')} className="hover:text-primary transition-colors">Games</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Services</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          <Button className="hidden md:flex pulse-animation">
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('games')} className="block w-full text-left hover:text-primary transition-colors">Games</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-primary transition-colors">About</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-primary transition-colors">Contact</button>
              <Button className="w-full pulse-animation">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {isVideoLoaded && (
          <video 
            className="hero-video" 
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src={promoVideo} type="video/mp4" />
          </video>
        )}
        <div className="hero-overlay absolute inset-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="floating mb-8">
            <img src={logo} alt="Worst Entertainment Team" className="h-32 w-32 mx-auto neon-glow" />
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-glow">
            <span className="gradient-text">WORST</span>
          </h1>
          <h2 className="text-2xl md:text-4xl mb-8 text-muted-foreground">
            Entertainment Team
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Redefining Digital Entertainment Through Innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-border">
              <Play className="w-5 h-5 mr-2" />
              Explore Our Universe
            </Button>
            <Button size="lg" variant="outline" className="neon-border">
              <ExternalLink className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Game Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
              This Isn't Just A Comic...
            </h2>
            <p className="text-xl text-muted-foreground">It's An Experience</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={promo1} 
                alt="Universal Fortune" 
                className="w-full rounded-lg neon-border"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Universal Fortune: The Origin of Ent Black</h3>
              <p className="text-lg text-muted-foreground">
                Experience the future of interactive storytelling. Our revolutionary playable audio comic book 
                seamlessly transitions between immersive third-person gameplay and cinematic video panels, 
                creating an entirely new form of entertainment.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Windows", "Nintendo", "PlayStation", "Xbox"].map((platform) => (
                  <Badge key={platform} variant="secondary">{platform}</Badge>
                ))}
              </div>
              <Button className="neon-border">
                <Play className="w-4 h-4 mr-2" />
                Play Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* New Promo Video Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Latest Promo Video</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Get a glimpse into our world with our newest promotional video.
          </p>
          <div className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden neon-border">
            {isNewPromoVideoLoaded && (
              <video
                className="w-full h-auto"
                controls
                playsInline
                src={newPromoVideo}
              />
            )} 
            {!isNewPromoVideoLoaded && (
              <div className="w-full h-96 bg-gray-800 flex items-center justify-center text-muted-foreground">
                Loading video...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Games Portfolio */}
      <section id="games" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Our Games</h2>
            <p className="text-xl text-muted-foreground">From Action to Horror, We Create It All</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <Card key={index} className="game-card">
                <CardHeader className="p-0">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{game.title}</CardTitle>
                  <CardDescription className="mb-4">{game.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {game.platforms.map((platform) => (
                      <Badge key={platform} variant="outline">{platform}</Badge>
                    ))}
                  </div>
                  <Badge 
                    variant={game.status === "Available" ? "default" : "secondary"}
                    className="mb-4"
                  >
                    {game.status}
                  </Badge>
                  <Button className="w-full">
                    <GamepadIcon className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">Our Services</h2>
            <p className="text-xl text-muted-foreground">Beyond Games - Complete Digital Media Solutions</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  <div className="text-primary mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="mb-4">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">About WET</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Worst Entertainment Team isn't just a name - it's a statement. We embrace the unconventional, 
                push boundaries, and create entertainment experiences that defy expectations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                From our groundbreaking playable audio comic books to comprehensive digital media services, 
                we're redefining what entertainment can be in the digital age.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Crown className="w-6 h-6 text-accent" />
                  <span>Innovative Game Development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 text-accent" />
                  <span>Cutting-Edge Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-accent" />
                  <span>Collaborative Approach</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={characterImage} 
                alt="Character Design" 
                className="w-full rounded-lg neon-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to bring your vision to life? Whether you need game development, digital media production, 
            or innovative entertainment solutions, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="neon-border">
              <Mail className="w-5 h-5 mr-2" />
              Start a Project
            </Button>
            <Button size="lg" variant="outline" className="neon-border">
              <Users className="w-5 h-5 mr-2" />
              Join Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img src={logo} alt="Worst Entertainment Team" className="h-8 w-8" />
              <span className="text-lg font-bold gradient-text">Worst Entertainment Team</span>
            </div>
            <p className="text-muted-foreground">
              © 2025 Worst Entertainment Team. Redefining Digital Entertainment.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

