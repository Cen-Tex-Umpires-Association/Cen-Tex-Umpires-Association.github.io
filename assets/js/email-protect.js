/**
 * Email Protection Script
 * Obfuscates email addresses to reduce spam harvesting
 */
(function() {
  'use strict';

  // Decode Base64 encoded emails
  function decodeEmail(encoded) {
    try {
      return atob(encoded);
    } catch (e) {
      return '';
    }
  }

  // Handle protected email spans (data-u="user" data-d="domain")
  function initProtectedEmails() {
    document.querySelectorAll('.protected-email').forEach(function(el) {
      var user = el.getAttribute('data-u');
      var domain = el.getAttribute('data-d');
      if (user && domain) {
        var email = user + '@' + domain;
        var link = document.createElement('a');
        link.href = 'mailto:' + email;
        link.textContent = email;
        el.parentNode.replaceChild(link, el);
      }
    });
  }

  // Protect existing mailto links by converting them to click handlers
  // This removes the email from the HTML source
  function protectMailtoLinks() {
    document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
      var email = link.href.replace('mailto:', '');
      var encoded = btoa(email);

      // Store encoded email and remove href
      link.setAttribute('data-email', encoded);
      link.removeAttribute('href');
      link.style.cursor = 'pointer';

      // Add click handler to open mailto
      link.addEventListener('click', function(e) {
        e.preventDefault();
        var decoded = decodeEmail(this.getAttribute('data-email'));
        if (decoded) {
          window.location.href = 'mailto:' + decoded;
        }
      });
    });
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initProtectedEmails();
      protectMailtoLinks();
    });
  } else {
    initProtectedEmails();
    protectMailtoLinks();
  }
})();
