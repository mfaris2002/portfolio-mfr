# STEP 1: Build (builds the admin panel)
FROM node:22-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--max-old-space-size=2048
RUN npm run build

# STEP 2: Production
FROM node:22-alpine
RUN apk update && apk add --no-cache vips-dev > /dev/null 2>&1
ENV NODE_ENV=production
WORKDIR /app

# Copy the entire built application
COPY --from=build /app ./

# Remove dev dependencies and reinstall only production
RUN npm prune --production 2>/dev/null || true

# Ensure .tmp directory exists for SQLite
RUN mkdir -p .tmp

EXPOSE 1337
CMD ["npm", "run", "start"]
