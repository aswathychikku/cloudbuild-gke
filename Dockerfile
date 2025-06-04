# Use official Node.js base image
FROM node:18

# Create app directory
WORKDIR /app

# Copy the app file into the container
COPY index.js .

# Run the app when the container starts
CMD ["node", "index.js"]