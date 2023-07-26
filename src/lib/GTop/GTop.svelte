<script>
  import { onMount } from 'svelte';
  import './styles/GTop.css';


  // Function to scroll to the top
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle scroll event to show or hide the button
  function handleScroll() {
    const backToTopButton = document.getElementById('backToTopButton');
    if (backToTopButton) {
      backToTopButton.style.display = window.scrollY > 200 ? 'block' : 'none';
    }
  }

  // Add scroll event listener
  onMount(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<button id="backToTopButton" on:click={scrollToTop} aria-label="Scroll to top" />

