# API Reference

This section describes the API endpoints available for integrating or extending Zentra.

## Authentication

- `POST /api/login` - Authenticate user  
- `POST /api/register` - Register new user  

## Users

- `GET /api/users/:id` - Get user info  
- `PUT /api/users/:id` - Update user profile  

## Messages

- `GET /api/channels/:id/messages` - Fetch messages in a channel  
- `POST /api/channels/:id/messages` - Send a message  

## WebSocket Events

- `message` - New message received  
- `typing` - User is typing indicator  


For full API details and examples, refer to the official SDK documentation.
