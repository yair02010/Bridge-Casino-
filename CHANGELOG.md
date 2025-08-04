# 📜 Bridge Casino – Server Changelog

---

## v0.1.0 – Auth System (3/8/2025)

### ✅ Added

- User registration with full fields (name, username, email, country, avatar)
- Login with JWT token
- Auth middleware (JWT check)
- Admin protection middleware
- User status check (active/suspended/banned)
- Joi validation with custom error messages
- Secure user model with hashed password, roles, and rating system

### 🛡 Security

- Password hashing with bcrypt
- Token signing with JWT (3-day expiry)
- Protected routes based on role and status

### 🧪 Testing

- Full Postman suite (login/register/me/admin/secure)
