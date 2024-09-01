<template>
  <footer class="footer">
    <div class="container text-center">
      <p class="footer-text">BookWorms</p>
      <p class="footer-text">Projekt iz kolegija "Web Aplikacije"</p>
      <div class="social-links">
        <a href="https://facebook.com" target="_blank" class="social-link">Facebook</a>
        <a href="https://instagram.com" target="_blank" class="social-link">Instagram</a>
        <a href="https://twitter.com" target="_blank" class="social-link">Twitter</a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
};
</script>

<style scoped>
.footer {
  background-color: #2E8B57;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
}

.footer-text {
  margin: 0;
  color: #ddd;
  font-size: 0.9em;
}

.social-links {
  margin-top: 0.5rem;
}

.social-link {
  margin: 0 8px;
  color: #ddd;
  text-decoration: none;
  font-size: 0.9em;
}

.social-link:hover {
  text-decoration: underline;
}
</style>
