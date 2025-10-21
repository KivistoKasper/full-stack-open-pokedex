In this hypothetical project where six people work in a project the language is Java.

## Point 1)

Some common steps in a CI setup include linting, testing, and building. These are some specific tool to use.

### Tools for linting:

- Checkstyle – enforces coding style / formatting / naming rules in Java.
- PMD – checks for code issues, unused variables, complexity, etc.
- SpotBugs – static analysis looking for bug patterns in Java bytecode.
- SonarQube – a more comprehensive platform that can aggregate static analysis, duplication, coverage, code smells.

### For Testing:

- For unit/integration tests typically with frameworks like JUnit or TestNG.
- For API testing, RestAssured or Katalon.

### For Buiding:

- Build tool, Maven or Gradle.

## Point 2)

Some alternatives to Jenkins and GitHub:

- GitLab CI/CD – can be in cloud or self-hosted.
- CircleCI – cloud native CI/CD platform, easy to use and scalable.
- Azure DevOps – for teams in Microsoft’s ecosystem.
- AWS CodePipeline – pay-as-you-go pricing model.

## Point 3)

Would this setup be better in self-hosted or cloud-based environment:

### Self-hosted

**Pros:**

- Full control over build environment.
- Possibly lower cost if you already have hardware or spare capacity.
- You can integrate more deeply with internal systems, internal network resources.

**Cons:**

- You must manage infrastructure: maintain build servers, update OS/tools, scale agents, monitor health.
- When the team is small you might end up spending more effort on build infra than value.
- Scaling might be harder.

### Cloud-based

**Pros:**

- Minimal infrastructure to manage.
- Often fast to get started.
- Scalability: many providers offer on‑demand runners, parallelism, and pay‑as‑you‑go.
- Typically good the team wants to focus on development rather than build infra.

**Cons:**

- Cost may scale with usage.
- Less control over environment.
- Dependency on provider up-time, limits, quotas.
