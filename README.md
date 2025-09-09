<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# above all give again propely Readme.md

Here is a properly formatted README.md content for the City Pulse application incorporating the corrections and clear explanations:

```markdown
# City Pulse - Event Discovery App

City Pulse is a modern event discovery application that helps users find, save, and manage events in their city with ease. The app features secure authentication, event browsing by name, favorite event management, and interactive maps.

---

## 🚀 Live Demo

Check out the live application: [https://city-pulse-m866.onrender.com](https://city-pulse-m866.onrender.com)

---

## 📱 Application Features

1. **Authentication System**  
   - Sign Up/Login with email and password  
   - Simulated biometric authentication for demo  
   - Secure user profiles using Firebase Authentication  

2. **Event Discovery**  
   - Browse featured events on the home page  
   - Search events by **event name** only  
   - Click events to view detailed information  
   - Add events to favorites with one click  

3. **Favorites Management**  
   - Save favorite events easily  
   - View all favorites in your profile  
   - Persistent storage synced via Firebase  

4. **User Profiles**  
   - Edit profile info (name, photo URL)  
   - Manage biometric authentication settings  
   - View and manage favorite events  

5. **Event Details**  
   - Comprehensive details including date, venue, and pricing  
   - Interactive maps with Google Maps integration  

---

## 🛠️ Technology Stack

- Frontend: React.js with React Router  
- Authentication: Firebase Auth  
- Database: Firebase Firestore  
- Events API: Ticketmaster Discovery API  
- Maps: Google Maps API  
- Styling: CSS3 with responsive design  
- Icons: Font Awesome  
- State Management: React Context API  

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v14 or higher)  
- npm or yarn package manager  
- Firebase account  
- Ticketmaster API key  

### Quick Start

1. **Clone the repository**  
```

git clone https://github.com/yourusername/city-pulse-app.git
cd city-pulse-app

```

2. **Install dependencies**  
```

npm install

```

3. **Set up environment variables**  
Create a `.env` file in the root directory and add the following replacing with your own keys:  
```

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_TICKETMASTER_API_KEY=your_ticketmaster_api_key
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key

```

4. **Start the development server**  
```

npm run dev

```

5. **Open your browser**  
Navigate to [http://localhost:5173](http://localhost:5173)

---

## 🎯 Usage Guide

### For Users

- Sign up for a new account or login with existing credentials  
- Browse events on the home page  
- Use the search bar to find events **by event name**  
- Click the heart icon to add events to your favorites  
- Visit your profile to manage favorites and update your info  
- Enable or disable biometric login from profile settings  

### For Developers

- State management is handled using React Context  
- Custom hooks available for favorites and biometric authentication  
- Environment variables are used for API keys and config  
- Error boundaries provide graceful runtime error handling  

---

## 📖 Page Overview

### Sign Up / Login Page

- Enter email, password, and optional display name  
- Use secure Firebase authentication  
- Supports login with email/password or simulated biometric login  

### Home Page - Event Discovery

- Browse featured events displayed on the main page  
- Search for events by their **event name** only  
- Click event cards for full details  
- Add to favorites with a heart icon  

### Event Details Page

- View detailed info including date, time, venue, and pricing  
- Interactive map shows event location  
- Add/remove from favorites  

### Map View

- Interactive Google Map with event location pins  
- Zoom and directions available  
- Venue details overlay  

### Profile Page

- View and edit personal info (name, photo URL)  
- Manage favorites list  
- Enable/disable biometric login  
- Secure logout  

### Favorites Management

- View all favorite events in one place  
- Remove favorites easily  
- Favorites persist across sessions  

### Biometric Authentication (Simulated)

- Enable biometric login toggle in profile  
- Use simulated fingerprint/face ID on login  
- Disable anytime  

---

## 🔒 Security Notes

- Passwords securely hashed by Firebase Auth  
- API keys stored in environment variables  
- No sensitive info stored in localStorage  
- All API calls use HTTPS  

---

## 🤝 Contributing

- Fork the repository  
- Create a feature branch (`git checkout -b feature/AmazingFeature`)  
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)  
- Push to branch (`git push origin feature/AmazingFeature`)  
- Open a Pull Request  

---

## 📞 Support

- For questions or issues, email: support@citypulse.app  
- Or create a GitHub issue: [Create an issue](https://github.com/yourusername/city-pulse-app/issues)  

---

## 🔖 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Thank you for using City Pulse! Enjoy discovering your city's events with ease.
```

This README covers installation, setup, usage, and page explanations with the correction that the search is by event name only and there is no pagination feature. It also summarizes the main features and technical stack cleanly for users and developers.

