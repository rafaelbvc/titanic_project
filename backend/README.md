# Titanic Project

## Author : Rafael Vendramini

### url: ""

### repository: https://github.com/rafaelbvc/titanic_project

###############################################################################################################################################################

### Technologies:

- React
- Node
- TypeScript
- JavaScript
- MongoAtlas
- PostgreSQL

###############################################################################################################################################################

### Database Fields Specified:

1.PassengerID: Unique identifier for each passenger
2.Survived: Survival status
3.Pclass: Passenger class
4.Name: Passenger name
5.Sex: Passenger gender
6.Age: Passenger age in years
7.SibSp: Number of siblings/spouses aboard
8.Parch: Number of parents/children aboard
9.Ticket: Ticket number
10.Fare: Ticket fare
11.Cabin: Cabin number
12.Embarked: Embarkation port

#### (MVP) - Basic version of a product with the minimum required features for launch

#### (NR) - Next release

## User Stories

Passenger List View

### Back-End

User Story: As a system, I need to store and make passenger data accessible to the front-end so that users can retrieve and view the passenger list.
Technologies: Node.js, TypeScript, MongoDB, PostgreSQL (as SQL model)

### Acceptance Criteria:

Endpoints to retrieve the passenger list with fields PassengerID, Survival (Survived), Class (Pclass), Name, Sex, and Age
Database optimized for fast queries with appropriate indexes (NR) 2. Survival Analysis by Attributes

### Back-End

User Story: As a system, I need to process and return data on survival rates by key attributes so that users can gain insights.
Technologies: Node.js, PostgreSQL

### Acceptance Criteria:

API endpoints that calculate and return survival statistics segmented by Class (Pclass), Sex, and Age (NR)
Pre-aggregated data for optimized response (NR / Refactoring / Optimization)
Detailed Passenger View

### Back-End

User Story: As a system, I need to fetch and return complete information for each passenger by PassengerID to display detailed profiles.
Technologies: Node.js, MongoDB, PostgreSQL

### Acceptance Criteria:

API endpoint to retrieve detailed data by PassengerID
Error handling for invalid or non-existent PassengerID
Roadmap for Project Titanic

## Roadmap

### Phase 1 (MVP)

[]-Implement search functionality for passenger names.\*
[]-Set up API endpoints for listing passengers.\*
[]-Ensure basic data storage and retrieval functionality with MongoDB/PostgreSQL.\*

### Phase 2 (Next Release - NR)

[]-Implement Survival Analysis by Attributes (Front and Back-End).\*
[]-Develop the filter and search functionality with advanced criteria.\*

### Phase 3 (Enhanced Features and Admin Control)

[]-Build the Data Dashboard for insights and trends.\*
[]-Implement Admin Functionality for passenger data management.\*
[]-Add role-based access control for data management.\*
[]-Optimize database queries and add pre-aggregated data for speed.\*

## Todo List

### Back-End

[]-Create initial database schemas and models.\*
[]-Set up endpoints for Passenger List and search functionality.\*
[]-Implement data retrieval by PassengerID for Detailed Passenger View.\*
[]-Set up survival analysis endpoints for future NR phase.\*
[]-Implement admin access and role-based permissions.\*
[]-Optimize queries and indexing for better performance (NR).\*

## ~Enjoy
