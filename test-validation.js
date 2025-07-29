// Test script for AddEditProjectModal validation
// Run this in your browser console while on the admin page

function testValidation() {
  // Test cases
  const testCases = [
    {
      name: "All fields empty",
      data: { title: '', subtitle: '', description: '', full_description: '', image: '' },
      shouldPass: false
    },
    {
      name: "All fields filled",
      data: { title: 'Test', subtitle: 'Test', description: 'Test', full_description: 'Test', image: 'test.jpg' },
      shouldPass: true
    },
    {
      name: "Missing title",
      data: { title: '', subtitle: 'Test', description: 'Test', full_description: 'Test', image: 'test.jpg' },
      shouldPass: false
    },
    {
      name: "Whitespace only",
      data: { title: '   ', subtitle: 'Test', description: 'Test', full_description: 'Test', image: 'test.jpg' },
      shouldPass: false
    }
  ];

  console.log('Testing validation logic...');
  
  testCases.forEach(testCase => {
    const { title, subtitle, description, full_description, image } = testCase.data;
    const isValid = !!(title?.trim() && subtitle?.trim() && description?.trim() && full_description?.trim() && image?.trim());
    
    console.log(`${testCase.name}: ${isValid === testCase.shouldPass ? '✅ PASS' : '❌ FAIL'}`);
    if (isValid !== testCase.shouldPass) {
      console.log(`  Expected: ${testCase.shouldPass}, Got: ${isValid}`);
    }
  });
}

// Run the test
testValidation(); 