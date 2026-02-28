
# CLUB OF PROGRAMMERS (COPS) - Official Website

<p align="center">
  <img src="public/copslogo.png" alt="COPS Logo" width="200"/>
</p>

Welcome to the official website repository for **CLUB OF PROGRAMMERS (COPS)** at C Byregowda Institute of Technology! 🚀

## 🌟 About COPS

COPS is a student-led programming community focused on:
- **Learning Together** - Building confident programmers through collaborative projects
- **Innovation** - Exploring cutting-edge technologies and real-world applications
- **Community** - Creating a supportive environment for all skill levels
- **Growth** - Organizing workshops, hackathons, and networking events

### 🎯 Our Mission
*"Building Confident Programmers Together"* - Empowering students to excel in programming through hands-on experience, mentorship, and community support.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/CLUB-OF-PROGRAMMERS-COPS/cops-website.git
   cd cops-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### 📧 Form Setup (For Membership Applications)

The website includes a membership application form that sends submissions via email. To set it up:

1. **Create a Formspree account** at [formspree.io](https://formspree.io)
2. **Create a new form** and copy the form ID
3. **Update the `.env` file:**
   ```env
   VITE_FORMSPREE_FORM_ID=your-form-id-here
   ```
4. **Restart the development server**

See `FORM_SETUP_GUIDE.md` for detailed instructions.

## 📁 Project Structure

```
cops-website/
├── public/                    # Static assets
│   ├── copslogo.png          # Club logo
│   ├── favicon.ico           # Browser favicon
│   └── COPS/                 # Club-specific images
├── src/
│   ├── app/
│   │   ├── components/       # React components
│   │   │   ├── Contact.tsx   # Membership application form
│   │   │   ├── Events.tsx    # Upcoming events showcase
│   │   │   ├── Footer.tsx    # Site footer with links
│   │   │   ├── Gallery.tsx   # Photo gallery
│   │   │   ├── Hero.tsx      # Landing section
│   │   │   ├── Navbar.tsx    # Navigation bar
│   │   │   ├── Team.tsx      # Leadership team
│   │   │   └── figma/        # Reusable UI components
│   │   └── App.tsx           # Main app component
│   ├── styles/               # CSS and styling
│   └── main.tsx              # App entry point
├── .env                      # Environment variables (not committed)
├── .gitignore               # Git ignore rules
├── FORM_SETUP_GUIDE.md      # Form configuration guide
├── package.json             # Dependencies and scripts
├── vite.config.ts           # Vite configuration
└── README.md               # This file
```

## 🛠️ Technologies Used

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI (shadcn/ui)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Form Handling:** Formspree (for production)
- **Deployment:** Ready for Vercel, Netlify, or any static hosting

## 🤝 How to Contribute

### For All Club Members

**You don't need to be a coding expert to contribute!** We welcome all types of contributions:

#### 📝 Content Updates
- Update team member information in `src/app/components/Team.tsx`
- Add new events in `src/app/components/Events.tsx`
- Modify text content, descriptions, and messaging
- Update contact information and social media links

#### 🎨 Design Changes
- Modify colors, fonts, and layouts in the component files
- Update images and graphics in the `public/` folder
- Adjust responsive design breakpoints

#### 🚀 Feature Additions
- Add new sections or components
- Implement new functionality
- Improve user experience

### For Developers

1. **Fork the repository**
2. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test thoroughly:**
   ```bash
   npm run dev
   ```
5. **Commit your changes:**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
6. **Push to your branch:**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### 📋 Contribution Guidelines

- **Keep it simple** - Start with small changes if you're new
- **Test your changes** - Make sure the website still works
- **Use meaningful commit messages** - Explain what you changed and why
- **Ask for help** - Reach out to the tech team if you need assistance
- **Document your changes** - Update this README if you add new features

## 🎯 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 Deployment

The website is ready to deploy to any static hosting service:

### Recommended Platforms:
- **Vercel** (Recommended for React apps)
- **Netlify** (Great for forms and static sites)
- **GitHub Pages** (Free for public repositories)

### Deployment Steps:
1. **Build the project:** `npm run build`
2. **Deploy the `dist/` folder** to your hosting platform
3. **Configure environment variables** in your hosting platform's settings

## 📞 Contact & Support

### Club Leadership
- **Email:** clubofprogrammerscops@gmail.com
- **LinkedIn:** [Club of Programmers COPS](https://linkedin.com/company/club-of-programmers-cops)

### Tech Support
- **GitHub Issues:** Report bugs or request features
- **Tech Lead:** Reach out to the current tech lead for development support

## 📜 Code of Conduct

- **Be respectful** - Everyone is welcome regardless of experience level
- **Help others** - Share your knowledge and support fellow members
- **Keep it professional** - This is our club's public face
- **Have fun** - Learning and building together should be enjoyable!

## 🙏 Acknowledgments

- **Original Design:** Figma community template
- **Icons:** Lucide React
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Form Service:** Formspree

## 📄 License

This project is maintained by CLUB OF PROGRAMMERS (COPS) and is available for educational and club purposes.

---

**Made with ❤️ by CLUB OF PROGRAMMERS (COPS)**

*Remember: Every great programmer started somewhere. Your contribution, no matter how small, makes a difference! 🌟*
  #
