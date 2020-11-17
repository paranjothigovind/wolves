// const path = require('path');
// const express = require('express');
// const multer = require('multer');
// const tutorSchema = require('../models/tutor');
// const Router = express.Router();

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, cb) {
//       cb(null, './files');
//     },
//     filename(req, file, cb) {
//       cb(null, `${new Date().getTime()}_${file.originalname}`);
//     }
//   }),
//   limits: {
//     fileSize: 1000000 // max file size 1MB = 1000000 bytes
//   },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpeg|jpg|png|pdf|doc|docx|xlsx|xls)$/)) {
//       return cb(
//         new Error(
//           'only upload files with jpg, jpeg, png, pdf, doc, docx, xslx, xls format.'
//         )
//       );
//     }
//     cb(undefined, true); // continue with upload
//   }
// });

// Router.post(
//   '/uploadFile',
//   upload.single('file'),
//   async (req, res) => {
//     res.json("uploading working")
//     try {
//       //const { title, description } = req.body;
//       const { path, mimetype } = req.file;
//       const file = new tutorSchema({
//         // title,
//         // description,
//         file_path: path,
//         file_mimetype: mimetype
//       });
//       await file.save();
//       res.send('file uploaded successfully.');
//     } catch (error) {
//       res.status(400).send('Error while uploading file. Try again later.');
//     }
//   },
//   (error, req, res, next) => {
//     if (error) {
//       res.status(500).send(error.message);
//     }
//   }
// );

// Router.get('/getAllFiles', async (req, res) => {
//   try {
//     res.json("get files route working")
//     const files = await tutorSchema.find({});
//     const sortedByCreationDate = files.sort(
//       (a, b) => b.createdAt - a.createdAt
//     );
//     res.send(sortedByCreationDate);
//   } catch (error) {
//     res.status(400).send('Error while getting list of files. Try again later.');
//   }
// });

// Router.get('/download/:id', async (req, res) => {
//   try {
//     res.json("download route working")
//     const file = await tutorSchema.findById(req.params.id);
//     res.set({
//       'Content-Type': file.file_mimetype
//     });
//     res.sendFile(path.join(__dirname, '..', file.file_path));
//   } catch (error) {
//     res.status(400).send('Error while downloading file. Try again later.');
//   }
// });

// module.exports = Router;
