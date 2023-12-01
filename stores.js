const allCampusData = [
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.4971, 28.7532],
    },
    properties: {
      name: "KIET Group of Institutions",
      address: "Delhi-NCR, Meerut Rd, Ghaziabad, Uttar Pradesh 201206, India",
      phone: "+91 8802140619",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.116211, 15.387667],
    },
    properties: {
      name: "Chetan Business School",
      address: " Sri Nagar, Hubli, Karnataka, India",
      phone: "+91 820688657",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.85186, 22.636843],
    },
    properties: {
      name: "SAGE University",
      address: " Indore, Madhya Pradesh, India",
      phone: "+91 975378350",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.777115, 18.147085],
    },
    properties: {
      name: "Sb Patil College of Engineering",
      address: " Pune, Maharashtra, India",
      phone: "+91 106684360",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.653236, 25.358772],
    },
    properties: {
      name: "Shiv Charan Mathur Institute Of Management and Technology",
      address: " Rajasthan, India",
      phone: "+91 535853316",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.257423, 15.804958],
    },
    properties: {
      name: "N.S College of Horticultural Sciences",
      address: " Idupur, Andhra Pradesh, India",
      phone: "+91 990557223",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.683479, 18.511143],
    },
    properties: {
      name: "Chanakya Junior College",
      address: " Pune, Maharashtra, India",
      phone: "+91 79103169",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [87.828934, 26.170353],
    },
    properties: {
      name: "AZMET Institute of Technology",
      address: " Kishanganj, Bihar, India",
      phone: "+91 722096352",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [81.660103, 25.492682],
    },
    properties: {
      name: "Chandra Shekhar Singh College of Pharmacy",
      address: " Kausambi, Prayagraj, Uttar Pradesh, India",
      phone: "+91 781746131",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.787956, 27.290924],
    },
    properties: {
      name: "Eshan College Of Engineering",
      address: " Shehzadpur Pauri, Uttar Pradesh, India",
      phone: "+91 780007194",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.043419, 12.971581],
    },
    properties: {
      name: "Chennai Institute of Technology",
      address: " Chennai, Thamil Nadu, India",
      phone: "+91 761961711",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.439285, 26.603096],
    },
    properties: {
      name: "Sri Ram Sevak Savitri Devi Ic",
      address: " Keshampur Auraiya, Uttar Pradesh, India",
      phone: "+91 322252730",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.127686, 10.770631],
    },
    properties: {
      name: "K. N. Govt Arts College",
      address: " N.S.C Bose Nagar, Thanjavur, Tamil Nadu, India",
      phone: "+91 759624546",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.550385, 13.004285],
    },
    properties: {
      name: "VVS PU College",
      address: " Women's Part, Bengaluru, Karnataka, India",
      phone: "+91 401947695",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.643234, 12.30902],
    },
    properties: {
      name: "Sir boys Pu college",
      address: " Krishnanagar, Mysore, Karnataka, India",
      phone: "+91 913335776",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.089142, 18.44219],
    },
    properties: {
      name: "SRM Degree & PG Colleges",
      address: " Karimnagar, Telangana, India",
      phone: "+91 70781496",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.495598, 16.6686],
    },
    properties: {
      name: "Sri Sai Degree College",
      address: " Kalwakurthy, Telangana, India",
      phone: "+91 423308016",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.576004, 23.030481],
    },
    properties: {
      name: "Shri Ratan Pvt ITI",
      address: " Thandla, Madhya Pradesh, India",
      phone: "+91 332997396",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.577003, 28.885715],
    },
    properties: {
      name: "Vaish College of Law",
      address: " Rohtak, Haryana, India",
      phone: "+91 199651515",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.827423, 17.186069],
    },
    properties: {
      name: "Mother Theresa Institute of Science and Technology",
      address: " Sathupally, Telagana, India",
      phone: "+91 571174505",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.701363, 17.437342],
    },
    properties: {
      name: "Mother Teresa Pharmacy College",
      address: " Telangana, India",
      phone: "+91 766726216",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.951584, 23.715609],
    },
    properties: {
      name: "Asansol Engineering College",
      address: " Asansol, West Bengal, India",
      phone: "+91 529507822",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [87.96814, 26.164164],
    },
    properties: {
      name: "Azmet College of Engineering and Technology",
      address: " Kishanganj, Bihar, India",
      phone: "+91 239428975",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.444832, 17.918524],
    },
    properties: {
      name: "St. Joseph Degree & PG College",
      address: " Madikonda, Kazipet, Telagana, India",
      phone: "+91 505809588",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.485809, 28.436647],
    },
    properties: {
      name: "Khandelwal College of Architecture & Design",
      address: " Bareilly, Uttar Pradesh, India",
      phone: "+91 283240698",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.896141, 22.210951],
    },
    properties: {
      name: "AASAN Academy",
      address: " Gopiballabpur, West Bengal, India",
      phone: "+91 281600106",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.837273, 19.102837],
    },
    properties: {
      name: "Mithibai College",
      address: " Mumbai, Maharashtra, India",
      phone: "+91 706533665",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.566833, 12.909477],
    },
    properties: {
      name: "Dayananda Sagar College of Engineering",
      address: " Bengaluru, Karnataka, India",
      phone: "+91 661170202",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.883804, 19.064671],
    },
    properties: {
      name: "Prizm Institute",
      address: " Nehru Nagar, Mumbai, Maharashtra, India",
      phone: "+91 855844858",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.028656, 27.883827],
    },
    properties: {
      name: "Vivekananda College of Technology and Management",
      address: " Aligarh, Uttar Pradesh, India",
      phone: "+91 365620251",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [81.553932, 23.186037],
    },
    properties: {
      name: "MEGHA Classes Dhanpuri",
      address: " Imam Bada, Dhanpuri, Madhya Pradesh, India",
      phone: "+91 951573767",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.62352, 9.321053],
    },
    properties: {
      name: "SCRV ITE",
      address: " Angadical, Chengannur, Kerala, India",
      phone: "+91 90662858",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [94.291245, 24.256483],
    },
    properties: {
      name: "Moreh College",
      address: " Chikim, Manipur, India",
      phone: "+91 947510509",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.759933, 29.014225],
    },
    properties: {
      name: "FIT Engineering College",
      address: " Meerut, Uttar Pradesh, India",
      phone: "+91 864909977",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.298721, 16.84503],
    },
    properties: {
      name: "Ashokrao Mane Group Of Institutions",
      address: " Kolhapur,Maharashtra, India",
      phone: "+91 175931875",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.838593, 26.767958],
    },
    properties: {
      name: "Jasoda Devi Teachers Training College",
      address: " Sitapura, Jaipur, Rajasthan, India",
      phone: "+91 511682658",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [92.036835, 26.441786],
    },
    properties: {
      name: "College of Teacher Education",
      address: " Mangaldai, Assam, India",
      phone: "+91 682314076",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.369675, 28.952917],
    },
    properties: {
      name: "Murti Devi Memorial College",
      address: " Baghpat, Uttar Pradesh, India",
      phone: "+91 76520526",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.607979, 30.443266],
    },
    properties: {
      name: "ICS Computers Tally Institute of Learning",
      address: " Paonta Sahib, Himachal Pradesh, India",
      phone: "+91 794749522",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.5774, 28.907732],
    },
    properties: {
      name: "Rajsudha Institute of Technical Education",
      address: " Kazmabad Goon, Uttar Pradesh, India",
      phone: "+91 142361947",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.60141, 10.801891],
    },
    properties: {
      name: "Sri Thiyageraja B.Ed College",
      address: " Kattur, Thiruvarur, Tamil Nadu, India",
      phone: "+91 851552883",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.837173, 28.921412],
    },
    properties: {
      name: "Sri Parasnath Institute of Education and Technology",
      address: " Pipalsana, Uttar Pradesh, India",
      phone: "+91 928550551",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.842621, 28.096256],
    },
    properties: {
      name: "Brilliant Career Academy & Emitra",
      address: " Singhana, Rajasthan, India",
      phone: "+91 297481111",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.189011, 24.7195],
    },
    properties: {
      name: "AISECT University city office",
      address: " Panna, Madhya Pradesh, India",
      phone: "+91 200635798",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.136566, 24.474449],
    },
    properties: {
      name: "Sakshi Computers and Online",
      address: " Manasa, Madhya Pradesh India",
      phone: "+91 474015490",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [82.06881, 21.453362],
    },
    properties: {
      name: "Arman Computer and Choice Center",
      address: " Sandi, Chhattisgarh, India",
      phone: "+91 338055773",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [82.115761, 26.31048],
    },
    properties: {
      name: "Ramrati Verma Nanhku Verma Mahavidyalay",
      address: " Dwarikaganj, Sultanpur, Uttar Pradesh, India",
      phone: "+91 77794451",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.869621, 29.8745],
    },
    properties: {
      name: "D.I.E.T. Roorkee",
      address: " Ramnagar, Sunhaira, Uttarakhand, India",
      phone: "+91 697773687",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [82.54158, 25.271582],
    },
    properties: {
      name: "CRS Academy",
      address: " Ghosia, Uttar Pradesh, India",
      phone: "+91 417616383",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.781891, 21.051888],
    },
    properties: {
      name: "Institute of Computer Management",
      address: " Bhusawal, Maharashtra, India",
      phone: "+91 925070768",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.076775, 26.764177],
    },
    properties: {
      name: "S.P.S. INTER COLLEGE",
      address: " Khalilabad, Uttar Pradesh, India",
      phone: "+91 424786106",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.740738, 30.114763],
    },
    properties: {
      name: "Lal Chand Mal College Of Education",
      address: " Jhansa, Haryana, India",
      phone: "+91 427073400",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.737808, 23.838804],
    },
    properties: {
      name: "SSHC Jain Institute Of Management & Research",
      address: " Sagar, Madhya Pradesh, India",
      phone: "+91 857283728",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.867882, 19.294333],
    },
    properties: {
      name: "SIDDHAKALA Institute of Information Technology",
      address: " Mira Bhayandar, Maharashtra, India",
      phone: "+91 367416856",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.145195, 27.614258],
    },
    properties: {
      name: "IICE Technical College",
      address: " Sikar, Rajasthan, India",
      phone: "+91 445799133",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.395378, 28.82453],
    },
    properties: {
      name: "BIITS Vvocational Education Institute",
      address: " Kalanaur, Haryana, India",
      phone: "+91 27469296",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.218475, 17.686836],
    },
    properties: {
      name: "AU College of Engg for Women",
      address: " Visakhapatnam, Andhra Pradesh, India",
      phone: "+91 921502281",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.65332, 25.358749],
    },
    properties: {
      name: "SHIV Charan Mathur Institute of Management and Technology",
      address: " Bhilwara, Rajasthan, India",
      phone: "+91 444636213",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [82.57589, 21.977171],
    },
    properties: {
      name: "Govt. Polytechnic College Janjgir",
      address: " Khokhra, Chhattisgarh, India",
      phone: "+91 402965627",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.885857, 17.515722],
    },
    properties: {
      name: "GOUTHAMI Degree College",
      address: " Medikuntapally, Bhuvanagiri, Telangana, India",
      phone: "+91 618222718",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.812317, 18.394974],
    },
    properties: {
      name: "Vikas Degree College",
      address: " Sircilla, Karimnagar, Andhra Pradesh, India",
      phone: "+91 67556788",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.238556, 24.215406],
    },
    properties: {
      name: "Dudhinagar",
      address: " Uttar Pradesh, India",
      phone: "+91 15031831",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.45311, 29.659361],
    },
    properties: {
      name: "Parmanand Degree College",
      address: " Rajasthan, India",
      phone: "+91 442816893",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [87.084274, 25.482275],
    },
    properties: {
      name: "Dholbazza Bazar",
      address: " Bihar, India",
      phone: "+91 809216346",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.795502, 11.014572],
    },
    properties: {
      name: "Sri Renga Polytechnic College",
      address: " Siruganur, Tamil Nadu, India",
      phone: "+91 178412637",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.003456, 28.712507],
    },
    properties: {
      name: "Haryana Shakti College of Education",
      address: " Delhi, India",
      phone: "+91 526577300",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.603394, 27.446754],
    },
    properties: {
      name: "P.C.P.S. College Of Technology and Management",
      address: " Mathura, Uttar Pradesh, India",
      phone: "+91 88818464",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.469513, 19.227873],
    },
    properties: {
      name: "Shri Shivaji Jr.College",
      address: " Barad, Nanded, Maharashtra, India",
      phone: "+91 961554539",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.1688, 21.569529],
    },
    properties: {
      name: "Sondarba Ramsinh Mangrola Institute of Technology",
      address: " Valia, Gujarat, India",
      phone: "+91 550236680",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.443428, 26.707308],
    },
    properties: {
      name: "Little Flower Polytechnic",
      address: " Uttar Pradesh, India",
      phone: "+91 613213576",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.431335, 26.794573],
    },
    properties: {
      name: "Maharana Pratap Degree College",
      address: " Gorakhpur, Uttar Pradesh, India",
      phone: "+91 327993409",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.576782, 10.788888],
    },
    properties: {
      name: "Veludaiyar Polytechnic College",
      address: " Ammaiyappan, Tamil Nadu, India",
      phone: "+91 894619736",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.787285, 26.558735],
    },
    properties: {
      name: "Bhind",
      address: " Madhya Pradesh, India",
      phone: "+91 684612796",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.461082, 17.40971],
    },
    properties: {
      name: "Shadan Womens' College of Engineering & Technology",
      address: " Hyderabad, Telagana, India",
      phone: "+91 254050508",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.240105, 18.402493],
    },
    properties: {
      name: "Aditya Computer Centre",
      address: " Murud, Maharashtra, India",
      phone: "+91 230060791",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.790878, 26.563074],
    },
    properties: {
      name: "Anand Group of Institute",
      address: " Bhind, Madhya Pradesh, India",
      phone: "+91 848908497",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.177605, 19.623985],
    },
    properties: {
      name: "Amrutvahini Pharmacy College",
      address: " Ghulewadi, Maharashtra, India",
      phone: "+91 241456178",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.721359, 22.478479],
    },
    properties: {
      name: "Sarna Institute Of Social Service",
      address: " Chakulia, Jharkhand, India.",
      phone: "+91 295595413",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.991875, 25.124327],
    },
    properties: {
      name: "Insight Institute of Education",
      address: " Chhatarpur, Madhya Pradesh, India",
      phone: "+91 581821783",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.713615, 12.800494],
    },
    properties: {
      name: "TAPASYA PU College",
      address: " Chandapura, Bommasandra, Karnataka, India",
      phone: "+91 487777025",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.544998, 12.962516],
    },
    properties: {
      name: "JAI HIND Pre University College",
      address: " Vijayanagar, Bengaluru, Karnataka, India",
      phone: "+91 922882627",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.828751, 17.335739],
    },
    properties: {
      name: "Doddappa Appa Independent PU Science College",
      address: " Kalaburagi, Karnataka, India",
      phone: "+91 554685093",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.565453, 12.917582],
    },
    properties: {
      name: "KHYKHA Pre-University College",
      address: " Banashankari, Bengaluru, Karnataka, India",
      phone: "+91 978578845",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.492424, 21.01144],
    },
    properties: {
      name: "Disha Tech & Computer Institute",
      address: " Asalgaon, Maharashtra, India",
      phone: "+91 373734641",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.613281, 14.646123],
    },
    properties: {
      name: "Andhra Engineering College",
      address: " Atmakur, Andhra Pradesh, India",
      phone: "+91 433155710",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.650749, 28.632433],
    },
    properties: {
      name: "Infotech Computer Education Center",
      address: " Dhaulana, Uttar Pradesh, India",
      phone: "+91 763480102",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.871956, 31.628216],
    },
    properties: {
      name: "NEC Institute of Multipurpose Education",
      address: " Amritsar, Punjab, India",
      phone: "+91 954396080",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.753632, 30.55197],
    },
    properties: {
      name: "Modern College",
      address: " Khurd, Punjab, India",
      phone: "+91 668784258",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.320618, 18.272648],
    },
    properties: {
      name: "Morgaon",
      address: " Maharashtra, India",
      phone: "+91 546522024",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.114769, 28.381159],
    },
    properties: {
      name: "RDPD Girls PG College",
      address: " Uttar Pradesh, India",
      phone: "+91 630942951",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [85.354034, 26.119909],
    },
    properties: {
      name: "Lord Buddha Eduacational Trust",
      address: " Bhagwanpur, Muzaffarpur, Bihar, India",
      phone: "+91 83097185",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.703049, 30.001114],
    },
    properties: {
      name: "Shri Roopram Institute of Education",
      address: " Sona, Uttar Pradesh, India",
      phone: "+91 555264126",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.160904, 30.041355],
    },
    properties: {
      name: "Hari Om Shiv Om College of Education",
      address: " Radaur, Haryana, India",
      phone: "+91 558301329",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.007103, 29.01683],
    },
    properties: {
      name: "Mange Ram Women's College of Education",
      address: " Sonipat, Haryana, India",
      phone: "+91 198214251",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.730438, 8.726195],
    },
    properties: {
      name: "Spice CNC Training Centre",
      address: " Tirunelveli, Tamil Nadu, India",
      phone: "+91 823957399",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.167084, 27.86865],
    },
    properties: {
      name: "Rajesh Pilot Memorial College of Education",
      address: " Village Nayan, Haryana, India",
      phone: "+91 269793260",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.112778, 23.470751],
    },
    properties: {
      name: "SCCM Computer (AISECT)",
      address: " Al Bhawani Colony, Madhya Pradesh, India",
      phone: "+91 344784011",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [85.895592, 26.146269],
    },
    properties: {
      name: "Vocational Training Institute",
      address: " Darbhanga, Bihar, India",
      phone: "+91 79455461",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.063522, 26.842434],
    },
    properties: {
      name: "Bilhaur",
      address: " Uttar Pradesh, India",
      phone: "+91 330859173",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.007874, 26.283895],
    },
    properties: {
      name: "Shah Goverdhan Lal Kabra Teachers\\' College",
      address: " Jodhpur, Rajasthan, India",
      phone: "+91 498237070",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.649994, 28.241533],
    },
    properties: {
      name: "Shri Ramakant Vyas Mahila S Prashikshan Mahavid",
      address: " Chirawa, Rajasthan, India",
      phone: "+91 975791104",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.526115, 23.065395],
    },
    properties: {
      name: "JG College of Nursing",
      address: " Ahmedabad, Gujarat, India",
      phone: "+91 434693413",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [87.85759, 24.440908],
    },
    properties: {
      name: "Kabi Nazrul College",
      address: " Birbhum, West Bengal, India",
      phone: "+91 903697820",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.500328, 28.782917],
    },
    properties: {
      name: "Sirsa College of Science & Technology",
      address: " Baheri, Uttar Pradesh, India",
      phone: "+91 320978222",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.717392, 17.764095],
    },
    properties: {
      name: "Sri Kethaki Sangameshwara DEd & BEd College",
      address: " Jharasangam, Telagana, India",
      phone: "+91 465495243",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [88.006271, 25.391785],
    },
    properties: {
      name: "Chanchal Youth Computer Training Center",
      address: " Chanchal, West Bengal, India",
      phone: "+91 198396420",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [85.892593, 26.153242],
    },
    properties: {
      name: "C.M Science College Darbhanga",
      address: " India",
      phone: "+91 373983537",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [71.201775, 22.035608],
    },
    properties: {
      name: "Jasdan",
      address: " Gujarat, India",
      phone: "+91 814608528",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.414223, 11.659445],
    },
    properties: {
      name: "Thiagarajar College of Education",
      address: " Lakshminagar, Valappadi, Tamil Nadu, India",
      phone: "+91 526854316",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.411102, 11.659445],
    },
    properties: {
      name: "Sri Thiagarajar Polytechnic College",
      address: " Valappadi, Tamil Nadu, India",
      phone: "+91 184169140",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.039703, 24.208044],
    },
    properties: {
      name: "Malwa College of Education",
      address: " Distt-Guna, Madhya Pradesh, India",
      phone: "+91 17784817",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.293427, 24.628307],
    },
    properties: {
      name: "Omkar college of Professional Studies",
      address: " Guna, Madhya Pradesh, India",
      phone: "+91 503485505",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.781502, 18.56428],
    },
    properties: {
      name: "AIMTEC POINT Institute",
      address: " Baner, Maharashtra, India",
      phone: "+91 846921598",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.118332, 28.838169],
    },
    properties: {
      name: "Impact College of Science & Technology",
      address: " Patter Khera, Uttar Pradesh, India",
      phone: "+91 750632281",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.182068, 21.37429],
    },
    properties: {
      name: "Shree Sadguru Computer Institute",
      address: " Loni, Maharashtra, India",
      phone: "+91 613178194",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.37645, 22.809177],
    },
    properties: {
      name: "E-Gram CSC Center & Gothda",
      address: " Timba Road, Gujarat, India",
      phone: "+91 819200217",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.254112, 22.838627],
    },
    properties: {
      name: "IIHT Computer Center",
      address: " Dahod, Gujarat, India",
      phone: "+91 866274648",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.738708, 26.972013],
    },
    properties: {
      name: "PIITs Academy",
      address: " Jaipur, Rajasthan, India",
      phone: "+91 309121379",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.768204, 34.266361],
    },
    properties: {
      name: "Milat Computer Training Center",
      address: " Wata Lar, Jammu and Kashmir, India",
      phone: "+91 33552595",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.464813, 26.599792],
    },
    properties: {
      name: "Phaphund",
      address: " Uttar Pradesh, India",
      phone: "+91 726520880",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.399178, 27.158028],
    },
    properties: {
      name: "Institute of Information and Computer Education",
      address: " Firozabad, Uttar Pradesh, India",
      phone: "+91 797881907",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.460854, 27.030613],
    },
    properties: {
      name: "Disha Technology",
      address: " Hingonia, Rajasthan, India",
      phone: "+91 950444183",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.490807, 28.44157],
    },
    properties: {
      name: "CSC Center",
      address: " Sardarshahar, Uttar Pradesh, India",
      phone: "+91 685598015",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.708038, 29.538067],
    },
    properties: {
      name: "Bhuna",
      address: " Haryana, India",
      phone: "+91 736181637",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.855698, 20.613201],
    },
    properties: {
      name: "Instant Career Academy",
      address: " Brahmapuri, Maharashtra, India",
      phone: "+91 510672115",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.064377, 18.714235],
    },
    properties: {
      name: "Kaij",
      address: " Maharashtra, India",
      phone: "+91 157834152",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.11322, 12.220284],
    },
    properties: {
      name: "Arunai College of Education",
      address: " Tiruvannamalai, Tamil Nadu, India",
      phone: "+91 592572613",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.489311, 11.21728],
    },
    properties: {
      name: "Sasurie College of Engineering",
      address: " Pallagoundenpalayam, Tamil Nadu, India",
      phone: "+91 432643221",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.351097, 25.779238],
    },
    properties: {
      name: "Aishwarya College",
      address: " Pali, Rajasthan, India",
      phone: "+91 219463562",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.322159, 24.651806],
    },
    properties: {
      name: "Sonali College",
      address: " Guna, Madhya Pradesh, India",
      phone: "+91 534491109",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.759628, 26.759521],
    },
    properties: {
      name: "Ratalya",
      address: " Rajasthan, India",
      phone: "+91 82068556",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.299774, 29.130289],
    },
    properties: {
      name: "Pipalsana",
      address: " Uttar Pradesh, India",
      phone: "+91 556925659",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.397919, 30.016434],
    },
    properties: {
      name: "Nehru Memorial Government College",
      address: " Mansa, Punjab, India",
      phone: "+91 483090348",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.552895, 23.028713],
    },
    properties: {
      name: "Vaidya Shri M.M. Patel College of Education",
      address: " Ahmedabad, Gujarat, India",
      phone: "+91 346906400",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.576935, 13.081449],
    },
    properties: {
      name: "Gandhi Krishi Vigyan Kendra",
      address: " Bengaluru, Karnataka, India",
      phone: "+91 221761306",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.961792, 12.457373],
    },
    properties: {
      name: "APTECH Computer Education",
      address: " Kushalnagar, Karnataka, India",
      phone: "+91 221923871",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.689316, 21.288694],
    },
    properties: {
      name: "Soro",
      address: " Odisha, India",
      phone: "+91 306881519",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.489784, 28.439299],
    },
    properties: {
      name: "Institute of Prince Computer",
      address: " Sardarshahr, Rajasthan, India",
      phone: "+91 632603103",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.735374, 25.558374],
    },
    properties: {
      name: "Swami Vivekanand College Of Prof.Studies Shivpuri M.P.",
      address: " Khankar, Madhya Pradesh, India",
      phone: "+91 746648370",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.368378, 23.343723],
    },
    properties: {
      name: "B. Ed. College",
      address: " Purulia, West Bengal, India",
      phone: "+91 773995286",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.865311, 22.699026],
    },
    properties: {
      name: "Sant Deewan Karamchand Girls College",
      address: " Navlakha, Indore, Madhya Pradesh, India",
      phone: "+91 285173030",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.917252, 22.766277],
    },
    properties: {
      name: "ISBA Institute Of Professional Studies",
      address: " Indore, Madhya Pradesh, India",
      phone: "+91 271084615",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.874847, 25.292242],
    },
    properties: {
      name: "DAV College",
      address: " Mahoba, Uttar Pradesh, India",
      phone: "+91 446578198",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.761536, 18.651674],
    },
    properties: {
      name: "Pimpri Chinchwad College Of Engineering",
      address: " Pune, Maharashtra, India",
      phone: "+91 765820681",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [75.381866, 28.119631],
    },
    properties: {
      name: "IT & Management College",
      address: " Jhunjhunu, Rajasthan, India",
      phone: "+91 879032173",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.907257, 18.305754],
    },
    properties: {
      name: "Ravoof & Vazir Khan's Memorial College of Education",
      address: " Srikakulam, Andhra Pradesh, India",
      phone: "+91 157243713",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.612984, 17.336731],
    },
    properties: {
      name: "Government Degree College",
      address: " Kuntloor, Hyderabad, Telangana, India",
      phone: "+91 811174897",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.487068, 9.981465],
    },
    properties: {
      name: "Theni Kammavar Sangam College of Education",
      address: " Koduvilarpatty, Tamil Nadu, India",
      phone: "+91 842990680",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.897018, 26.803862],
    },
    properties: {
      name: "Resonance College",
      address: " Muslim Nagar, Lucknow, Uttar Pradesh, India",
      phone: "+91 444194186",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [84.791603, 25.99811],
    },
    properties: {
      name: "Bhakura",
      address: " Bihar, India",
      phone: "+91 273443806",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [88.284996, 24.101789],
    },
    properties: {
      name: "Murshidabad Institute of Technology",
      address: " Berhampore, West Bengal, India",
      phone: "+91 567703589",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.095245, 30.909674],
    },
    properties: {
      name: "Himachal Institute of Education",
      address: " Solan, Himachal Pradesh, India",
      phone: "+91 9733438",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.680359, 29.707613],
    },
    properties: {
      name: "Deoband College of Higher Education",
      address: " Deoband, Jaipur, India",
      phone: "+91 110643523",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [84.328888, 26.36215],
    },
    properties: {
      name: "Mukul Industrial Training Center",
      address: " Rajarpur, Bihar, India",
      phone: "+91 337330097",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.534401, 10.704152],
    },
    properties: {
      name: "The New Polytechnic College",
      address: " Inamkulathur, Trichy, Tamil Nadu, India",
      phone: "+91 109161308",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.117409, 17.585157],
    },
    properties: {
      name: "Arya College of Pharmacy",
      address: " Khandi, Patancheru, Telangana, India",
      phone: "+91 93545161",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [86.337189, 24.220886],
    },
    properties: {
      name: "Khandoli Institute of Technology",
      address:
        " At-Dighariakala, PO- Motileda, Dist-Giridih, Jaharkhand, India",
      phone: "+91 782803305",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [80.139191, 13.463804],
    },
    properties: {
      name: "Sri Jayaram Institute of Engineering and Technology",
      address: " Elavur, Natham, Gummidipundi, Tamil Nadu, India",
      phone: "+91 964098813",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [77.498901, 11.440657],
    },
    properties: {
      name: "Shree Venkateshwara Hi-Tech Polytechnic College",
      address: " Othakuthirai, Gobichettipalayam, Erode Dt, Tamil Nadu, India",
      phone: "+91 229123753",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [72.864906, 19.213711],
    },
    properties: {
      name: "Thakur Polytechnic",
      address: " Asha Nagar, Borivali, Mumbai, Maharashtra, India",
      phone: "+91 922771580",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [73.20697, 22.285612],
    },
    properties: {
      name: "C.K. Shah Vijapurwala Institute of Management",
      address: " Pratap Nagar, Vadodara, Gujarat, India",
      phone: "+91 602110290",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.177635, 19.623943],
    },
    properties: {
      name: "Amrutvahini Pharmacy College",
      address: " Sangamner, Maharashtra, India",
      phone: "+91 540567672",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [88.434555, 22.629627],
    },
    properties: {
      name: "B.P. Poddar Institute of Management & Technology",
      address: " Kaikhali, Kolkata, West Bengal, India",
      phone: "+91 420500924",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.064484, 11.838565],
    },
    properties: {
      name: "Poosaripatti",
      address: " Tamil Nadu, India",
      phone: "+91 633626471",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [83.311127, 17.874479],
    },
    properties: {
      name: "VITAM Engineering College",
      address: " Visakhapatnam, Andhra Pradesh, India",
      phone: "+91 716078875",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [90.626617, 26.170223],
    },
    properties: {
      name: "Goalpara College",
      address: " Goalpara, Assam, India",
      phone: "+91 827243276",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [74.793579, 13.352585],
    },
    properties: {
      name: "Manipal School of Architecture and Planning",
      address: " Eshwar Nagar, Manipal, Karnataka, India",
      phone: "+91 728636404",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.342972, 19.096413],
    },
    properties: {
      name: "Nirmal",
      address: " Telangana, India",
      phone: "+91 365311728",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [81.854797, 17.26424],
    },
    properties: {
      name: "Hanna College of Education",
      address: " Gokavaram, Andhra Pradesh, India",
      phone: "+91 798242748",
      naac: "A+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.304352, 30.123823],
    },
    properties: {
      name: "Omkarananda Institute of Management and Technology",
      address: " Rishikesh, India",
      phone: "+91 165161384",
      naac: "B++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [79.199997, 22.950001],
    },
    properties: {
      name: "Narsinghpur",
      address: "Narsinghpur",
      phone: "+91 588814336",
      naac: "B+",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [78.132103, 9.92974],
    },
    properties: {
      name: "American College",
      address: " Madurai, Tamil Nadu, India",
      phone: "+91 344264854",
      naac: "A++",
    },
  },
  {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [76.459137, 30.566622],
    },
    properties: {
      name: "Continental Institute for International Studies",
      address: " India",
      phone: "+91 947879020",
      naac: "B+",
    },
  },
];
