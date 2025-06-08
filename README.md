# FastWise AI - iOS App

A comprehensive fasting tracker and AI coach app built with React, Vite, and Capacitor for iOS.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Xcode 14+ (for iOS development)
- Apple Developer Account (for App Store deployment)
- iOS Simulator or physical iOS device

### Development Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Build the web app:**
```bash
npm run build
```

3. **Add iOS platform:**
```bash
npx cap add ios
```

4. **Sync web assets to iOS:**
```bash
npx cap sync ios
```

5. **Open in Xcode:**
```bash
npx cap open ios
```

## 📱 iOS Development

### Quick Commands

```bash
# Build and sync to iOS
npm run ios:build

# Open Xcode
npm run ios:open

# Build and open (combined)
npm run ios:run
```

### Manual Steps

1. **Sync changes after code updates:**
```bash
npx cap sync ios
```

2. **Copy web assets only:**
```bash
npx cap copy ios
```

3. **Update native dependencies:**
```bash
npx cap update ios
```

## 🔧 Configuration

### App Settings
- **App Name:** FastWise AI
- **Bundle ID:** com.fastwise.app
- **Platform:** iOS 13.0+
- **Orientation:** Portrait (recommended)

### Capacitor Plugins Included
- `@capacitor/app` - App lifecycle and back button handling
- `@capacitor/status-bar` - Status bar styling
- `@capacitor/keyboard` - Keyboard behavior
- `@capacitor/haptics` - Haptic feedback (ready for future use)

## 🏗️ Building for Production

### 1. Prepare the Build
```bash
# Clean build
rm -rf dist ios/App/App/public
npm run build
npx cap sync ios
```

### 2. Configure in Xcode
1. Open the project: `npx cap open ios`
2. Select your development team in **Signing & Capabilities**
3. Update **Bundle Identifier** if needed
4. Configure **App Icons** and **Launch Screen**
5. Set **Deployment Target** to iOS 13.0+

### 3. Build and Test
1. Select a simulator or connected device
2. Click **Build and Run** (⌘+R)
3. Test all functionality thoroughly

## 📦 App Store Deployment

### 1. Prepare for Release
```bash
# Production build
npm run build
npx cap sync ios
```

### 2. Xcode Configuration
1. **Product → Scheme → Edit Scheme**
2. Set **Build Configuration** to **Release**
3. **Product → Archive**
4. Wait for archive to complete

### 3. App Store Connect
1. **Window → Organizer**
2. Select your archive
3. Click **Distribute App**
4. Choose **App Store Connect**
5. Follow the upload wizard

### 4. App Store Connect Portal
1. Go to [App Store Connect](https://appstoreconnect.apple.com)
2. Create new app with Bundle ID: `com.fastwise.app`
3. Fill in app metadata:
   - **Name:** FastWise AI
   - **Category:** Health & Fitness
   - **Description:** AI-powered fasting coach and tracker
4. Upload screenshots (required sizes)
5. Submit for review

### 5. Required Assets
- **App Icon:** 1024x1024px (provided in project)
- **Screenshots:** Various iPhone sizes
- **Privacy Policy:** Required for health apps
- **App Description:** Compelling store listing

## 🔒 Privacy & Permissions

The app currently doesn't require special permissions, but consider adding:
- **Health Kit** (future feature for health data)
- **Notifications** (for fasting reminders)
- **Background App Refresh** (for timer accuracy)

## 🐛 Troubleshooting

### Common Issues

**Build Errors:**
```bash
# Clean everything
rm -rf node_modules dist ios
npm install
npm run build
npx cap add ios
```

**Xcode Signing Issues:**
1. Check Apple Developer Account status
2. Verify Bundle ID is unique
3. Update provisioning profiles

**App Not Loading:**
1. Check `capacitor.config.ts` webDir points to `dist`
2. Ensure `npm run build` completed successfully
3. Verify `npx cap sync ios` ran without errors

### Debug Mode
Enable debug mode in `capacitor.config.ts`:
```typescript
server: {
  url: 'http://localhost:5173', // For live reload during development
  cleartext: true
}
```

## 📱 Features

- ⏱️ **Fasting Timer** - Multiple protocols (16:8, 24h, etc.)
- 🤖 **AI Coach** - Personalized guidance and support
- 📊 **Progress Tracking** - Visual charts and statistics
- 🍽️ **Meal Planning** - Break-fast recommendations
- 📚 **Education Hub** - Safety guidelines and FAQ
- 🌙 **Dark Mode** - Optimized for iOS dark theme
- 📱 **Native Feel** - iOS-specific optimizations

## 🔄 Updates

To update the app after changes:
1. Make your code changes
2. Run `npm run ios:build`
3. Test in Xcode
4. Archive and upload new version to App Store Connect

---

**Built with ❤️ using React, Vite, and Capacitor**