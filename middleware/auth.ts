// import MIDDLEWARE_AUTH_CONSTANTS from '../config/contants';
// import jwt from 'jsonwebtoken';
// import config from 'config';
// import db from '../config/db/models';
// // import response from '../services/response';
// // import { ApiLog } from '../config/db/models/apiLog';

// db.User.findAll({})
//   .then((result: object) => console.log('the result is :', result))
//   .catch((err: object) => console.error(err));

// // const response = require('../services/response');

// // function test(tempObj) {
// //   return async (req, res, next) => {
// //     console.log('TempObj: ', tempObj);
// //     next();
// //   };
// // }

// // adminAuth = async function (req, res, next) {
// //   if (!config.get('requiresAuth')) return next();

// //   let reqUserId = '';
// //   // const token = req.header("Authorization");
// //   const token = req.headers.authorization.split(' ')[1];

// //   if (!token)
// //     return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);

// //   try {
// //     const decoded = jwt.verify(token, config.get('jwtAccessTokenPrivateKey'));

// //     req.jwtData = decoded;

// //     if (decoded.role !== 'admin')
// //       return response.error(
// //         res,
// //         MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN,
// //         403
// //       );

// //     let admin = await User.findOne({
// //       _id: mongoose.Types.ObjectId(decoded.userId)
// //     });
// //     // if (!admin || (user && user.accessToken !== token))

// //     if (!admin)
// //       return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);

// //     reqUserId = decoded.userId;

// //     await logApis(
// //       req.method,
// //       reqUserId,
// //       req.baseUrl + req.url,
// //       req.jwtData.email,
// //       req.jwtData.role,
// //       req.jwtData.subrole || 'NA',
// //       req.body
// //     );

// //     next();
// //   } catch (ex) {
// //     return response.error(res, ex, 401);
// //     // return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);
// //   }
// // };

// // userAuth = async function (req, res, next) {
// //   if (!config.get('requiresAuth')) return next();

// //   let reqUserId = '';

// //   // const token = req.header("Authorization");
// //   const token = req.headers.authorization.split(' ')[1];
// //   console.log(token);

// //   if (!token)
// //     return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);

// //   try {
// //     const decoded = jwt.verify(token, config.get('jwtAccessTokenPrivateKey'));
// //     req.jwtData = decoded;

// //     if (decoded.role !== 'user')
// //       return response.error(
// //         res,
// //         MIDDLEWARE_AUTH_CONSTANTS.RESOURCE_FORBIDDEN,
// //         403
// //       );

// //     let user = await User.findOne({
// //       _id: mongoose.Types.ObjectId(decoded.userId)
// //     });
// //     if (!user || (user && user.accessToken !== token))
// //       return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);

// //     req.userData = user;
// //     reqUserId = decoded.userId;

// //     await logApis(
// //       req.method,
// //       reqUserId,
// //       req.baseUrl + req.url,
// //       req.jwtData.email,
// //       req.jwtData.role,
// //       req.jwtData.subrole || 'NA',
// //       req.body
// //     );

// //     next();
// //   } catch (ex) {
// //     return response.error(res, MIDDLEWARE_AUTH_CONSTANTS.ACCESS_DENIED, 401);
// //   }
// // };

// // async function logApis(method, userId, url, email, role, subrole, body) {
// //   if (method != 'GET');
// //   {
// //     let apiLog = new ApiLog({
// //       method,
// //       userId,
// //       url,
// //       email,
// //       role,
// //       subrole,
// //       body
// //     });
// //     await apiLog.save();
// //   }
// // }

// // module.exports.test = test;
// // module.exports.adminAuth = adminAuth;
// // module.exports.userAuth = userAuth;
