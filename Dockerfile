# 1. Build Stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: The Runner (Nginx) ---
FROM nginx:alpine

# 1. Copy the static site
COPY --from=builder /app/out /usr/share/nginx/html

# 2. COPY YOUR CONFIG (You are missing this!)
# This actually tells Nginx to listen on 8080
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 3. Metadata label
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
