import express from 'express';

import courses from '../data/courses';
import { tables1, tables2 } from '../data/tables';

const router = express.Router();


// 取得課程列表
router.get('/courses', (req, res) => {
  // return res.status(400).end();
  return res.status(200).json(courses).end();
});

// 取得某課程所有表格列表
router.get('/:id/tables', (req, res) => {
  // return res.status(400).end();
  const id = req.params.id;
  const tables = Math.random() < 0.5 ? tables1 : tables2;

  console.log(id);

  return res.status(200).json(tables).end();
});

// 取得 table 內容
// router.get('/:courseId/:tableId', (req, res) => {
//   const courseId = req.params.courseId;
//   const tableId = req.params.tableId;

//   console.log(`courseId: ${courseId}`);
//   console.log(`tableId: ${tableId}`);

//   return res.status(200).json(tables).end();
// });

// // 新增 task
// router.post('/task', (req, res) => {
//   if (Math.random() < 0.3) {
//     return res.status(400).end();
//   }

//   return res.status(200).end();
// });

export default router;
