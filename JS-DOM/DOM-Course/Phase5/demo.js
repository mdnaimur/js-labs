const btn = document.getElementById('btn');
  const output = document.getElementById('output');
  const link = document.getElementById('link');

  btn.addEventListener('click', function(event) {
    // Build info text
    const info = `
event.type: ${event.type}

TARGET vs CURRENTTARGET:
event.target: ${event.target.className || event.target.id}
event.currentTarget: ${event.currentTarget.id}

POSITION:
clientX: ${event.clientX}
clientY: ${event.clientY}
pageX: ${event.pageX}
pageY: ${event.pageY}

MODIFIER KEYS:
shiftKey: ${event.shiftKey}
ctrlKey: ${event.ctrlKey}
altKey: ${event.altKey}
metaKey: ${event.metaKey}
`;

    output.textContent = info;

    console.log('Event object:', event);

    // Stop bubbling (try commenting this to see difference)
    event.stopPropagation();
  });

  // Demonstrate bubbling
  document.body.addEventListener('click', () => {
    console.log('Body received click (bubbling)');
  });

  // preventDefault demo
  link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Default navigation prevented!');
  });