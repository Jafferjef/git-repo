
const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';

const payload = {
  userId: 12864,
  username: 'Jaffer',
  
};

const token = jwt.sign(payload, secretKey, { algorithm: 'HS256',expiresIn:'1h'});
console.log("The token for "+payload.username +" is " +token);

function verifyAccessToken(token) {
try {
    const decoded = jwt.verify(token, secretKey);
    return { success: true, data: decoded };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

const tokenjwt = 'your-jwt-token';
const result = verifyAccessToken(tokenjwt);

if (result.success) {
  console.log('Token is valid:', result.data);
} else {
  console.error('Token is invalid:', result.error);
}