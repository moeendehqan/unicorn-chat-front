# Multi-stage build: build with Node, serve static without Nginx

# --- Build stage ---
FROM node:22-alpine AS builder
WORKDIR /app

# Enable Corepack to use pnpm
RUN corepack enable

# Install deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source and build
COPY . .
RUN pnpm build

# --- Runtime stage ---
FROM node:22-alpine AS runner
WORKDIR /app

# Use a lightweight static file server
RUN npm i -g serve

# Copy production build
COPY --from=builder /app/dist ./dist

# Expose and run on 8080
EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]