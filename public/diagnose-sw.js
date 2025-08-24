// Diagnostic script to test service worker and manifest loading

const tests = {
  serviceWorker: {
    url: '/service-worker.js',
    expectedType: 'application/javascript',
    description: 'Service Worker File',
    validate: (content) => {
      if (content.trim().startsWith('<!')) {
        return { valid: false, message: 'Received HTML instead of JavaScript' };
      }
      if (!content.includes('ServiceWorker') && !content.includes('self.addEventListener')) {
        return { valid: false, message: 'File does not contain service worker code' };
      }
      return { valid: true };
    }
  },
  manifest: {
    url: '/manifest.json',
    expectedType: 'application/manifest+json',
    description: 'Web App Manifest',
    validate: (content) => {
      try {
        const manifest = JSON.parse(content);
        if (!manifest.name || !manifest.start_url) {
          return { valid: false, message: 'Missing required manifest fields' };
        }
        return { valid: true };
      } catch (e) {
        return { valid: false, message: `Invalid JSON: ${e.message}` };
      }
    }
  },
  swRegistration: {
    description: 'Service Worker Registration',
    test: async () => {
      if (!('serviceWorker' in navigator)) {
        return { valid: false, message: 'Service Workers not supported' };
      }
      
      try {
        const registration = await navigator.serviceWorker.register('/service-worker.js');
        return { 
          valid: true, 
          message: `Registered with scope: ${registration.scope}`,
          data: registration
        };
      } catch (error) {
        return { 
          valid: false, 
          message: `Registration failed: ${error.message}`,
          error: error
        };
      }
    }
  }
};

async function runTests() {
  const results = [];
  
  // Run file-based tests
  for (const [key, test] of Object.entries(tests)) {
    if (!test.url) continue;
    
    try {
      const response = await fetch(test.url, { 
        cache: 'no-store',
        headers: test.headers || {}
      });
      
      const contentType = response.headers.get('content-type') || '';
      const content = await response.text();
      
      const result = {
        name: test.description,
        url: test.url,
        status: response.status,
        contentType,
        valid: false,
        messages: []
      };
      
      // Check status
      if (!response.ok) {
        result.messages.push(`HTTP error: ${response.status} ${response.statusText}`);
      } else {
        result.messages.push('✓ File loaded successfully');
      }
      
      // Check content type
      if (test.expectedType && !contentType.includes(test.expectedType.split('/')[1])) {
        result.messages.push(`⚠ Unexpected content type: ${contentType} (expected ${test.expectedType})`);
      }
      
      // Run custom validation if available
      if (test.validate) {
        const validation = test.validate(content);
        if (!validation.valid) {
          result.messages.push(`❌ ${validation.message}`);
        } else {
          result.messages.push('✓ Content validation passed');
          result.valid = true;
        }
      }
      
      results.push(result);
    } catch (error) {
      results.push({
        name: test.description,
        url: test.url,
        valid: false,
        error: error.message,
        messages: [`❌ Failed to load: ${error.message}`]
      });
    }
  }
  
  // Run functional tests
  if ('serviceWorker' in navigator) {
    try {
      const result = await tests.swRegistration.test();
      results.push({
        name: tests.swRegistration.description,
        valid: result.valid,
        messages: [result.valid ? `✓ ${result.message}` : `❌ ${result.message}`],
        data: result.data
      });
    } catch (error) {
      results.push({
        name: tests.swRegistration.description,
        valid: false,
        messages: [`❌ Test failed: ${error.message}`]
      });
    }
  }
  
  return results;
}

// Create UI for test results
function displayResults(results) {
  const container = document.createElement('div');
  container.style.fontFamily = 'Arial, sans-serif';
  container.style.maxWidth = '800px';
  container.style.margin = '0 auto';
  container.style.padding = '20px';
  
  const title = document.createElement('h1');
  title.textContent = 'PWA Diagnostic Results';
  container.appendChild(title);
  
  results.forEach(test => {
    const testDiv = document.createElement('div');
    testDiv.style.margin = '20px 0';
    testDiv.style.padding = '15px';
    testDiv.style.border = '1px solid #ddd';
    testDiv.style.borderRadius = '5px';
    testDiv.style.backgroundColor = test.valid ? '#e8f5e9' : '#ffebee';
    
    const testTitle = document.createElement('h2');
    testTitle.textContent = test.name;
    testTitle.style.marginTop = '0';
    testTitle.style.color = test.valid ? '#2e7d32' : '#c62828';
    
    const url = document.createElement('div');
    url.textContent = test.url || '';
    url.style.fontFamily = 'monospace';
    url.style.margin = '5px 0';
    url.style.color = '#666';
    
    const messages = document.createElement('div');
    messages.style.marginTop = '10px';
    
    test.messages.forEach(msg => {
      const p = document.createElement('div');
      p.textContent = msg;
      p.style.margin = '5px 0';
      p.style.padding = '5px';
      p.style.backgroundColor = msg.startsWith('✓') ? '#e8f5e9' : 
                              msg.startsWith('❌') ? '#ffebee' :
                              '#fff3e0';
      messages.appendChild(p);
    });
    
    testDiv.appendChild(testTitle);
    if (test.url) testDiv.appendChild(url);
    testDiv.appendChild(messages);
    container.appendChild(testDiv);
  });
  
  // Add a refresh button
  const refreshBtn = document.createElement('button');
  refreshBtn.textContent = 'Run Tests Again';
  refreshBtn.style.marginTop = '20px';
  refreshBtn.style.padding = '10px 20px';
  refreshBtn.style.backgroundColor = '#2196f3';
  refreshBtn.style.color: 'white';
  refreshBtn.style.border: 'none';
  refreshBtn.style.borderRadius = '4px';
  refreshBtn.style.cursor = 'pointer';
  refreshBtn.onclick = () => window.location.reload();
  
  container.appendChild(refreshBtn);
  
  // Clear the body and add our results
  document.body.innerHTML = '';
  document.body.appendChild(container);
}

// Run tests when the page loads
window.addEventListener('load', async () => {
  const results = await runTests();
  displayResults(results);
});
