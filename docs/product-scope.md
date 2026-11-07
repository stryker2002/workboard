# WorkBoard — Product Scope

## Product vision

WorkBoard is a project and task management platform designed for software development teams.

Its goal is to provide a clear and efficient way to organize work, track task progress, and support collaboration.

## Target users

- Software developers
- Project leaders
- Team administrators

## Initial release: WorkBoard Core v0.1

The first version will be a command-line application developed with TypeScript and Node.js.

### Planned capabilities

- Create tasks.
- List and retrieve tasks.
- Update task status.
- Delete tasks.
- Persist tasks in JSON.
- Validate business rules.
- Execute automated unit tests.

## Task lifecycle

Tasks can have five states:

- `pending`
- `in_progress`
- `in_review`
- `blocked`
- `completed`

### Business rules

1. New tasks start in `pending`.
2. Tasks must pass through `in_review` before becoming `completed`.
3. Blocked tasks must have a reason.
4. Unblocking a task restores its previous status.
5. Completed tasks can be reopened.
6. Invalid state transitions must be rejected.

## Future development

- REST API with Express.
- PostgreSQL persistence.
- React web application.
- Authentication and authorization.
- Project and team management.
- Dashboard and activity history.

## Development approach

WorkBoard will be developed incrementally using small user stories, automated testing, Git version control, and documented technical decisions.