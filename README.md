# Buzzvel

## Dev team test

## Goals

- Create a page that generates QR-code with link to user's profile;
- Users can download image;
- Users must fill some information that will be displayed in profile page;
- Mobile first;
- Create a profile page for each users has generetad QR-code;

## Stacks

### Backend

- PHP
- Laravel

### Frontend

- NodeJS
- ReactJS
- NextJS
- Tailwind CSS
- Typescript

### DB

- SQLite

## Bonus

- Tests

## Requirements

- Composer
- PHP
- NPM/Yarn
- NodeJS

### How to use

Clone this repo. In backend folder run `php artisan serve` and in frontend `yarn dev`

### API Routes

| route | method | description |
|---|---|---|
| /api/user | POST | store the user information in DB |
| /api/users/${USER} | GET | return the user's data |

### WebApp Routes

| route | description |
| --- | --- |
| / | home page and form to generate link and QR code |
| /${USER} | shows the user information |

### Users Table

| Name | Field | Type | Description | OBS |
| --- | --- | --- | --- | --- |
| id | ID | INT | ID with auto incremention | Auto generated |
| created_at | Created At | INT | Time stamp | Auto generated by migrations |
| updated_at | Updated At | INT | Time stamp | Auto generated by migrations |
| full_name | Full Name | varchar | Full name of the user | Fill by user |
| email | e-mail | varchar | User's e-mail | Fill by user |
| tel | Telephone | varchar | User's telephone | Fill by user |
| linkedin_url | Linkedin URL | varchar | URL of the user's LinkedIn | Fill by user |
| github_url | GitHub URL | varchar | URL of the user's GitHub | Fill by user |
| profile | Profile | varchar | URL of the user | Generated by the system |

### Tests

To run backend tests run `php artisan test`

### Reference links

- https://laravel.com/docs/9.x
- https://php.net
- https://nextjs.org
- https://github.com/nayuki/QR-Code-generator
- https://www.npmjs.com/package/react-qr-code
- https://www.npmjs.com/package/qrcode.react