# STEP 1: Build
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
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json /app/package-lock.json ./
# In Strapi 5, the build output is in the dist folder
COPY --from=build /app/dist ./dist
COPY --from=build /app/public ./public
# We also need the compiled config files if they are not in dist
# But usually, 'strapi build' compiles everything needed into 'dist'

EXPOSE 1337
# In production, we should run the compiled entry point
CMD ["npm", "run", "start"]
