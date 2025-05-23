# Base image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production && npm cache clean --force

COPY prisma ./prisma
RUN npx prisma generate

# Copy app source
COPY . .

# Build the NestJS app
RUN npm run build

# Expose port
EXPOSE 3003

# Start the app
CMD ["npm", "run", "start"]