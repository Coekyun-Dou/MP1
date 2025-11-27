"use client"

import Link from 'next/link'
import { email, socialLinks } from '@/config/infoConfig'
import { CustomIcon } from '@/components/shared/CustomIcon'


export default function SocialLinks() {
    return (
        <div>
            <div className="mt-6 flex items-center gap-1">
                {socialLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={link.ariaLabel ?? `Follow on ${link.name}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-110"
                    >
                        <CustomIcon name={link.icon} />
                        <span className="sr-only">{link.name}</span>
                    </Link>
                ))}
            </div>
            <div className="mt-8 border-t border-muted pt-8">
                <Link
                    href={`mailto:${email}`}
                    className="group flex flex-row ml-3 justify-start items-center text-md font-medium transition-all duration-300 hover:text-primary hover:translate-x-2"
                >
                    <CustomIcon name="email" size={22}/>
                    <span className="ml-4">{email}</span>
                </Link>
            </div>
        </div>

    )
}

