# Paras Chem Corporate Platform

This is the official corporate web platform for **Paras Chem India**, a premier chemical importer and distributor.

Built with a modern, highly-performant technology stack to ensure a seamless and architectural user experience.

## Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Mailing:** [Nodemailer](https://nodemailer.com/) (For contact form integration)

---

## ?? Getting Started

Follow these steps to set up the project on your local machine.

### 1. Install Dependencies
First, ensure you have Node.js installed. Then, run the following command to install all required packages:

``bash
npm install
# or
yarn install
# or
pnpm install
``

### 2. Configure Environment Variables
This project uses environment variables for secure operations like sending emails via the contact form. 

1. Duplicate the .env.example file and rename the copy to .env.local.
2. Open .env.local and fill in your actual credentials (e.g., your Gmail App Password).

**Note:** Never commit .env.local to version control. It is already included in the .gitignore.

### 3. Run the Development Server
Start the local development server by running:

``bash
npm run dev
# or
yarn dev
# or
pnpm dev
``

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

*(Troubleshooting: If you get a 'port already in use' error on Windows, you can force-kill the port and start the server using: 
px kill-port 3000; npm run dev)*

## ?? Project Structure
- /src/app - Contains all the Next.js routes and page components.
- /src/components - Reusable UI components (Navbar, Footer, Forms, etc.).
- /src/data - Contains the static data for products, industries, and principals.
- /public - Static assets including logos, background images, and fonts.
