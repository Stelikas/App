<template>
  <section class="py-6">
    <div class="container">
      <div class="row mb-5">
        <div class="col-md-8">
          <p class="subtitle text-primary">
            Stay and eat like a local
          </p>
          <h2>Our guides</h2>
        </div>
        <div class="col-md-4 d-lg-flex align-items-center justify-content-end">
          <a class="text-muted text-sm" href="category.html">
            See all guides<i class="fas fa-angle-double-right ms-2" /></a>
        </div>
      </div>
      <div class="swiper-container guides-slider mx-n2 pt-3">
        <!-- Additional required wrapper-->
        <div class="swiper-wrapper pb-5">
          <!-- Slides-->
          <div class="swiper-slide h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
              <a class="tile-link" href="category.html" /><img class="bg-image" src="/img/photo/new-york.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">
                  New York
                </h6>
                <p class="card-text text-sm">
                  The big apple
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
              <a class="tile-link" href="category.html" /><img class="bg-image" src="/img/photo/paris.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">
                  Paris
                </h6>
                <p class="card-text text-sm">
                  Artist capital of Europe
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
              <a class="tile-link" href="category.html" /><img class="bg-image" src="/img/photo/barcelona.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">
                  Barcelona
                </h6>
                <p class="card-text text-sm">
                  Dalí, Gaudí, Barrio Gotico
                </p>
              </div>
            </div>
          </div>
          <div class="swiper-slide h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0">
              <a class="tile-link" href="category.html" /><img class="bg-image" src="/img/photo/prague.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">
                  Prague
                </h6>
                <p class="card-text text-sm">
                  City of hundred towers
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination d-md-none" />
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
