require('dotenv/config')
const s3 = require('s3')
//criar cliente do s3, como vamos mandar os dados
// do s3
const params = {
  localFile: './arquivo-teste3.txt',
  s3Params:{
    Bucket: 'primeiro-bucket-s3',
    Key: 'arquivo-teste3.txt'
  },
  s3Options:{
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.SECRET_KEY,
    region: 'us-east-1'
  }
}

const client = s3.createClient(params)

const uploader = client.uploadFile(params)
uploader.on('error', e => console.log(e))
uploader.on('progress',() => console.log('uploading...'))
uploader.on('end',() => console.log('terminou'))