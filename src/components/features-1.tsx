import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AiBrain03Icon, ApiIcon, DashboardSpeed01Icon, DatabaseIcon, ShoppingCart02Icon, WebDesign02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ReactNode } from 'react'

export default function Features() {
    return (
        <section className="bg-zinc-50 py-8 md:py-16 dark:bg-transparent font-mono">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <p className="text-blue-500 select-none">What do I offer</p>
                    <h2 className="mt-8 text-balance text-4xl font-semibold lg:text-5xl select-none">Designing Solutions <span className="text-muted-foreground">Customized to Meet Your Requirements</span></h2>
                </div>
                <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={WebDesign02Icon} />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium select-none text-blue-500">Web & App Development</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm select-none">Crafting responsive, high-performance interfaces using HTML5, CSS3, Tailwind CSS, and modern frameworks like React and Angular, focused on usability, speed, and scalability.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={DatabaseIcon} />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium select-none text-blue-500">Database Management</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="mt-3 text-sm select-none">Designing reliable and efficient data structures with MySQL and PostgreSQL, ensuring secure storage, fast queries, and seamless integration with backend systems.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={ApiIcon} />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium select-none text-blue-500">API Development</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm select-none">Developing scalable and secure APIs with Node.js, Laravel, and Python, enabling smooth data exchange and robust integration between services and platforms.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={DashboardSpeed01Icon} />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium select-none text-blue-500">Performance Optimization</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm select-none">Enhancing speed, responsiveness, and overall performance through advanced code optimization, caching strategies, and resource management best practices.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={ShoppingCart02Icon} />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium select-none text-blue-500">E-commerce Solutions</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm select-none">Building custom e-commerce platforms with optimized user experience, secure payment systems, and features designed to boost conversions and customer retention.</p>
                        </CardContent>
                    </Card>
                    <Card className="group shadow-zinc-950/5">
                        <CardHeader className="pb-3">
                            <CardDecorator>
                            <HugeiconsIcon icon={AiBrain03Icon} />
                            </CardDecorator>

                            <h3 className="mt-6 font-medium select-none text-blue-500">Integrating AI</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="mt-3 text-sm select-none">Implementing intelligent automation and user-focused features using OpenAI and Gemini, including chatbots, content generation, and smart data analysis tools.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
        />
        <div
            aria-hidden
            className="bg-radial to-background absolute inset-0 from-transparent to-75%"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
