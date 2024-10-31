# Use specific nginx version for stability
FROM nginx:1.25-alpine

# Copy static files
COPY . /usr/share/nginx/html

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Make port configurable via environment variable
ENV PORT=8080

# Use shell form to expand PORT environment variable
CMD sh -c "envsubst '\$PORT' < /etc/nginx/nginx.conf > /etc/nginx/nginx.conf.tmp && \
    mv /etc/nginx/nginx.conf.tmp /etc/nginx/nginx.conf && \
    nginx -g 'daemon off;'"
