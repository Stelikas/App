<template>
  <section class="hero-home">
    <div class="swiper-container hero-slider">
      <div class="swiper-wrapper dark-overlay">
        <div class="swiper-slide" style="background-image:url(/img/photo/photo-1501621965065-c6e1cf6b53e2.jpg)" />
        <div class="swiper-slide" style="background-image:url(/img/photo/photo-1519974719765-e6559eac2575.jpg)" />
        <div class="swiper-slide" style="background-image:url(/img/photo/photo-1490578474895-699cd4e2cf59.jpg)" />
        <div class="swiper-slide" style="background-image:url(/img/photo/photo-1534850336045-c6c6d287f89e.jpg)" />
      </div>
    </div>
    <div class="container py-6 py-md-7 text-white z-index-20">
      <div class="row">
        <div class="col-xl-10">
          <div class="text-center text-lg-start">
            <p class="subtitle letter-spacing-4 mb-2 text-secondary text-shadow">
              The best holiday experience
            </p>
            <h1 class="display-3 fw-bold text-shadow">
              Stay like a local
            </h1>
          </div>
          <div class="search-bar mt-5 p-3 p-lg-1 ps-lg-4">
            <form action="#">
              <div class="row">
                <div class="col-lg-4 d-flex align-items-center form-group">
                  <input class="form-control border-0 shadow-0" type="text" name="search" placeholder="What are you searching for?">
                </div>
                <div class="col-lg-3 d-flex align-items-center form-group">
                  <div class="input-label-absolute input-label-absolute-right w-100">
                    <label class="label-absolute" for="location"><i class="fa fa-crosshairs" /><span class="sr-only">City</span></label>
                    <input id="location" class="form-control border-0 shadow-0" type="text" name="location" placeholder="Location">
                  </div>
                </div>
                <div class="col-lg-3 d-flex align-items-center form-group no-divider">
                  <select class="selectpicker" title="Categories" data-style="btn-form-control">
                    <option value="small">
                      Restaurants
                    </option>
                    <option value="medium">
                      Hotels
                    </option>
                    <option value="large">
                      Cafes
                    </option>
                    <option value="x-large">
                      Garages
                    </option>
                  </select>
                </div>
                <div class="col-lg-2 d-grid">
                  <button class="btn btn-primary rounded-pill h-100" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
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
