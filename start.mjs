import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import { handler as astroHandler } from './dist/server/entry.mjs'

const app = express()
const port = 4321

// (옵션) gzip 등 압축
// import compression from 'compression';
// app.use(compression());

// 정적 파일 서빙 (Astro가 빌드한 client 파일)
const __dirname = fileURLToPath(new URL('.', import.meta.url))
app.use(express.static(join(__dirname, 'dist/client')))

// Astro의 SSR 핸들러 등록
app.use(astroHandler)

// 404 핸들러 (이 뒤로 넘어오면 Astro도 처리 못한 경로)
app.use((req, res, next) => {
  res.status(404).end()
})

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`)
})
