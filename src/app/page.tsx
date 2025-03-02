"use client"

import { Carousel } from "@/components/carousel"
import Link from "next/link"

export default function Home() {
  const titles = [
    "Software Engineer",
    "Entrepreneur",
    "Founder",
  ]

  return (
    <section className="mb-20">
      <h1 className="text-3xl mb-6 leading-tight">
        <Carousel items={titles} />
      </h1>

      <div className="space-y-4">
        <p>
          I'm Kyle, a US-based engineer from West Deptford, New Jersey. Currently pursuing my Computer Science
          degree at Rowan University while building software solutions for clients worldwide.
        </p>

        <p>
          I started my career as a freelancer in 2014 and have since contributed to projects with over 15.4
          million downloads. My work spans full-stack development, game infrastructure, and business strategy,
          focusing on creating scalable solutions for real-world problems.
        </p>

        <p>
          Currently, I'm working on <Link href="https://previgil.com">Previgil</Link>, a platform that
          simplifies domain management across various services, and{" "}
          <Link href="https://bans.io">Bans.io</Link>, a multi-game punishment tracking system used by
          gaming communities worldwide.
        </p>
      </div>
    </section>
  )
}