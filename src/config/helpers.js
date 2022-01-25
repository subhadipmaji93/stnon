exports.pageHeaderVid = function (val) {
  return `<header class="page-header">
  <div class="video-bg">
      <video src="/videos/${val.video}" muted loop></video>
  </div>
  <div class="inner">
    <div class="container">
      <h1>${val.h1}</h1>
      <p>${val.p}</p>
    </div>
  </div>
</header>`;
};

exports.pageHeaderImg = function (val) {
  return `<header class="page-header">
    <div class="image-bg">
        <img src="/images/${val.image}" alt="" />
    </div>
    <!-- end image-bg -->
    <div class="inner">
        <div class="container">
        <h1>${val.h1}</h1>
        <p>${val.p}</p>
        </div>
        <!-- end container -->
    </div>
    <!-- end inner -->
    </header>`;
};
