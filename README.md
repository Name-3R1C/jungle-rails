# Jungle

A mini e-commerce application that sells plants, built to learn Rails 6.1 and Stripe.

## Setup

1. Run `bundle install` to install dependencies
2. Create `config/database.yml` by copying `config/database.example.yml`
3. Create `config/secrets.yml` by copying `config/secrets.example.yml`
4. Run `bin/rails db:reset` to create, load and seed db
5. Create .env file based on .env.example
6. Sign up for a Stripe account
7. Put Stripe (test) keys into appropriate .env vars
8. Run `bin/rails s -b 0.0.0.0` to start the server

## Database

If Rails is complaining about authentication to the database, uncomment the user and password fields from `config/database.yml` in the development and test sections, and replace if necessary the user and password `development` to an existing database user.

## Stripe Testing

Use Credit Card # 4111 1111 1111 1111 for testing success scenarios.

More information in their docs: <https://stripe.com/docs/testing#cards>

## Dependencies

- Rails 6.1 [Rails Guide](http://guides.rubyonrails.org/v6.1/)
- Bootstrap 5
- PostgreSQL 9.x
- Stripe

## Screenshots
<img width="508" alt="TheJungle" src="https://github.com/user-attachments/assets/feb61582-8663-4478-ab9e-d702dbfa4a77">
<img width="830" alt="details" src="https://github.com/user-attachments/assets/226e8e43-913b-41bf-a290-6f188332a458">
<img width="843" alt="cart" src="https://github.com/user-attachments/assets/aed229c0-0137-4f7e-baf3-88cb85f9691e">
<img width="791" alt="payment" src="https://github.com/user-attachments/assets/39cbd8fd-cfe8-4b42-9781-19c7c0f846ad">
<img width="832" alt="finish" src="https://github.com/user-attachments/assets/d375f4e9-d46c-45c0-a5d4-0dce37ef63f9">

