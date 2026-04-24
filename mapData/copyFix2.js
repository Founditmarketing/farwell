const fs = require('fs');
let html = fs.readFileSync('../index.html', 'utf8');

// Fix meta description
html = html.replace(
  'Most attorneys never go to trial. Andrew does. Personal injury, criminal defense, wrongful death',
  'Your case deserves someone ready for trial. Personal injury, criminal defense, wrongful death'
);

// Fix FAQ Q7 - try with straight apostrophes
html = html.replace(
  /Trial experience\. Most attorneys haven.t tried a case in years\. Andrew has tried cases across Missouri for two decades\. That readiness is leverage . even when your case never sees a courtroom\./,
  "Andrew tries cases. He has done so for twenty-two years, across thirty-five counties. He answers his own phone. He does his own work. That\u2019s the practice."
);

fs.writeFileSync('../index.html', html);
console.log('Meta and FAQ fixes applied');
