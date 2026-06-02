# SSG Database & Practice Planner

A Small Sided Games (SSG) database with advanced filtering capabilities to build customized practice plans.

## Features

- **SSG Database**: Comprehensive catalog of small-sided games
- **Advanced Filters**: Filter by player count, duration, difficulty, objectives, etc.
- **Practice Planner**: Build practice sessions by selecting SSGs from the database
- **Session Management**: Organize and save practice plans

## Project Structure

```
.
├── backend/           # API and database logic
├── frontend/          # Web interface
├── database/          # Database schemas and migrations
├── docs/              # Documentation
└── tests/             # Test suites
```

## Getting Started

See individual directory READMEs for setup instructions.

## Database Schema

### SSG (Small Sided Game)

- **id**: Unique identifier
- **name**: Game name
- **description**: Game description
- **playerCount**: Min/max players
- **duration**: Game duration in minutes
- **difficulty**: Beginner, Intermediate, Advanced
- **objectives**: Array of training objectives
- **equipment**: Required equipment
- **intensity**: Low, Medium, High
- **skills**: Primary skills developed
- **rules**: Game rules
- **modifications**: Possible rule variations
- **createdAt**: Timestamp
- **updatedAt**: Timestamp

### Practice Plan

- **id**: Unique identifier
- **name**: Plan name
- **date**: Practice date
- **games**: Array of SSG IDs
- **totalDuration**: Total session time
- **objectives**: Session objectives
- **notes**: Coach notes

## Contributing

Fork the repository and submit pull requests with improvements.

## License

MIT
