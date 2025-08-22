# Sri Lanka Tourism Website

A beautiful frontend-only tourism website showcasing popular tourist destinations in Sri Lanka. Built with **React** and modern CSS for a responsive, interactive experience.

## 🌟 Features

- **Pure Frontend**: No backend dependencies - runs entirely in the browser
- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Interactive Destinations**: Detailed information about 8 Sri Lankan tourist attractions
- **Contact Form**: Frontend form validation and user feedback
- **Modern UI/UX**: Smooth animations, hover effects, and intuitive navigation
- **Placeholder Images**: Graceful fallback system when images are not available
- **Fast Loading**: Static site that loads quickly without server dependencies

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Induma-Magammana/Tourism_Site.git
   cd Tourism_Site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **View the website**
   - Open http://localhost:3000 in your browser
   - The website runs entirely in the frontend!

## 📁 Project Structure

```
tourism_site/
├── public/
│   ├── images/                 # Image assets (with fallbacks)
│   ├── index.html             # Main HTML file
│   └── ...
├── src/
│   ├── components/            # React components
│   │   ├── Header.js          # Navigation header
│   │   ├── Hero.js            # Hero section
│   │   ├── Destinations.js    # Destinations showcase
│   │   ├── About.js           # About section
│   │   ├── Contact.js         # Contact form
│   │   ├── Footer.js          # Footer
│   │   └── PlaceholderImage.js # Image fallback component
│   ├── App.js                 # Main App component
│   ├── App.css                # Global styles
│   └── index.js               # Entry point
└── package.json               # Dependencies
```

## 🎨 Features Breakdown

### Frontend Components

- **Header**: Responsive navigation with smooth scrolling
- **Hero Section**: Eye-catching introduction with call-to-action
- **Destinations**: Interactive cards with modal popups for detailed information
- **About**: Company information with statistics and feature highlights
- **Contact**: Functional contact form with frontend validation
- **Footer**: Links, contact info, and social media

### Static Data

- **8 Featured Destinations**: All data stored directly in React components
- **No API Calls**: Everything works without internet connection
- **Instant Loading**: No waiting for server responses

## 🛠️ Technologies Used

### Frontend
- **React 19**: Modern React with hooks
- **CSS3**: Custom styling with flexbox and grid
- **Responsive Design**: Mobile-first approach
- **JavaScript ES6+**: Modern JavaScript features

### Deployment
- **Static Hosting**: Can be deployed on Netlify, Vercel, GitHub Pages
- **No Server Required**: Pure frontend application

## 🌐 Destinations Featured

1. **Sigiriya Rock Fortress** - Ancient UNESCO World Heritage Site
2. **Temple of the Tooth** - Sacred Buddhist temple in Kandy
3. **Galle Fort** - Historic Dutch colonial fort
4. **Yala National Park** - Premier wildlife safari destination
5. **Ella Rock** - Scenic hiking destination
6. **Mirissa Beach** - Beautiful beach with whale watching
7. **Polonnaruwa** - Ancient royal capital
8. **Nuwara Eliya** - Tea plantation region

## 🔧 Development

### Adding New Destinations

1. Edit the `places` array in `src/components/Destinations.js`
2. Add corresponding placeholder styling in `src/components/PlaceholderImage.js`
3. The frontend will automatically display new destinations

### Customizing Styles

- Global styles: `src/App.css`
- Component styles: Individual CSS files in `src/components/`
- Placeholder images: Defined in `src/App.css`

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)  
- Desktop (> 1024px)

## � Deployment

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Your site is live!

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vercel automatically builds and deploys
3. Get a free domain!

### Deploy to GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/Tourism_Site"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Run: `npm run deploy`

## 🚧 Future Enhancements

- [ ] Add more destinations
- [ ] Image gallery with lightbox
- [ ] Blog/News section
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] Weather integration
- [ ] Map integration
- [ ] Online booking form
- [ ] Virtual tours

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

- **Email**: info@srilankatours.com
- **GitHub**: [@Induma-Magammana](https://github.com/Induma-Magammana)
- **Project Link**: https://github.com/Induma-Magammana/Tourism_Site

---

**Made with ❤️ for Sri Lanka Tourism** - Pure Frontend Edition