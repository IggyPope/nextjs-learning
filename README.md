# Deploy

[https://nextjs-learning-navy-five.vercel.app/](https://nextjs-learning-navy-five.vercel.app/)

Deployments are handled automatically with Vercel after every commit to main.

## Getting Started

After cloning this repository, save `.env.example` file in the root directory as `.env.local` and add your API key as `NEXT_PUBLIC_API_KEY`.

Then run the following commands:

```bash
# install dependencies
npm install
# prepare pre-commit and pre-push hooks
npm run prepare
# run development server
npm run dev
```
