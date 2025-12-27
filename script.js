const video = document.getElementById('video');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');

document.querySelectorAll('section').forEach(section => {
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        video.src = 'videos/' + section.dataset.video;
        title.textContent = section.dataset.title;
        subtitle.textContent = section.dataset.sub;
      }
    });
  }, { threshold: 0.6 }).observe(section);
});