module.exports = {
  root:process.cwd(),//当前文件夹的路径
  hostname:'127.0.0.1',
  port:8888,
  compress:/\.(html|js|css|md)/,
  cache:{
    maxAge:600,
    expires:true,
    cacheControl:true,
    lastModified:true,
    etag:true,
  }
};
