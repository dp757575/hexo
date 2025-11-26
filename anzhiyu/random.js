var posts=["2025/11/27/a's'da's'da's'd/","2025/11/27/hello-world/","2025/11/27/未命名/","2025/11/27/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };