# Notes

## Incoming Information

Divorcepath contributions:
- Worked on 2 automation workflows on Attio, helped maintained Attio data integrity and saves about $100 every month.
- Worked on `gtm` - collect potential customer data through scraping, integrating with third-party (Apollo), designed database and a way to clean stale data.
- Worked on `data-extractor`. Moved the repo from relying on API to extract markdown scripts from PDFs and Word docs to using libraries to do the work on its own. Used OpenAI API to extract info from markdown.
Performed optimizations, inluding runtime optimization - reducing extraction time by ~60%, Dockerizing the data extractor so that it can continue be deployed as a Lambda function (through ECR and Docker),
even though the function is about 10 times heavier due to dependencies. Saved the company some money by doing this instead of hosting extractor on EC2 like initially planned. Also wrote automated Github deployment
scripts for production, development, and staging environments.
- Worked on `divorcepath-ui`. Made UI updates, improving user experience.
- Addressed multiple Aikido security problems in preparation for SOC 2 audit.
- Set up cost abnormality alerts and tool failure alerts from AWS, sending to team Emails and Slack, ensuring rapid response.
- Worked on `divorcepath-api`. Built seeding scripts that generate detailed like-real data, used for real client demos.
- Helped response to clients on Intercom.

Ongoing work:
- Working on Zapier pipelines to move data from Stripe to Attio.
- Upgrading dependencies on `divorcepath-intake` to address security issues.

Divorcepath technologies involved:

- Languages:
  - TypeScript
  - JavaScript
  - Python
 
- Libraries:
  - playwright
  - React
 
- Tools:
  - Bun
  - Prisma
  - Postgres
  - Docker

- Platforms:
  - Attio
  - Zapier
  - OpenAI
  - AWS (S3, Lambda, CloudWatch, CloudFormation, ECR)
  - Aikido
  - Github (and Github CI/CD)
  - Intercom
 
Utilized multiple AI Tools:
- Cursor
- Claude Code
- Gemini Code Assist
- Code Rabbit
