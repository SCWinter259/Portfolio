# Notes

## Incoming Information

**Divorcepath** is a cloud-based family law platform used by 300+ Canadian legal professionals. It automates support calculations, court form generation, financial disclosure, and agreement drafting. 5-person company, 3-person engineering team.

### Data Extractor
- Rebuilt the document data extraction pipeline using Python, AWS Textract, AWS Bedrock, and AWS Lambda.
- Before: legacy architecture with no Docker, no Textract, broken OCR (Lambda couldn't read scanned PDFs).
- Now: serves 400+ users, processes 2,800+ documents daily, saves users ~4 hours/week.
- Benchmarked 15+ AWS Bedrock LLM models and OCR packages with synthetic test documents.
- Improved accuracy by 15%, speed by 60%, reduced Docker image size and deploy time by 80%.
- Replaced GPL-licensed packages and selected Textract models routed exclusively within North America for government data locality compliance.

### Status Page
- Built a production service status page monitoring 8 services.
- Integrated with Sanity CMS for incident report publishing and Slack for automated alerts (within 60 seconds of downtime).
- Publicly accessible (planned for auditor visibility); incident report history available.

### Analytics Dashboard
- Built an internal analytics dashboard tracking 67 distinct metrics across 7 sections: platform overview, growth/activation funnels, retention cohorts, organization health, org detail drilldowns, feature intelligence, per-user engagement.
- Built with React, TypeScript, and GraphQL. Primarily provides business insights to the CEO.

### AI Agent
- Created an AI assistant agent using CopilotKit, Mastra, and OpenAI API.
- Users can create client files, fill out forms, query legal information, and perform any in-app action through natural language (similar to Claude Cowork, but for family law).
- In production.

### Data Collection (GTM)
- Built a data collection system using Bun, TypeScript, AWS RDS, and web scraping.
- Sourced 10,000+ potential client contacts.
- Generated 26 signups and ~$2,080 CAD in revenue within 2 weeks of initial marketing campaigns.
- Upgraded automation pipelines with 2 Attio and 3 Zapier workflows, saving $100/month in automation credits.

### Testing
- Authored 1,000+ tests across all implemented features.
- Frontend: Vitest (unit), Playwright (integration). Backend: bun:test (unit).

### SOC 2
- SOC 2 Type I achieved. Type II in progress.
- Prepared compliance documents and wrote shell scripts for automated evidence collection.

### Other
- Built a realistic data seeding script (200+ entities/files) for end-to-end testing and client demos.
- Answered client support on Intercom.
- Built Claude skills and the company's private skills marketplace.
- Performed dependency upgrades and security patches across multiple repos.
- Set up AWS cost anomaly alerts and tool failure alerts.

### Technologies
- Languages: TypeScript, Python
- Frontend: React, Vitest, Playwright
- Backend: Bun, Prisma, PostgreSQL, GraphQL, Docker
- Cloud: AWS (Lambda, Textract, Bedrock, S3, RDS, Elastic Beanstalk, CloudWatch, ECR, CloudFormation)
- Platforms: OpenAI, Sanity, Attio, Zapier, Sentry, GitHub CI/CD

---

## Job Summary (Resume-style draft)

**Divorcepath** — Software Engineer  
**Nov 2025 - Present** | **Calgary, AB**

- Rebuilt the document data extraction pipeline using Python, AWS Textract, AWS Bedrock, and AWS Lambda, serving 400+ users and processing 2,800+ documents daily while saving users an average of 4 hours of manual work per week.
- Benchmarked 15+ AWS Bedrock LLM models and OCR packages using synthetic test documents, improving extraction accuracy by 15% and speed by 60% while reducing Docker container size and deployment time by 80%.
- Built an internal analytics dashboard tracking 67 metrics across 7 sections using React, TypeScript, and GraphQL, providing leadership with actionable insights on user engagement, feature adoption, and organization health.
- Created an AI assistant agent using CopilotKit, Mastra, and OpenAI API, enabling users to create client files, fill out forms, and query legal information through natural language.
- Built a production service status page monitoring 8 services with Sanity CMS and Slack integration, delivering automated incident notifications within 60 seconds and hosting public incident reports.
- Built a data collection system using Bun, TypeScript, AWS RDS, and web scraping, sourcing 10,000+ potential client contacts and generating $2,080 CAD in revenue within the first 2 weeks of marketing campaigns.
- Authored over 1,000 unit and integration tests using Vitest, bun:test, and Playwright across all implemented features, ensuring code reliability and preventing regressions.
- Contributed to achieving SOC 2 Type I certification by preparing compliance documents, writing automated evidence collection scripts, and enforcing data locality through North America-only AWS service routing.

**Tech**: TypeScript, Python, React, GraphQL, Docker, AWS, PostgreSQL, Prisma, Bun, Sanity, Attio
