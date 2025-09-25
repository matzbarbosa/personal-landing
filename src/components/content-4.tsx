import { Button } from '@/components/ui/button'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import Link from 'next/link'

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6 font-mono">
            <div className="text-center">
            <p className="text-blue-500 select-none mb-8 select-none">About Me</p>
            </div>
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium text-muted-foreground select-none">Passionate about creating <span className="text-white">innovative</span> solutions.</h2>
                    <div className="space-y-6">
                        <p className="select-none">From a young age, I was surrounded by code — watching my father, a developer, solve real business challenges through software. That early exposure sparked a lasting passion for programming. I initially pursued Computer Science in college but soon shifted to Physics, drawn by its analytical depth and problem-solving nature.</p>
                        <p className="select-none">
                        I started my journey as a developer working closely with my father on real-world projects. This hands-on experience taught me how to build practical and scalable solutions. Today, I specialize in full stack development, using modern technologies to deliver fast, reliable, and impactful digital products.
                        </p>
                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-2 pr-2">
                            <Link href="#">
                                <span className="select-none">Learn More About Me</span>
                                <HugeiconsIcon icon={ArrowRight01Icon} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
