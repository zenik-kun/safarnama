# SAFARNAMA

Modern travel companion app built with Expo, React Native, Expo Router, NativeWind (Tailwind for RN), and custom font styling. Focused on a clean, fast, “stupid simple” UX for discovering destinations, packages, booking, and sharing hidden gems with the community.

## Features
- Home: Smart recommendations filtered by mood (Beach / Hilly / Cultural / Adventure)
- Packages: Flash deals, curated unexplored & international destinations
- Locations: Detailed destination cards with highlights and quick booking
- Booking: Simple multi-step form to submit a booking request
- Community: View & share hidden travel spots (share form + feed)
- More: App info, social links, and quick navigation

## Tech Stack
- Expo (Managed workflow)
- React Native + Expo Router
- NativeWind (Tailwind classes for styling)
- Expo Fonts & Custom Gabarito family
- Vector Icons (Expo / @expo/vector-icons)

## Prerequisites
Ensure the following are installed before starting:

1. Node.js (LTS recommended). Check:
```bash
node -v
```
2. Git
```bash
git --version
```
3. Expo Go app on your mobile device (Android/iOS). Install from Play Store / App Store.
4. A phone and computer on the same Wi-Fi network (for QR live reloading).

Optional (but useful):
- VS Code
- Android Emulator / iOS Simulator (if you want to run locally without a phone)

## Getting Started
Clone the repository, install dependencies, and start the development server.

```bash
git clone https://github.com/zenik-kun/safarnama.git
cd safarnama
npm install
npx expo start -c
```

What the flags mean:
- `-c` clears Expo cache (good after dependency or config changes).

When the Expo dev tools start you’ll see:
- A QR code in the terminal / browser dev UI.
- Press `s` to toggle the dev server UI if needed.

## Run on Device
1. Open Expo Go on your phone.
2. Scan the QR code shown in your terminal or browser.
3. App bundles, loads, and hot-reloads on save.

## Run on Emulator / Simulator (Optional)
In the Expo dev UI or terminal:
- Press `a` for Android emulator (must have one installed via Android Studio).
- Press `i` for iOS simulator (macOS + Xcode required).

## Project Structure (Key Folders)
```
app/               => Expo Router pages (screens)
	_layout.jsx      => Root stack + status bar handling
	(tabs)/          => Tabbed main sections
	community/       => Community feed & share flow
assets/            => Fonts & images
components/        => (Place reusable UI pieces here)
constants/         => (For future shared constants)
hooks/             => (Custom hooks placeholder)
global.css         => NativeWind Tailwind directives
tailwind.config.js => Styling + primary color + fonts
```

## Primary Color & Design Tokens
Primary brand color is defined in `tailwind.config.js`:
```js
colors: { primary: '#7c3aed' }
```
Use Tailwind classes like `bg-primary`, `text-primary`, `shadow-primary/30` consistently. Avoid hardcoding hex values directly in components unless adding tints.

## Common Scripts
```bash
npx expo start       # Start dev server
npx expo start -c    # Start & clear cache
npx expo doctor      # Diagnose project setup issues
npx expo export      # (If you later add web build / static export)
```

## Environment / Configuration
Currently no runtime environment variables; if you add API keys later prefer `expo.env` or `.env` with `expo-config` plugins. Fonts are loaded in `app/_layout.jsx` and splash screen hidden after fonts are ready.

## Troubleshooting
| Issue | Fix |
|-------|-----|
| Stuck on splash / blank screen | Stop server, run `npx expo start -c` to clear cache. Ensure fonts exist in `assets/fonts`. |
| Device doesn’t connect | Confirm phone & PC on same Wi-Fi, disable VPN, or use Tunnel (press `t` in Expo). |
| Metro bundler errors | Remove lock files, reinstall: `rm -rf node_modules package-lock.json && npm install`. |
| Styles not applying | Verify classes exist in files under paths listed in `tailwind.config.js` `content` array. |
| Icon missing | Check vector icon name matches library (`MaterialIcons`, `Ionicons`, etc.). |

## Performance Tips
- Keep image sizes low (Unsplash URLs already cropped; consider adding width & quality params).
- Avoid unnecessary large videos (removed heavy video hero for simplicity).
- Use fewer deep shadows to reduce layout cost on older devices.

## Contributing
1. Fork & clone.
2. Create branch: `git checkout -b feat/your-feature`.
3. Commit: `git commit -m "feat: add X"`.
4. Push & open PR.

Follow design consistency: use `primary` color token and existing font families. Place shared logic/components in `components/`.

## Roadmap Ideas
- Persist user data (bookings, saved places) via AsyncStorage or backend.
- Image upload for community posts.
- Authentication (Expo AuthSession / Firebase Auth).
- Light/Dark mode switch using NativeWind variants.
- Offline caching for destination data.

## License
Currently unpublished license — assume All Rights Reserved unless updated.

## Quick Start (Copy/Paste)
```bash
git clone https://github.com/zenik-kun/safarnama.git
cd safarnama
npm install
npx expo start -c
```
Scan QR with Expo Go and enjoy.

---
Happy travels! ✈️
