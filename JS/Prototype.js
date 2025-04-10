// Prototype: It is the mechanism that allows objects to inherit features (properties and methods) from other objects.

const roadmap = {
  getRoadmapUrl() {
    console.log(`https://roadmap.sh/${this.slug}`);
  },
};

const javascript = {
  name: "JavaScript Roadmap",
  description: "Learn JavaScript",
  slug: "javascript",
  greet() {
    console.log(`${this.name} - ${this.description}`);
  },
};

Object.setPrototypeOf(javascript, roadmap); // or javascript.__proto__ = roadmap;

javascript.getRoadmapUrl(); // https://roadmap.sh/javascript
javascript.greet(); // JavaScript Roadmap - Learn JavaScript

// Inheritance: Inheritance is a way to create a new Class from an existing Class.
// The new Class inherits all the properties and methods from the existing Class. The new Class is called the child Class, and the existing Class is called the parent Class.

// This is a class named "RoadMap".
class RoadMap {
    // Constructor method of the "RoadMap" class.
    constructor(name, description, slug) {
      // Properties defined for instances of the "RoadMap" class.
      this.name = name;
      this.description = description;
      this.slug = slug;
    }
  
    // Method of the "RoadMap" class to get the roadmap URL.
    getRoadmapUrl() {
      console.log(`https://roadmap.sh/${this.slug}`);
    }
  }
  
  // This is a class named "JavaScript" that extends the "RoadMap" class.
  class JavaScript extends RoadMap {
    // Constructor method of the "JavaScript" class.
    constructor(name, description, slug) {
      // Calls the constructor of the parent class ("RoadMap").
      super(name, description, slug);
    }
  
    // Method of the "JavaScript" class to greet with the name and description.
    greet() {
      console.log(`${this.name} - ${this.description}`);
    }
  }
  
  // This is an instance of the "JavaScript" class.
  const js = new JavaScript(
    "JavaScript Roadmap",       // Argument for name
    "Learn JavaScript",         // Argument for description
    "javascript"                // Argument for slug
  );
  
  // Calling the method "getRoadmapUrl" on the instance "js".
  js.getRoadmapUrl(); // Output: https://roadmap.sh/javascript
  
  // Calling the method "greet" on the instance "js".
  js.greet(); // Output: JavaScript Roadmap - Learn JavaScript
  
