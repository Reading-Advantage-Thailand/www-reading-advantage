# Reading Advantage

A comprehensive educational platform offering various learning solutions including Reading Advantage, Math Advantage, Science Advantage, STEM Advantage, and more.

## Project Structure

This repository contains two versions of the website:

### Static HTML Version (Root Directory)

- HTML files for each page (`index.html`, `about.html`, etc.)
- Components in `/components`
- Styles in `/css`
- JavaScript in `/js`
- Images in `/images`

### Next.js Version (`/www-reading-advantage-next`)

- Modern React-based implementation
- TypeScript support
- Tailwind CSS for styling
- Component-based architecture in `/src/components`
- Page routes in `/src/app`

## Technologies Used

### Static Version

- HTML5
- CSS3
- Vanilla JavaScript
- Nginx for deployment

### Next.js Version

- Next.js 14+
- TypeScript
- Tailwind CSS
- React
- Modern component libraries

## Setup Instructions

### Static Version

1. Clone the repository
2. Serve the files using any web server
   ```bash
   # Example using Python's built-in server
   python -m http.server
   ```
   Or configure with the included `nginx.conf`

### Next.js Version

1. Navigate to the Next.js directory
   ```bash
   cd www-reading-advantage-next
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Run development server
   ```bash
   npm run dev
   ```
4. Build for production
   ```bash
   npm run build
   ```

## Features

- Responsive design
- Modern UI/UX
- Educational content delivery
- B2B and B2C solutions
- Interactive learning tools
- Pricing plans
- Product comparisons

## Project Structure

```
├── Static Version (Root)
│   ├── components/
│   ├── css/
│   ├── js/
│   ├── images/
│   └── *.html files
│
└── Next.js Version (/www-reading-advantage-next)
    ├── src/
    │   ├── app/
    │   ├── components/
    │   ├── config/
    │   └── lib/
    ├── public/
    └── package.json
```

## Development

The project is being modernized with a transition from static HTML to Next.js, offering improved performance, better SEO, and enhanced development experience.

## Deployment

- Static version can be deployed using the included Dockerfile and nginx configuration
- Next.js version supports various deployment platforms like Vercel, Netlify, or custom servers
