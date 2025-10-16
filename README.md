# EmPathRx 💙👩‍⚕️  
*Emotionally intelligent disease tracking agent with escalation logic and SDG-aligned UX*

---

## 🧠 Overview

**EmPathRx** is a modular health companion designed to track symptoms, log vitals, and respond with emotionally intelligent feedback. Built for emotionally vulnerable users and underserved contexts, it combines condition-specific logic with empathetic fallback and alert escalation.

Whether you're feeling unsure, overwhelmed, or just want to monitor your health, EmPathRx listens, validates, and supports — one step at a time.

---

## ✨ Features

- **Chat-Based Symptom Input + Emotional Response**  
  Conversational interface that detects physical symptoms and emotional tone (e.g. “scared,” “worried”) to offer validating feedback.

- **Condition-Specific State Machines**  
  Uses XState logic for asthma, COPD, heart disease, diabetes, and point-of-care scenarios.

- **Vitals Logging**  
  Tracks oxygen levels, heart rate, temperature, and more.

- **Threshold-Based Alert System**  
  Triggers escalation logic when symptoms persist or vitals worsen.

- **Signal Dispatch (Mocked for Demo)**  
  Simulates alert notifications to caregivers or emergency contacts.

- **Modular Architecture**  
  Clean separation of UI, logic, and state machines for easy extension.

---

## 🧱 Tech Stack

- React Native + Expo
- XState for condition logic
- AsyncStorage / Firebase (optional)
- AWS SNS / Twilio (mocked for demo)
- Emotionally adaptive UX

---

📸 Demo Flow
Due to deployment constraints, the demo runs locally and showcases the chat interface with emotional fallback and condition-specific guidance.

Navigate through:

Select Condition

Log Vitals

Dashboard

Chatbox

AI Response

Watch the emotional tone shift based on input

Simulate alert trigger when escalation thresholds are crossed

The chat interface previewed in the demo reflects real-time emotional UX and symptom interpretation. Signal dispatch and vitals logging are mocked for clarity.

🌍 SDG Alignment
Goal 3: Good Health and Well-being

Goal 5: Gender Equality

Goal 10: Reduced Inequalities

EmPathRx is designed to support users in low-resource settings, especially women and caregivers, with emotionally intelligent health tracking.

👩‍💻 Authors
Built by:

Aisha Sultana — Core Graphic Design & Tech Lead at WE Hub, Computer Science undergrad at Lords Institute of Engineering and Technology, Hackathon finalist | SDG innovator | Emotionally intelligent UX designer

Sameeha Sultana — First-year Computer Science undergrad, Passionate about health tech, logic design, and collaborative problem-solving

🤝 Contributions
This project was co-developed by two sisters with a shared vision for emotionally intelligent, inclusive healthcare tools. All logic, design, and architecture were built collaboratively for the AWS AI Agent Hackathon.

🛡️ Disclaimer
EmPathRx is not a diagnostic tool. It provides supportive feedback and symptom tracking, but is not a substitute for professional medical advice.
