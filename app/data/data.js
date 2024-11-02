// data/data.js
export const questions = [
    {
      id: 1,
      content: `A 54-year-old woman comes to the emergency department due to bright red blood per rectum. She reports passing 3 large, bloody stools over the past 2 days, which have been associated with mild abdominal cramps. The patient has no melena, fever, vomiting, or unexpected weight changes. She underwent a radical hysterectomy and adjuvant radiation therapy for cervical cancer over 12 months ago. The patient has no other medical conditions and takes no medication. Temperature is 37.5°C (99.5°F), blood pressure is 140/80 mm Hg, pulse is 80/min, and respirations are 12/min. Cardiopulmonary examination is unremarkable. The abdomen is nontender and nondistended. Extremities are warm and well perfused. Laboratory results are as follows: Complete blood count: Hemoglobin: 9.8 g/dL Platelets: 325,000/mm³ Leukocytes: 6,200/mm³ Serum chemistry: Blood urea nitrogen: 17 mg/dL Creatinine: 0.8 mg/dL A colonoscopy is performed and shows mucosal pallor, friability, and multiple telangiectasias, all of which are confined within the rectum. Scattered diverticula are present but limited to the descending and transverse colon.
`,
      choices: [
        { id: 'A', text: 'Angiodysplasia', correct: false },
        { id: 'B', text: 'Clostridioides difficile infection', correct: false },
        { id: 'C', text: 'Crohn disease', correct: false },
        { id: 'D', text: 'Diverticular colitis', correct: false },
        { id: 'E', text: 'Ischemic colitis', correct: false },
        { id: 'F', text: 'Radiation proctitis', correct: true }
      ],
      explanation: `The correct diagnosis is radiation proctitis...`,
      sources: [
        { title: 'Radiation Proctopathy: A Management Challenge', author: 'Paquette, I.M. et al.', year: '2024', journal: 'Diseases of the Colon & Rectum' },
        { title: 'Current Management of Radiation Proctitis: A Review', author: 'Do, N.L. et al.', year: '2023', journal: 'Journal of Gastrointestinal Surgery' }
      ]
    },
    {
      id: 2,
      content: `A 54-year-old woman comes to the emergency department due to bright red blood per rectum. She reports passing 3 large, bloody stools over the past 2 days, which have been associated with mild abdominal cramps. The patient has no melena, fever, vomiting, or unexpected weight changes. She underwent a radical hysterectomy and adjuvant radiation therapy for cervical cancer over 12 months ago. The patient has no other medical conditions and takes no medication. Temperature is 37.5°C (99.5°F), blood pressure is 140/80 mm Hg, pulse is 80/min, and respirations are 12/min. Cardiopulmonary examination is unremarkable. The abdomen is nontender and nondistended. Extremities are warm and well perfused. Laboratory results are as follows: Complete blood count: Hemoglobin: 9.8 g/dL Platelets: 325,000/mm³ Leukocytes: 6,200/mm³ Serum chemistry: Blood urea nitrogen: 17 mg/dL Creatinine: 0.8 mg/dL A colonoscopy is performed and shows mucosal pallor, friability, and multiple telangiectasias, all of which are confined within the rectum. Scattered diverticula are present but limited to the descending and transverse colon.
`,
      choices: [
        { id: 'A', text: 'Asbestosis', correct: false },
        { id: 'B', text: 'Silicosis', correct: true },
        { id: 'C', text: 'Coal worker\'s pneumoconiosis', correct: false },
        { id: 'D', text: 'Sarcoidosis', correct: false }
      ],
      explanation: `The correct diagnosis is silicosis...`,
      sources: [
        { title: 'Silicosis: A World History', author: 'Rosner, D. and Markowitz, G.', year: '2024', journal: 'The Lancet' },
        { title: 'Diagnosis and Management of Silicosis', author: 'Leung, C.C. et al.', year: '2023', journal: 'American Journal of Respiratory and Critical Care Medicine' }
      ]
    },
    {
      id: 3,
      content: `A 54-year-old woman comes to the emergency department due to bright red blood per rectum. She reports passing 3 large, bloody stools over the past 2 days, which have been associated with mild abdominal cramps. The patient has no melena, fever, vomiting, or unexpected weight changes. She underwent a radical hysterectomy and adjuvant radiation therapy for cervical cancer over 12 months ago. The patient has no other medical conditions and takes no medication. Temperature is 37.5°C (99.5°F), blood pressure is 140/80 mm Hg, pulse is 80/min, and respirations are 12/min. Cardiopulmonary examination is unremarkable. The abdomen is nontender and nondistended. Extremities are warm and well perfused. Laboratory results are as follows: Complete blood count: Hemoglobin: 9.8 g/dL Platelets: 325,000/mm³ Leukocytes: 6,200/mm³ Serum chemistry: Blood urea nitrogen: 17 mg/dL Creatinine: 0.8 mg/dL A colonoscopy is performed and shows mucosal pallor, friability, and multiple telangiectasias, all of which are confined within the rectum. Scattered diverticula are present but limited to the descending and transverse colon.
`,
      choices: [
        { id: 'A', text: 'Tuberculosis', correct: true },
        { id: 'B', text: 'Sarcoidosis', correct: false },
        { id: 'C', text: 'Lung cancer', correct: false },
        { id: 'D', text: 'Pneumonia', correct: false }
      ],
      explanation: `The correct diagnosis is tuberculosis...`,
      sources: [
        { title: 'Diagnosis and Treatment of Tuberculosis', author: 'Smith, J. et al.', year: '2022', journal: 'The Lancet Respiratory Medicine' },
        { title: 'Current Advances in Tuberculosis Management', author: 'Lee, C. and Kim, Y.', year: '2023', journal: 'American Journal of Respiratory and Critical Care Medicine' }
      ]
    }
  ]
  