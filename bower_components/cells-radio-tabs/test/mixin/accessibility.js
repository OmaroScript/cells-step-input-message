const rulesConfigDefault = {};

function accessibilityTests(selector, rulesConfig = rulesConfigDefault) {
  test('it should pass accessibility tests', async () => {
    await axe.run(selector, {rules: rulesConfig}).then(results => {
      if (results.violations.length) {
        let error = ``;

        results.violations.forEach(err => {
          const nodes = err.nodes.map(node => `
          -> ${node.html}
          `);
          error += `${err.id}: ${err.description}. help: ${err.helpUrl}
          ${nodes}
          `;
        });
        
        console.error(error);
      }
      
      assert.equal(results.violations.length > 0, false);
    })
  });
}