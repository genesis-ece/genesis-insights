import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Linkedin, Github } from "lucide-react"

import {
  ChevronDown,
  ArrowRight,
  PlayCircle,
  Star,
  CheckCircle2,
  TrendingUp,
  Layers,
  Shield,
  Bot,
  BookOpen,
  Globe,
  ShoppingCart,
  Mail,
} from "lucide-react"

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-yellow-300 py-16 text-center">
        <h1 className="text-5xl font-bold mb-4">Genesis Insights</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Market-style intelligence and insights for technology, healthcare, and finance.
          Built to inform, inspire, and empower.
        </p>
        <Button>Get Started</Button>
      </section>

      {/* Solutions Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Solutions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" /> On-Demand
              </CardTitle>
            </CardHeader>
            <CardContent>
              Instant access to market reports, insights, and data visualizations.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layers className="h-5 w-5" /> Consulting
              </CardTitle>
            </CardHeader>
            <CardContent>
              Tailored advice and strategies for growth, resilience, and innovation.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" /> Integrations
              </CardTitle>
            </CardHeader>
            <CardContent>
              Connect insights directly into your workflows and applications.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-gray-50 py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Industries</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Healthcare</CardTitle>
            </CardHeader>
            <CardContent>
              Tracking innovations in patient care, telemedicine, and health equity.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Finance</CardTitle>
            </CardHeader>
            <CardContent>
              Insights into financial services, fintech, and global economic shifts.
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              Trends in AI, cloud, and digital infrastructure shaping the future.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Spotlight</h2>
        <p className="mb-6">
          Explore free articles, downloads, and thought leadership on emerging trends.
        </p>
        <Button asChild>
          <a href="#">See Insights</a>
        </Button>
      </section>

      {/* Store Section */}
      <section className="bg-yellow-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Store</h2>
        <p className="mb-6">
          Browse individual reports with forecasts, market share, and competitor analysis.
        </p>
        <Button asChild>
          <a href="#">Visit Store</a>
        </Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">Genesis Evbenaye</h3>
            <p>Helping you navigate technology, healthcare, and finance with clarity.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> genesisevbenaye@gmail.com
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Follow</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/in/genesisevbenaye/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/genesis-ece"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-gray-300 transition-colors"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>



        </div>
        <p className="text-center text-sm text-gray-500 mt-8">
          © {new Date().getFullYear()} Genesis Insights. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
