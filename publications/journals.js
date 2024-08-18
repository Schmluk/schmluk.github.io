const journalVenues = {
  "RAL": {
    "name": "IEEE Robotics and Automation Letters (RA-L)",
    "link": "https://www.ieee-ras.org/publications/ra-l",
    "image": "RAS.jpg"
  },
  "Postdocket": {
    "name": "The Postdocket",
    "link": "https://www.nationalpostdoc.org/",
    "image": "npa.png"
  },
  "PlantMethods": {
    "name": "Plant Methods",
    "link": "https://plantmethods.biomedcentral.com/",
    "image": "plant_methods.png"
  }
}

const pubJournals = [
  {
    "authors": ["D. Maggio", "Y. Chang", "N. Hughes", "M. Trang", "D. Griffith", "C. Dougherty", "E. Cristofalo", "L. Schmid", "L. Carlone"],
    "title": "Clio: Real-time Task-Driven Open-Set 3D Scene Graphs",
    "venue": journalVenues["RAL"],
    "year": "2024",
    "pages": "",
    "links": [{ "name": "ArXiv", "link": "http://arxiv.org/abs/2404.13696" }, {"name": "Video", "link": "https://www.youtube.com/watch?v=m-HJO10qhSQ"}, {"name": "Code", "link": "https://github.com/MIT-SPARK/Clio"}]
  },
  {
    "authors": ["A. Ahmad", "I. Arora", "S. Cataldi", "J. Cottet", "E. El Khoury", "B. Gnangnon", "T. Kinder", "R. Lafer-Sousa", "M. Levinstein", "L. Majure", "L. Nguyen", "L. Schmid", "M. Smith", "E. Ventriglia", "S. Wang"],
    "title": "What Does It Take to Successfully Advocate for Postdoctoral Scholars?",
    "venue": journalVenues["Postdocket"],
    "year": "2024",
    "pages": "National Postdoctoral Association, vol. 22, no. 1",
    "links": [{ "name": "Journal", "link": "https://www.nationalpostdoc.org/page/POSTDOCket_2201#section4" }]
  },
  {
    "authors": ["L. Schmid", "O. Andersson", "A. Sulser", "P. Pfreundschuh", "R. Siegwart"],
    "title": "Dynablox: Real-time Detection of Diverse Dynamic Objects in Complex Environments",
    "venue": journalVenues["RAL"],
    "year": "2023",
    "pages": "vol. 8, no. 10, pp. 6259-6266",
    "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/10218983" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2304.10049" }, { "name": "Code", "link": "https://github.com/ethz-asl/dynablox" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=NA13fRWlqRQ" }]
  },
  {
    "authors": ["R. Zurbrugg", "H. Blum", "C. Cadena", "R. Siegwart", "L. Schmid"],
    "title": "Embodied Active Domain Adaptation for Semantic Segmentation via Informative Path Planning",
    "venue": journalVenues["RAL"],
    "year": "2022",
    "pages": " vol. 7, no. 4, pp. 8691-8698",
    "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9816133" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2203.00549" }, { "name": "Code", "link": "https://github.com/ethz-asl/active_learning_for_segmentation" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=FeFPEdZzT3w" }]
  },
  {
    "authors": ["L. Schmid", "C. Ni", "Y. Zhong", "R. Siegwart", "O. Andersson"],
    "title": "Fast and Compute-efficient Sampling-based Local Exploration Planning via Distribution Learning",
    "venue": journalVenues["RAL"],
    "year": "2022",
    "pages": "vol. 7, no. 2, pp. 7810-7817",
    "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9807401" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2202.13715" }, { "name": "Code", "link": "https://github.com/ethz-asl/cvae_exploration_planning" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=Hj5yI8VtlXk" }]
  },
  {
    "authors": ["L. Schmid", "V. Reijgwart", "L. Ott", "J. Nieto", "R. Siegwart", "C. Cadena"],
    "title": "A Unified Approach for Autonomous Volumetric Exploration of Large Scale Environments under Severe Odometry Drift",
    "venue": journalVenues["RAL"],
    "year": "2021",
    "pages": "vol. 6, no. 3, pp. 4504-4511",
    "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/9387110" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/2010.09859" }, { "name": "Code", "link": "https://github.com/ethz-asl/glocal_exploration" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=WInjZvoCDCM" }]
  },
  {
    "authors": ["L. Schmid", "M. Pantic", "R. Khanna", "L. Ott", "R. Siegwart", "J. Nieto"],
    "title": "An Efficient Sampling-based Method for Online Informative Path Planning in Unknown Environments",
    "venue": journalVenues["RAL"],
    "year": "2020",
    "pages": "vol. 5, no. 2, pp. 1500-1507",
    "links": [{ "name": "Journal", "link": "https://ieeexplore.ieee.org/document/8968434" }, { "name": "ArXiv", "link": "https://arxiv.org/abs/1909.09548" }, { "name": "Code", "link": "https://github.com/ethz-asl/mav_active_3d_planning" }, { "name": "Video", "link": "https://www.youtube.com/watch?v=lEadqJ1_8Do" }]
  },
  {
    "authors": ["R. Khanna", "L. Schmid", "A. Walter", "J. Nieto", "R. Siegwart", "F. Liebisch"],
    "title": "A Spatio Temporal Spectral Framework for plant Stress Phenotyping",
    "venue": journalVenues["PlantMethods"],
    "year": "2019",
    "pages": "vol. 15, no. 1, pp. 1-18",
    "links": [{ "name": "Journal", "link": "https://plantmethods.biomedcentral.com/articles/10.1186/s13007-019-0398-8" }, { "name": "Code", "link": "https://github.com/ethz-asl/plant_stress_phenotyping" }]
  }
]

