// import multer from 'multer';

// import {
//   MAX_FILE_SIZE,
//   CATEGORY_IMAGE_FOLDER,
//   SUBCATEGORY_IMAGE_FOLDER,
//   DISH_IMAGE_FOLDER
// } from '../config/index';
// import fs from 'fs';

// const subcategoryDiskStorage = multer.diskStorage({
//   // @ts-ignore
//   destination: (req: any, file: any, cb) => {
//     cb(null, SUBCATEGORY_IMAGE_FOLDER);
//   },
//   filename: (req: any, file: any, cb) => {
//     const extension = file.originalname.split('.').pop();
//     cb(null, req.params.code + '-' + req.currentTimestamp + '.' + extension);
//   }
// });

// const subcategoryUploader = multer({
//   storage: subcategoryDiskStorage,
//   limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 },
//   // @ts-ignore
//   fileFilter: (req: any, file: any, cb) => {
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format are allowed!'));
//     }
//   }
// });

// const categoryDiskStorage = multer.diskStorage({
//   // @ts-ignore
//   destination: (req: any, file: any, cb) => {
//     cb(null, CATEGORY_IMAGE_FOLDER);
//   },
//   filename: (req: any, file: any, cb) => {
//     const extension = file.originalname.split('.').pop();
//     cb(null, req.params.code + '-' + req.currentTimestamp + '.' + extension);
//   }
// });

// const categoryUploader = multer({
//   storage: categoryDiskStorage,
//   limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 },
//   // @ts-ignore
//   fileFilter: (req: any, file: any, cb) => {
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format are allowed!'));
//     }
//   }
// });

// const dishDiskStorage = multer.diskStorage({
//   // @ts-ignore
//   destination: (req: any, file: any, cb) => {
//     cb(null, DISH_IMAGE_FOLDER);
//   },
//   filename: (req: any, file: any, cb) => {
//     const extension = file.originalname.split('.').pop();
//     cb(null, req.params.code + '-' + req.currentTimestamp + '.' + extension);
//   }
// });

// const dishUploader = multer({
//   storage: dishDiskStorage,
//   limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 },
//   // @ts-ignore
//   fileFilter: (req: any, file: any, cb) => {
//     if (
//       file.mimetype === 'image/png' ||
//       file.mimetype === 'image/jpg' ||
//       file.mimetype === 'image/jpeg'
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
//       return cb(new Error('Only .png, .jpg and .jpeg format are allowed!'));
//     }
//   }
// });

// const removeImageFromDisk = (image_path: string) => {
//   try {
//     fs.unlinkSync(image_path);
//     // fs.unlink(image_path, (err => {
//     //   if (err) {
//     //     console.log('Error at removing an image: ', err);
//     //     return false;
//     //   } else {
//     //     return true;
//     //   }
//     // }))
//     return true;
//   } catch (e: any) {
//     return false;
//   }
// };

// // const subcategoryDiskStorage = multer.diskStorage({
// //   destination: (req: any, file: any, cb) => {
// //     cb(null, SUBCATEGORY_IMAGE_FOLDER);
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, req.params.id + "-" + file.originalname);

// //   }
// // })

// // const subcategoryUploader = multer({
// //   storage: subcategoryDiskStorage,
// //   limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 },
// //   fileFilter: (req: any, file: any, cb) => {
// //     if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
// //       cb(null, true);
// //     } else {
// //       cb(null, false);
// //       return cb(new Error('Only .png, .jpg and .jpeg format are allowed!'));
// //     }
// //   }
// // })

// // const dishDiskStorage = multer.diskStorage({
// //   destination: (req: any, file: any, cb) => {
// //     cb(null, DISH_IMAGE_FOLDER);
// //   },
// //   filename: (req, file, cb) => {
// //     cb(null, req.params.id + "-" + file.originalname);

// //   }
// // })

// // const dishUploader = multer({
// //   storage: dishDiskStorage,
// //   limits: { fileSize: MAX_FILE_SIZE * 1024 * 1024 },
// //   fileFilter: (req: any, file: any, cb) => {
// //     if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
// //       cb(null, true);
// //     } else {
// //       cb(null, false);
// //       return cb(new Error('Only .png, .jpg and .jpeg format are allowed!'));
// //     }
// //   }
// // })

// const diskUploader = {
//   removeImageFromDisk,
//   categoryUploader,
//   subcategoryUploader,
//   dishUploader
// };
// export default diskUploader;
