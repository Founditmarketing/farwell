const fs = require('fs');
let html = fs.readFileSync('../index.html', 'utf8');

// 1. Remove duplicate Allison paragraph
html = html.replace(
  /(<p class="sp">Andrew and his wife Allison came back.*?<\/p>)\s*<div class="sdv"><\/div>\s*<p class="sp">Andrew and his wife Allison returned.*?<\/p>/s,
  '$1'
);

// 2. Practice Areas headline
html = html.replace(
  'One <span class="eu">Relentless Standard.</span>',
  'One <span class="eu">Standard of Care.</span>'
);

// 3. Practice Areas card rewrites
html = html.replace(
  "When an insurer\u2019s first offer is an insult, we prepare for trial \u2014 which is usually when the real offer arrives.",
  "When an insurer\u2019s offer doesn\u2019t reflect what happened, we prepare the case for a jury \u2014 and that changes the conversation."
);
html = html.replace(
  "Andrew has won acquittals in cases the public had already convicted.",
  "Every client deserves a defense built for trial, regardless of what anyone else has already decided."
);
html = html.replace(
  "Cyclists hit by negligent drivers face a legal system built around car-to-car collisions. We fight for your rights.",
  "Cyclists injured by negligent drivers deserve representation that understands the specific challenges of these cases."
);
html = html.replace(
  "When they cut corners, we hold them accountable.",
  "When that duty isn\u2019t met, the injured person deserves an honest accounting."
);
html = html.replace(
  "We force carriers to honor the policies you paid for.",
  "When a carrier won\u2019t honor the policy you paid for, the case needs to be taken seriously."
);

// 4. Service Area swagger line
html = html.replace(
  '<p class="svt">If your case is in Missouri, we can handle it.</p>',
  '<p class="svt">If your matter is in Missouri, Andrew will be there.</p>'
);

// 5. FAQ Q7 answer
html = html.replace(
  "Trial experience. Most attorneys haven\u2019t tried a case in years. Andrew has tried cases across Missouri for two decades. That readiness is leverage \u2014 even when your case never sees a courtroom.",
  "Andrew tries cases. He has done so for twenty-two years, across thirty-five counties. He answers his own phone. He does his own work. That\u2019s the practice."
);

// 6. CTA section
html = html.replace(
  '<span class="stt">Get Started</span>',
  '<span class="stt">Reach Out</span>'
);
html = html.replace(
  'The Free Consultation Is<br><span class="es">a Phone Call Away.</span>',
  'A Conversation Costs<br><span class="es">Nothing.</span>'
);
html = html.replace(
  "Whether you\u2019ve been injured, charged with a crime, or need counsel \u2014 Andrew will personally review your situation. No obligation. Just a straight conversation about what comes next.",
  "Whether you\u2019ve been hurt, charged, or just don\u2019t know what to do next \u2014 call or fill out the form. Andrew will review your situation personally. No pressure, no obligation."
);

// 7. CTA buttons (only in the CTA section, not the hero)
html = html.replace(
  /<div class="cta-a rv"><a href="#contact" class="bp">Free Case Review<\/a>/,
  '<div class="cta-a rv"><a href="#contact" class="bp">Talk to Andrew</a>'
);

// 8. Contact section
html = html.replace(
  '<span class="stt">Contact</span>',
  '<span class="stt">Contact</span>'
);
html = html.replace(
  'Tell Us About<br>Your <span class="eri">Situation.</span>',
  'Tell Us What<br><span class="eri">Happened.</span>'
);
html = html.replace(
  'Complete the form for a free, no-obligation case review. Andrew will personally follow up',
  'Fill out the form below. Andrew will follow up personally'
);
html = html.replace(
  'What happened? When? Are you currently represented?',
  "In your own words, tell us what's going on."
);
html = html.replace(
  'Submit for Free Case Review',
  'Send My Information'
);

fs.writeFileSync('../index.html', html);
console.log('All remaining copy changes applied');
