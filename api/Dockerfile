# Base image
FROM node:12.6

# Working directory 
WORKDIR /src/app

# Copy and install dependencies 
COPY package.json .

# Build 
RUN npm install

# Copy contents
COPY . .

# Expose port
EXPOSE 9000

# Start 
CMD ["node","server.js"]