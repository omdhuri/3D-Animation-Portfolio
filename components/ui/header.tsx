'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
    const [open, setOpen] = React.useState(false);
    const scrolled = useScroll(10);

    const links = [
        {
            label: 'Work',
            href: '#work',
        },
        {
            label: 'About',
            href: '#about',
        },
        {
            label: 'Contact',
            href: '#contact',
        },
    ];

    React.useEffect(() => {
        if (open) {
            // Disable scroll
            document.body.style.overflow = 'hidden';
        } else {
            // Re-enable scroll
            document.body.style.overflow = '';
        }

        // Cleanup when component unmounts
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <header
            className={cn(
                'sticky top-0 z-50 mx-auto w-full max-w-5xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
                {
                    'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-4xl md:shadow':
                        scrolled && !open,
                    'bg-background/90': open,
                },
            )}
        >
            <nav
                className={cn(
                    'flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out',
                    {
                        'md:px-2': scrolled,
                    },
                )}
            >
                {/* Logo / Wordmark */}
                <a href="#" className="flex items-center gap-2">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 via-purple-400/15 to-blue-500/15 rounded-lg blur-md" />
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-purple-300 to-blue-400 rounded-lg p-[1px]">
                            <div className="w-full h-full bg-black rounded-lg" />
                        </div>
                        <span className="relative text-sm font-bold bg-gradient-to-br from-purple-200 via-purple-100 to-blue-200 text-transparent bg-clip-text" style={{ fontFamily: 'Space Grotesk, monospace' }}>
                            OD
                        </span>
                    </div>
                    <span className="hidden sm:block text-sm font-semibold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        Om Dhuri
                    </span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-2 md:flex">
                    {links.map((link, i) => (
                        <a
                            key={i}
                            className={buttonVariants({ variant: 'ghost' })}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <Button asChild>
                        <a href="mailto:omdhuri@example.com">Let's Talk</a>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <Button size="icon" variant="outline" onClick={() => setOpen(!open)} className="md:hidden">
                    <MenuToggleIcon open={open} className="size-5" duration={300} />
                </Button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
                    open ? 'block' : 'hidden',
                )}
            >
                <div
                    data-slot={open ? 'open' : 'closed'}
                    className={cn(
                        'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
                        'flex h-full w-full flex-col justify-between gap-y-2 p-4',
                    )}
                >
                    <div className="grid gap-y-2">
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className={buttonVariants({
                                    variant: 'ghost',
                                    className: 'justify-start',
                                })}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button className="w-full" asChild>
                            <a href="mailto:omdhuri@example.com">Let's Talk</a>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
