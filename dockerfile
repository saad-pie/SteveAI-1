# Use a lightweight web server image
FROM nginx:alpine

# Copy SteveAI files to the server directory
COPY . /usr/share/nginx/html

# Expose port 80 for web traffic
EXPOSE 80

# Start the server
CMD ["nginx", "-g", "daemon off;"]
