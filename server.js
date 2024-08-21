import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// 현재 모듈 파일 경로
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000; // 여기서 process를 사용합니다.

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')));

// 모든 요청을 index.html로 라우팅
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});