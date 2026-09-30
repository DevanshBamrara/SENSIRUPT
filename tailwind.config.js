/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        canvas: "#FAF8F5",
        brand: {
          sky: "#2E8BE8",
          skyLight: "#8DBDF0",
          paleSky: "#EBF3FB",
          cloudCream: "#F4EAD5",
          robePink: "#E3A19C",
          blush: "#EBC9B5",
          gold: "#C6A15B",
          ink: "#141414",
          slate: "#3F5F86",
          white: "#FFFFFF",
        },
        gold: {
          DEFAULT: "#C6A15B",
          dark: "#9E7D47",
          light: "#DFC8A8",
          rich: "#C6A15B",
          subtle: "#F4EAD5",
        },
        sky: {
          vibrant: "#2E8BE8",
          light: "#8DBDF0",
          soft: "#EBF3FB",
          deep: "#3F5F86",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Fraunces', 'Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        "float-gentle": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        }
      },
      animation: {
        "float-gentle": "float-gentle 6s ease-in-out infinite",
      },
      boxShadow: {
        'royal': '0 20px 60px -15px rgba(14, 18, 27, 0.07)',
        'royal-hover': '0 30px 70px -10px rgba(14, 18, 27, 0.12)',
        'pill': '0 8px 30px rgba(0, 0, 0, 0.08)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}
