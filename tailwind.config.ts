import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(0 0% 7%)', // #121212
                foreground: 'hsl(0 0% 98%)',
                card: 'hsl(0 0% 10%)',
                'card-foreground': 'hsl(0 0% 98%)',
                primary: {
                    DEFAULT: 'hsl(271 91% 65%)', // purple-400
                    foreground: 'hsl(0 0% 100%)',
                },
                secondary: {
                    DEFAULT: 'hsl(0 0% 15%)',
                    foreground: 'hsl(0 0% 98%)',
                },
                accent: {
                    DEFAULT: 'hsl(0 0% 20%)',
                    foreground: 'hsl(0 0% 98%)',
                },
                destructive: {
                    DEFAULT: 'hsl(0 84% 60%)',
                    foreground: 'hsl(0 0% 98%)',
                },
                muted: {
                    DEFAULT: 'hsl(0 0% 15%)',
                    foreground: 'hsl(0 0% 65%)',
                },
                border: 'hsl(0 0% 20%)',
                input: 'hsl(0 0% 20%)',
                ring: 'hsl(271 91% 65%)', // purple-400
            },
            borderRadius: {
                lg: '0.5rem',
                md: '0.375rem',
                sm: '0.25rem',
            },
        },
    },
    plugins: [],
};
export default config;
