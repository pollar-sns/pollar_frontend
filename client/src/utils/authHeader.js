//* Add JWT token in Header
// If there is a logged in user with accessToken(즉 JWT), return HTTP Authorization header.
// Otherwise, return an empty objct.
//// export default function authHeader() {
////   const user = JSON.parse(localStorage.getItem('user'));
//
////   if (user && user.accessToken) {
////     // For Spring Boot back-end
////     return { Authorization: 'Bearer ' + user.accessToken };
//
////     // for Node.js Express back-end
////     //// return { 'x-access-token': user.accessToken };
////   } else {
////     console.log('Auth token not found');
////     return {};
////   }
//// }
