Z-stash Front: https://github.com/zMyrddin/z-stash-front
Z-stash Back: https://github.com/zMyrddin/z-stash-back




### Purpose
Z-Stash Inventory is made as per request of the faction "Fireflies". This serves to help them and their members in keeping track of where their supplies are stored. These supplies are mainly used for their "runs" where they do a wider search of an area for supplies, clearing, or for scouting. Currently they only have written notes where it is prone to being lost or being stolen by an enemy faction. This web app helps to tackle those hardships and provide an easier way to give their people the right direction.

---

### Functionality / Features

#### MVP:
- CRUD operations for both admin and users.
- Secure user registration / login
- Admin view of all entries
- Simple and covert website to keep it anonymous from other groups.
- Stash details will have stash size, address, contents, and notes.

#### Stretch goal:
- Google map link to the external map or a screenshot of where it is on the map displayed on the page.
- Admin alert for users that failed the login more than 3x

---

### Target Audience
The target audience are specifically the people of "Fireflies" who want to store valuable items/supplies in their routes without having them easily accessible by others or be in fear of losing a piece of paper where the details are stored. This information is vital to each member of the group as a loss of a single one could lead to various traps or unverified looting.

---

### Tech Stack
- ReactJS (Frontend)
- MongoDB (Database)
- ExpressJS (Backend)
- Node.js (Backend)


### Frontend Libraries Used:
- Tailwind
- react-router-dom

### Backend Libraries Used:
- Mongoose
- JWT (Authentication)
- Bcrypt (Password Hashing)
- cors

---

### Application Architecture diagram

![Dataflow Diagram](/docs/AAD%20-%20Z%20Stash%20Inventory%20System.jpeg "AAD")

---


### Dataflow Diagram

Simple Dataflow Diagram - With link to Google Maps API for potential stretch goal.

Legend is in the right side to eliminate white space.

![Simple Architecture Diagram](/docs/Z-Stash%20DFD.jpg "AAD")

---

### Users
This app will mainly have 3 types of users:

- **Intelligence Agent/s**
This is an Admin role where they can CRUD existing entries of "stashes" and Members.  They are part of "Fireflies" specifically tasked with the management of this information.

- **Member: Scout**
These are members of "Fireflies" tasked to find resources for all. Be it ammunition, gear, food, water, or potential encampment areas.

- **Member: Regular**
These are regular members of "Fireflies". These could be a previous farmer, accountant, or whatnot.

---

### **Z-Stash Inventory System User Stories:**

**Intelligence Agent**
1. As an intelligence agent, I want to CRUD entries for my scouts and members such as stash size, address, contents, and any important notes, so that I can efficiently manage and organize the group's resources.
2. As an Intelligence Agent, I want to view a comprehensive list of all Fireflies members, including Scouts and Regular Members, with the ability to update their information, so that I can maintain an up-to-date database and allocate resources effectively
3. As an Intelligence Agent, I want to receive real-time alerts and notifications for any suspicious activities or anomalies in stash entries, ensuring that I can quickly respond to potential security threats and protect the group's resources.

**Scout**
1. As a Scout Member, I want to receive informative stash locations with specific details, enabling me to efficiently locate and gather resources for the group without confusion.
2. As a Scout Member, I want to update the status of a stash entry I've been using, providing information on the current contents, any changes, or potential issues, ensuring accurate information provided to the group as a whole.
3. As a Scout Member, I want the ability to leave comments or notes on stash entries, allowing for communication with other Scouts and Intelligence Agents to share insights or warnings about specific stash locations.

**Regular Member**
1. As a Regular Member, I want to have access to information related to possible locations where there are some supplies available in the event of emergencies or when tasked by leading members.

---

### Wireframes

Discreet Homepage
This will be a Discreet homepage to be inconspicuous. Will just be a generic image potentially with just burgers on the corner (?) for Login

![Homepage](/docs/Homepage.jpg "Homepage wireframe")


Login page will be a pop-up from Homepage:

![Login](/docs/Login.jpg "Login wireframe")

Once Logged in, All users will be able to see stash list:

![Stash List](/docs/Stash%20View.jpg "Stash List View")

Then only Admins or Intelligence Agents will have the user list view which will have the CRUD for user management:

![User List View](/docs/Admin%20base.jpg "User List View")

---

### Trello board screenshots

Honestly it's just a simple Kanban of the things in the pipeline, currently in the works, and done. Notes are added to whatever is needed via comments. This is so because a solo player I would be aware of what needs to be doing and what's steps they are in anyway. The notes are for special things I have thought of during the day like adding stuff to user stories and maybe using a ? as a placeholder for the burgers.

All simplified as well into Requirement numbers.

![Day 1 Trello](/docs/Day%201%20-%20Trello.JPG "First day/phase of the project")
![Day 2 Trello](/docs/Day%202%20-%20Trello.JPG "Second day/phase of the project")
![Day 3 Trello](/docs/Day%203%20-%20Trello.JPG "Third day/phase of the project")

---






