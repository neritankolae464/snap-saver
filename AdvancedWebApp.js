/*
Filename: AdvancedWebApp.js
Content: Advanced Web Application
*/

// Define the WebApp class
class WebApp {
  constructor(name) {
    this.name = name;
    this.pages = [];
    this.currentRoute = null;
    this.defaultRoute = null;
  }

  // Add a new page to the web app
  addPage(page) {
    this.pages.push(page);
  }

  // Set the default route
  setDefaultRoute(route) {
    this.defaultRoute = route;
  }

  // Render the current page
  renderCurrentPage() {
    if (!this.currentRoute) {
      this.currentRoute = this.defaultRoute;
    }

    const page = this.pages.find(page => page.route === this.currentRoute);
    if (!page) {
      console.error("Error: Invalid route!");
      return;
    }

    page.render();
  }
}

// Define the Page class
class Page {
  constructor(title, route) {
    this.title = title;
    this.route = route;
  }

  render() {
    console.log(`Rendering page: ${this.title}`);
  }
}

// Create a new web app
const myWebApp = new WebApp("MyWebApp");

// Create pages
const homePage = new Page("Home", "/");
const aboutPage = new Page("About", "/about");
const contactPage = new Page("Contact", "/contact");

// Add pages to the web app
myWebApp.addPage(homePage);
myWebApp.addPage(aboutPage);
myWebApp.addPage(contactPage);

// Set default route
myWebApp.setDefaultRoute("/");

// Render the current page
myWebApp.renderCurrentPage();