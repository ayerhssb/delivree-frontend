# Delivree Frontend

Welcome to the frontend application for **Delivree**, a food delivery and logistics platform. This application provides real-time order tracking, seamless checkout experiences, and intuitive interfaces for users, riders, and restaurants.

## Tech Stack

The frontend is built with modern web technologies:

- **Core Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Data Fetching API**: [Axios](https://axios-http.com/)
- **Maps & Routing**: [Leaflet](https://leafletjs.com/) & [React Leaflet](https://react-leaflet.js.org/)
- **Real-time Communication**: [Socket.io Client](https://socket.io/)
- **Payments**: [Stripe](https://stripe.com/) (`@stripe/stripe-js`)
- **Authentication**: Google OAuth (`@react-oauth/google`)

## Screenshots

<div align="center">
  <img src="/image1.png" alt="Customer App Screenshot" width="45%" />
  <img src="/image2.png" alt="Restaurant Dashboard Screenshot" width="45%" />
</div>
<br/>
<div align="center">
  <img src="/image3.png" alt="Live Order Tracking Screenshot" width="45%" />
  <img src="/image4.png" alt="Checkout Screenshot" width="45%" />
</div>

## How to Run Locally

Follow these steps to set up and run the frontend application on your local machine.

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (Node Package Manager)
- The [Delivree Backend Services](link) running locally.

### Installation & Setup

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   - Create a `.env` file in the root of the `frontend` directory.
   - Configure necessary keys:
   ```env
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_INTERNAL_SERVICE_KEY=your_internal_service_key

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open the App**:
   - Open your browser and navigate to the local server URL provided in the terminal (usually `http://localhost:5173`).


## Running the Full Fullstack Application

To get the entire Delivree platform working locally, you need to start the frontend alongside all 6 backend microservices.

**Step 1. Clone & Set Up Backend Services**
Ensure you have cloned the [Backend Services Repository](link)

**Step 2. Start the 6 Backend Services**
Open separate terminal windows for each service, navigate to their respective directories, install dependencies, and start them:

```bash
# Terminal 1 - Auth Service
cd services/auth
npm install && npm run dev

# Terminal 2 - Admin Service
cd services/admin
npm install && npm run dev

# Terminal 3 - Realtime Service
cd services/realtime
npm install && npm run dev

# Terminal 4 - Restaurant Service
cd services/restaurant
npm install && npm run dev

# Terminal 5 - Rider Service
cd services/rider
npm install && npm run dev

# Terminal 6 - Utils Service
cd services/utils
npm install && npm run dev
```

**Step 3. Start Frontend**
In a 7th terminal window, run the frontend:
```bash
cd frontend
npm install && npm run dev
```

Once all services and the frontend are running, you can fully interact with the Delivree platform locally!
