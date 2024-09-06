'use client'

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, GitBranch, Zap } from "lucide-react"
import Link from "next/link"

export function DarkLandingPage() {
  return (
      <div className="flex flex-col min-h-screen bg-gray-950 text-gray-100">
          <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
              <Link className="flex items-center justify-center" href="#">
                  <GitBranch className="h-6 w-6 text-blue-400" />
                  <span className="ml-2 text-lg font-bold">
                      CICD Boilerplate
                  </span>
              </Link>
              <nav className="ml-auto flex gap-4 sm:gap-6">
                  <Link
                      className="text-sm font-medium hover:text-blue-400 transition-colors"
                      href="#features"
                  >
                      Features
                  </Link>
                  <Link
                      className="text-sm font-medium hover:text-blue-400 transition-colors"
                      href="https://github.com/KIWILmao/ci-cd"
                      rel="noopener noreferrer"
                      target="_blank"
                  >
                      Get Started
                  </Link>
                  <Link
                      className="text-sm font-medium hover:text-blue-400 transition-colors"
                      href="#about"
                  >
                      About
                  </Link>
              </nav>
          </header>
          <main className="flex-1">
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-gray-900 to-gray-950">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center space-y-4 text-center">
                          <div className="space-y-2">
                              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                  Streamline Your CI/CD Pipeline
                              </h1>
                              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                                  Boost your development workflow with our
                                  powerful and easy-to-use CI/CD boilerplate
                                  code.
                              </p>
                          </div>
                          <div className="space-x-4">
                              <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                                  Get Started
                                  <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                              <Button
                                  variant="outline"
                                  className="text-gray-200 border-gray-700 bg-gray-800 transition-colors"
                              >
                                  Learn More
                              </Button>
                          </div>
                      </div>
                  </div>
              </section>
              <section
                  id="features"
                  className="w-full py-12 md:py-24 lg:py-32 bg-gray-900"
              >
                  <div className="container px-4 md:px-6">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                          Key Features
                      </h2>
                      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
                          <div className="flex flex-col items-center space-y-3 text-center">
                              <Code className="h-12 w-12 text-blue-400" />
                              <h3 className="text-xl font-bold text-gray-100">
                                  Easy Setup
                              </h3>
                              <p className="text-sm text-gray-400">
                                  Get your CI/CD pipeline up and running in
                                  minutes with our simple setup process.
                              </p>
                          </div>
                          <div className="flex flex-col items-center space-y-3 text-center">
                              <GitBranch className="h-12 w-12 text-blue-400" />
                              <h3 className="text-xl font-bold text-gray-100">
                                  Multi-Branch Support
                              </h3>
                              <p className="text-sm text-gray-400">
                                  Seamlessly manage multiple branches with
                                  automated testing and deployment.
                              </p>
                          </div>
                          <div className="flex flex-col items-center space-y-3 text-center">
                              <Zap className="h-12 w-12 text-blue-400" />
                              <h3 className="text-xl font-bold text-gray-100">
                                  Fast Performance
                              </h3>
                              <p className="text-sm text-gray-400">
                                  Optimize your workflow with our
                                  high-performance CI/CD tools and integrations.
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
              <section
                  id="get-started"
                  className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-gray-950"
              >
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center space-y-4 text-center">
                          <div className="space-y-2">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                                  Ready to Streamline Your Workflow?
                              </h2>
                              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                  Get started with our CI/CD boilerplate code
                                  today and experience the difference in your
                                  development process.
                              </p>
                          </div>
                          <Button className="bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                              Start Your Free Trial
                          </Button>
                      </div>
                  </div>
              </section>
          </main>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
              <p className="text-xs text-gray-400">
                  © 2023 CICD Boilerplate. All rights reserved.
              </p>
              <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                  <Link
                      className="text-xs hover:text-blue-400 transition-colors"
                      href="#"
                  >
                      Terms of Service
                  </Link>
                  <Link
                      className="text-xs hover:text-blue-400 transition-colors"
                      href="#"
                  >
                      Privacy
                  </Link>
              </nav>
          </footer>
      </div>
  )
}