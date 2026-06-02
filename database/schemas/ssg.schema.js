// SSG Database Schema
// Defines the structure for Small Sided Games

const ssgSchema = {
  id: {
    type: "string",
    description: "Unique identifier for the SSG"
  },
  name: {
    type: "string",
    required: true,
    description: "Name of the game"
  },
  description: {
    type: "string",
    required: true,
    description: "Detailed description of the game"
  },
  playerCount: {
    type: "object",
    required: true,
    properties: {
      min: {
        type: "number",
        description: "Minimum number of players"
      },
      max: {
        type: "number",
        description: "Maximum number of players"
      },
      recommended: {
        type: "number",
        description: "Recommended number of players"
      }
    }
  },
  duration: {
    type: "object",
    required: true,
    properties: {
      min: {
        type: "number",
        description: "Minimum duration in minutes"
      },
      max: {
        type: "number",
        description: "Maximum duration in minutes"
      }
    }
  },
  difficulty: {
    type: "string",
    enum: ["Beginner", "Intermediate", "Advanced"],
    required: true,
    description: "Difficulty level"
  },
  objectives: {
    type: "array",
    items: {
      type: "string"
    },
    description: "Training objectives (e.g., 'Passing accuracy', 'Tactical positioning')"
  },
  equipment: {
    type: "array",
    items: {
      type: "string"
    },
    description: "Equipment needed"
  },
  intensity: {
    type: "string",
    enum: ["Low", "Medium", "High"],
    required: true,
    description: "Physical intensity level"
  },
  skills: {
    type: "array",
    items: {
      type: "string"
    },
    description: "Primary skills developed"
  },
  rules: {
    type: "string",
    required: true,
    description: "Game rules and scoring"
  },
  modifications: {
    type: "array",
    items: {
      type: "object",
      properties: {
        name: { type: "string" },
        description: { type: "string" }
      }
    },
    description: "Possible rule modifications"
  },
  tags: {
    type: "array",
    items: {
      type: "string"
    },
    description: "Additional tags for filtering"
  },
  createdAt: {
    type: "string",
    format: "date-time",
    description: "Creation timestamp"
  },
  updatedAt: {
    type: "string",
    format: "date-time",
    description: "Last update timestamp"
  }
};

module.exports = ssgSchema;
