# STEP 1: Build
FROM node:22-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev > /dev/null 2>&1
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
ENV NODE_OPTIONS=--max-old-space-size=2048
# Build admin panel
RUN npm run build
# Copy config files to dist/ where strapi start expects them
RUN cp -r config dist/config
# Copy src files to dist/ for API routes
RUN cp -r src dist/src 2>/dev/null || true

# STEP 2: Production
FROM node:22-alpine
RUN apk update && apk add --no-cache vips-dev > /dev/null 2>&1
ENV NODE_ENV=production
WORKDIR /app

COPY --from=build /app/package.json /app/package-lock.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
COPY --from=build /app/database ./database

RUN mkdir -p .tmp

EXPOSE 1337
CMD ["npm", "run", "start"]
