# ZeroStart Web

Marketing website for [ZeroStart](https://www.npmjs.com/package/zerostart) — a CLI tool that scaffolds projects in seconds.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy

The project includes a `Dockerfile` + `nginx.conf` for containerized deployment.

```bash
docker build -t zerostart-web .
docker run -p 80:80 zerostart-web
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/commands` | CLI command reference |
| `/about` | About ZeroStart |
| `/contact` | Contact |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
