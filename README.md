# ITEPADS Platform (Flask + React + MariaDB)

## 🔹 Project Description 🔹

ITEPADS (Initiative for Transparent Empowerment and Positive Action for Displaced Societies) is a platform designed to enable ITEPADS to manage its operations, collaborate with stakeholders, track its humanitarian interventions, and provide visibility and oversight for both donors and community members.

This platform includes:
- An API powered by **Flask** (Python) for retrieving and adding information.
- A **React** application for accessing the platform through a convenient web browser.
- A **MariaDB** relational database for safely storing data.
- **phpMyAdmin** for convenient database administration.

---

## 🔹 Our Mission 🔹

ITEPADS strives for a **just society where no one is left behind**. We collaborate directly with vulnerable and displaced communities — delivering aid, strengthening livelihoods, improving health and sanitation, and protecting human dignity.

---

## 🔹 Main Features 🔹

✅ **Information Management**:  
Record and track stories of community interventions, health care, water, sanitation, financial aid, and other key initiatives.

✅ **Donations**:  
Allow contributors to make financial donations in support of ITEPADS’ initiatives.

✅ **Contact**:  
Provide a way for community members, stakeholders, journalists, and donors to reach ITEPADS directly with messages, inquiries, or offers of collaboration.

✅ **WASH Report**:  
Create, view, and manage reports related to Water, Sanitation, and Hygiene (WASH) interventions — funding gaps, ongoing actions, number of cases, number of sessions, etc.

---

## 🔹 Stack 🔹

- **Flask** (API — Python)
- **React** (Frontend — JavaScript)
- **MariaDB** (Database)
- **phpMyAdmin** (Database GUI)


---

## 🔹 Database 🔹

The platform’s data is safely kept in **MariaDB**, a relational database.  
phpMyAdmin is used by administrators for convenient database management — adding, updating, retrieving, or analyzing data related to stories, messages, donations, or reports.

---

## 🔹 API Endpoints 🔹

✅ **POST** `/api/stories` — add a new story  
✅ **GET** `/api/stories` — retrieve stories  
✅ **POST** `/api/donations` — add a new donation  
✅ **POST** `/api/contact` — submit a new message  
✅ **POST** `/api/wash_report` — add a new wash report  
✅ **GET** `/api/wash_report` — retrieve wash reports


---

## 🔹 Installation (Flask) 🔹

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export FLASK_APP=backend/app/app.py
flask run
