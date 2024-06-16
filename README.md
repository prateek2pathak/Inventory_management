# Inventory_management

This repository contains the backend API for managing orders and inventory using Node.js, Express, and MongoDB with Mongoose.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Endpoints](#endpoints)


## Introduction

This project implements a RESTful API for managing orders and inventory. It provides endpoints to create, read, update, and delete orders, as well as manage inventory items.

## Features

- CRUD operations for orders
- Inventory management with stock filtering
- Sorting orders by customer name and item count
- Updating order status

## Setup

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prateek2pathak/Inventory_management.git
   cd inventory-backend

Install dependencies:
npm install

Set up environment variables:
Create a .env file in the root directory and define the following variables:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/inventory


Run the server:
npm start




## Endpoints

### Orders

#### Fetch all orders






