// Doctor Data Model
const Doctor = {
  id: "",               // string
  name: "",             // string
  specialty: "",        // string
  experience: 0,        // number
  rating: 0,            // number
  image: "",            // string (URL or base64 string for image)
  availability: [],     // Array of strings (days of the week)
  description: ""       // string
};

// User Data Model
const User = {
  id: "",               // Optional string
  email: "",            // string
  password: "",         // string
  name: ""              // Optional string
};

// Appointment Data Model
const Appointment = {
  id: "",               // string
  doctorId: "",         // string
  userId: "",           // string
  date: "",             // string (date in string format)
  time: "",             // string (time in string format)
  status: "pending",    // status can be 'pending', 'confirmed', or 'cancelled'
  createdAt: ""         // string (timestamp or date string)
};

// AuthResponse Data Model
const AuthResponse = {
  token: "",            // string (JWT token)
  user: {
    id: "",             // string
    email: "",          // string
    name: ""            // string
  }
};
