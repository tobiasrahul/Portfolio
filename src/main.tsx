import emailjs from '@emailjs/browser'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

emailjs.init('srrT2P8aytOp63TrG') // Replace with your EmailJS public key

createRoot(document.getElementById("root")!).render(<App />);
