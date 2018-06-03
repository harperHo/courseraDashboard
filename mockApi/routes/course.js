import express from 'express';

import courses from '../data/courses';
import tables from '../data/tables';

const router = express.Router();


// 取得課程列表
router.get('/courses', (req, res) => {
  // return res.status(400).end();
  return res.status(200).json(courses).end();
});

// 取得某課程所有表格列表
router.get('/:id', (req, res) => {
  // return res.status(400).end();
  const id = req.params.id;

  return res.status(200).json(tables).end();
});

// // 新增 task
// router.post('/task', (req, res) => {
//   if (Math.random() < 0.3) {
//     return res.status(400).end();
//   }

//   return res.status(200).end();
// });

export default router;
