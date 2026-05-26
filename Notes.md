# Notes

## Incoming Information

**Divorcepath** is a cloud-based family law platform used by 300+ Canadian legal professionals. It automates support calculations, court form generation, financial disclosure, and agreement drafting. 5-person company, 3-person engineering team.

### GitHub Contribution Findings
- Authored 284 merged PRs across the Divorcepath organization.
- Repository spread: 112 merged PRs in divorcepath-api, 91 in divorcepath-ui, 33 in divorcepath-data-extractor, plus contributions across documentation, GTM, CMS, intake, Word add-in, and public UI repos.
- Notable missing themes from the current portfolio summary: AI agent rebuild, document upload in chat, data extractor optimization, CI/reliability work, and document-engine/workflow hardening.
- Local git history shows 800+ authored commits across the cloned Divorcepath repos, including API, UI, data extractor, documentation, CMS, intake, public UI, Word add-in, GTM, and private docs.

### Data Extractor
- Rebuilt the document data extraction pipeline using Python, AWS Textract, AWS Bedrock, and AWS Lambda.
- Before: legacy architecture with no Docker, no Textract, broken OCR (Lambda couldn't read scanned PDFs).
- Now: serves 400+ users, processes 2,800+ documents daily, saves users ~4 hours/week.
- Benchmarked 15+ AWS Bedrock LLM models and OCR packages with synthetic test documents.
- Improved accuracy by 15%, speed by 60%, reduced Docker image size and deploy time by 80%.
- Migrated extraction from OpenAI/doctran to AWS Bedrock; evaluation PR reported 100% extraction accuracy on 22 test documents.
- Replaced marker-pdf/PyTorch/Surya OCR with AWS Textract and Claude Haiku 4.5, reaching 99.7% accuracy while reducing Docker image size from ~8GB to <1GB.
- Reduced Lambda resources: memory 10GB to 3GB, timeout 15min to 5min, storage 5GB to 512MB.
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
- Rebuilt the agent with Mastra + CopilotKit integration, PostgreSQL-backed persistent conversations, server-side tools, approval flows, and 49 frontend actions across major workflow domains.
- Shipped PDF and Word upload in the chat rail with per-thread S3 attachments, file extraction, drag-and-drop UI, attachment chips, and approval-driven movement into client folders or disclosure entities.
- In production.

### Data Collection (GTM)
- Built a data collection system using Bun, TypeScript, AWS RDS, and web scraping.
- Sourced 10,000+ potential client contacts.
- Generated 26 signups and ~$2,080 CAD in revenue within 2 weeks of initial marketing campaigns.
- Upgraded automation pipelines with 2 Attio and 3 Zapier workflows, saving $100/month in automation credits.

### Testing
- Authored 1,000+ tests across all implemented features.
- Frontend: Vitest (unit), Playwright (integration). Backend: bun:test (unit).

### Platform Reliability / Engineering Quality
- Upgraded Bun, added isolated test execution, strengthened pre-commit/pre-push checks, parallelized CI, and added non-blocking code-health checks.
- Test isolation work surfaced a real production audit-trail sanitization bug where user ID foreign keys were being transformed as names.
- Hardened production workflows across custom interviews, autosave, income merge matching, rate-limit error handling, document edit locks, and agent message persistence.

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

- Built an OCR/LLM-powered document ETL pipeline using Python, AWS Textract, AWS Bedrock, and AWS Lambda, extracting and normalizing legal document data for 400+ users while processing 2,800+ documents daily and saving users an average of 4 hours per week.
- Migrated the extraction pipeline from OpenAI/doctran and ML-heavy OCR to AWS Bedrock and Textract, reaching 99.7% extraction accuracy while reducing Docker image size from ~8GB to <1GB and Lambda memory from 10GB to 3GB.
- Built an AI assistant agent with Mastra, CopilotKit, OpenAI, PostgreSQL, and GraphQL, enabling persistent conversations, approval-based actions, client file creation, form filling, and legal workflow automation through natural language.
- Shipped PDF and Word document upload in the AI chat rail, including per-thread S3 attachments, file extraction, drag-and-drop UI, and approval-driven movement into client folders or disclosure entities.
- Built an internal analytics dashboard tracking 67 metrics across platform usage, activation funnels, retention cohorts, organization health, feature adoption, and per-user engagement for executive decision-making.
- Built a GTM ETL pipeline using Bun, TypeScript, AWS RDS, and web scraping to extract, normalize, and load 10,000+ potential client contacts, generating $2,080 CAD in revenue within the first 2 weeks of marketing campaigns.
- Improved engineering reliability across API and UI repositories by upgrading Bun, adding isolated test execution, strengthening pre-commit/pre-push checks, parallelizing CI, and authoring 1,000+ unit and integration tests with Vitest, bun:test, and Playwright.

**Tech**: TypeScript, Python, React, GraphQL, Docker, AWS, PostgreSQL, Prisma, Bun, OpenAI, Sanity, Attio
