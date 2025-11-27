'use client'

import * as React from 'react'
import { GithubLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export function GithubRepo() {
  return (
    <Link
      href="https://github.com/Coekyun-Dou"
      target="_blank"
      rel="noopener noreferrer nofollow"
      className="text-md group flex flex-row items-center justify-start font-medium transition-all duration-300 hover:text-primary hover:scale-110"
    >
      <GithubLogo size={18} weight="duotone" />
      <span className="sr-only">Github Repo</span>
    </Link>
  )
}
