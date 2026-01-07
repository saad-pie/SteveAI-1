window.onerror = function(message, source, lineno, colno, error) {
  console.error("SteveAI System Failure:", message);
  // In a real pro setup, you'd send this to a service like Sentry or a Google Form
  // This helps Saadpie & Ahmed track bugs in the Orchestration layer.
};
