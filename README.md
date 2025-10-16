<div align="center">

# Powdermix App

### E-commerce Mobile Application for Pharmaceutical Machinery

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Google Sheets](https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white)](https://www.google.com/sheets/about/)

[Features](#-key-features) • [Technologies](#-tech-stack) • [Installation](#-installation) • [Usage](#-usage) • [Screenshots](#-screenshots) • [Contributing](#-contributing) • [License](#-license)

![Powdermix App - Home Screen](image.png)

</div>

---

## 📖 About The Project

**Powdermix App** is a mobile e-commerce application developed to facilitate the sale of pharmaceutical machinery and equipment used by pharmacies in the manufacturing of medications. The app features a complete shopping experience with product catalog, shopping cart, order history, and purchase management, all integrated into a simple and efficient interface.

### Why Powdermix?

- **Streamlined Purchasing Process**: Simplifies the procurement of pharmaceutical equipment for pharmacy businesses
- **Real-time Product Updates**: Direct synchronization with Google Sheets ensures always up-to-date inventory
- **Mobile-First Approach**: Enables clients to browse and purchase equipment anywhere, anytime
- **Tailored for the Industry**: Specifically designed for pharmaceutical machinery sales with industry-specific features

---

## 🎯 Key Features

- 📋 **Product Catalog**: Browse and explore a comprehensive list of pharmaceutical equipment available for purchase
- 🛒 **Shopping Cart**: Add products to cart and complete orders directly within the app
- 🔄 **Order History**: Track and manage all past orders in an organized, accessible format
- 🔍 **Product Synchronization**: Product information syncs directly from **Google Sheets**, providing flexibility and ease of management
- 💳 **Secure Checkout**: Complete and secure payment processing
- 📱 **Push Notifications**: Receive updates about order status and new products
- 🔐 **User Authentication**: Secure login and user account management
- 📊 **Order Tracking**: Real-time order status updates

---

## 🚀 Tech Stack

### Frontend
- **[React Native](https://reactnative.dev/)**: Cross-platform mobile development framework
- **[Expo](https://expo.dev/)**: Development platform for building React Native applications
- **React Navigation**: Seamless navigation between screens
- **AsyncStorage**: Local data persistence

### Backend
- **[Node.js](https://nodejs.org/)**: JavaScript runtime for server-side development
- **[TypeScript](https://www.typescriptlang.org/)**: Type-safe JavaScript for robust API development
- **Express.js**: Web application framework for Node.js
- **RESTful API**: Clean and scalable API architecture

### Integrations
- **Google Sheets API**: Synchronizes product information directly from spreadsheets, eliminating the need for a traditional database per client preference
- **Firebase**: Authentication and cloud messaging
- **Google Play Services**: App distribution and updates

---

## 📱 Deployment

The application is officially published on the **Google Play Store**, enabling Powdermix customers to make purchases directly from their mobile devices.

[Download on Google Play Store](#) <!-- Add actual link when available -->

---

## 🌟 Highlights

- ✨ **Optimized User Experience**: Intuitive interface designed for smooth and efficient navigation
- ⚡ **No Traditional Database Required**: Direct synchronization via **Google Sheets** provides flexibility and simplicity
- 🛍️ **Complete E-commerce Functionality**: Full-featured shopping experience tailored to pharmaceutical machinery sector
- 📈 **Scalable Architecture**: Built to grow with business needs
- 🔄 **Real-time Updates**: Instant product information synchronization
- 🎨 **Modern UI/UX**: Clean, professional design optimized for mobile devices

---

## 🛠️ Installation

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14.0 or higher)
- **npm** or **yarn** package manager
- **Expo CLI** installed globally:
  ```bash
  npm install -g expo-cli
  ```
- **Git** for version control
- **Android Studio** or **Xcode** for running on emulators (optional)

### Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/powdermix-app.git
   cd powdermix-app
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Environment Variables**

   Create a `.env` file in the root directory:
   ```env
   GOOGLE_SHEETS_API_KEY=your_api_key_here
   FIREBASE_API_KEY=your_firebase_key
   API_BASE_URL=your_backend_url
   ```

4. **Start the Development Server**
   ```bash
   npm start
   # or
   expo start
   ```

5. **Run on Device or Emulator**
   - **iOS**: Press `i` in the terminal or scan QR code with Expo Go app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` to open in browser

---

## 📱 Usage

### For End Users

1. **Download the App**: Get Powdermix from the Google Play Store
2. **Create Account**: Register with your email or sign in with Google
3. **Browse Products**: Explore the pharmaceutical machinery catalog
4. **Add to Cart**: Select items and quantities
5. **Checkout**: Complete your purchase securely
6. **Track Orders**: Monitor your order status in real-time

### For Developers

```bash
# Run tests
npm test

# Build for production
expo build:android
expo build:ios

# Publish updates
expo publish
```


---

## 🏗️ Project Structure

```
powdermix-app/
├── src/
│   ├── components/       # Reusable UI components
│   ├── screens/          # App screens/pages
│   ├── navigation/       # Navigation configuration
│   ├── services/         # API services and integrations
│   ├── utils/            # Helper functions
│   ├── hooks/            # Custom React hooks
│   ├── context/          # React Context providers
│   └── assets/           # Images, fonts, etc.
├── App.tsx               # Root component
├── app.json              # Expo configuration
├── package.json          # Dependencies
└── README.md             # This file
```

---

## 🔑 Key Implementation Details

### Google Sheets Integration

The app uses Google Sheets API to sync product data:

```typescript
// Example: Fetching products from Google Sheets
import { GoogleSheetsService } from './services/GoogleSheetsService';

const products = await GoogleSheetsService.getProducts();
```

### State Management

Uses React Context for global state management:

```typescript
// Cart Context example
const { cart, addToCart, removeFromCart } = useCart();
```

---

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run integration tests
npm run test:integration

# Check code coverage
npm run test:coverage
```

---

## 🚀 Deployment

### Building for Production

**Android:**
```bash
expo build:android -t apk
# or for Play Store
expo build:android -t app-bundle
```

**iOS:**
```bash
expo build:ios -t archive
```

### Publishing Updates (OTA)

```bash
expo publish
```

---

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👨‍💻 Author

**Gabriel Rudrigues Lima**

- LinkedIn: [@gabriel-rudrigues](https://linkedin.com/in/gabriel-rudrigues)
- GitHub: [@seugirdur](https://github.com/seugirdur)
- Email: gabriel.lima137170@gmail.com

---

## 🙏 Acknowledgments

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [Google Sheets API Documentation](https://developers.google.com/sheets/api)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Navigation](https://reactnavigation.org/)

---

## 📞 Support

For support, email gabriel.lima137170@gmail.com or open an issue in this repository.

---

## 🗺️ Roadmap

- [x] Core e-commerce functionality
- [x] Google Sheets integration
- [x] Shopping cart and checkout
- [x] Order history
- [x] Google Play Store release
- [ ] iOS App Store release
- [ ] Multi-language support (Portuguese, English, Spanish)
- [ ] Advanced product filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Admin dashboard for order management
- [ ] Analytics integration
- [ ] Dark mode support

---

<div align="center">

**⭐ If you find this project useful, please consider giving it a star!**

Made with ❤️ by [Gabriel Rudrigues Lima](https://github.com/seugirdur)

</div
