# Deployment & Reliability Strategy

## Infrastructure Architecture
AutoClick Agency is built to support modern cloud-native deployment patterns, specifically designed for containerized environments like Google Cloud Run. 

## Blue-Green Deployment Workflow
To ensure zero-downtime releases and instant rollback capability, this project follows a Blue-Green deployment model.

1. **Active Environment (Blue):** The current production container accepting 100% of live traffic.
2. **Staging Environment (Green):** The newly built container where CI/CD tests run.

### Traffic Switching Procedures
1. New commits to the `main` branch trigger a build of the "Green" container image.
2. The Green container is deployed alongside the Blue container but receives 0% of public traffic.
3. Automated health checks (`/api/health`) verify that the Green container responds successfully.
4. An automated smoke test validates critical paths (e.g. form submission endpoints).
5. If tests pass, the load balancer shifts traffic 100% to the Green container.
6. The old Blue container is kept warm for 24 hours.

## Rollback & Recovery Workflow
1. If the Green container throws 500 errors exceeding a 1% threshold, the cloud load balancer instantly shifts 100% of traffic back to the Blue container.
2. In an emergency, operators can manually revert traffic tags in the console.
3. Because state is isolated from the React application layer, rolling back the front-end has no impact on data integrity.

## Monitoring & Logging
Error handling inside React uses graceful failure boundaries. Do not leak stack traces to the UI (handled by `NotFound` and graceful form fallbacks in `Contact.tsx`). All unhandled errors should be forwarded to secure log aggregators.
